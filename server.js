const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Required for file paths

const app = express();

// --- MIDDLEWARE ---
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname)); // Crucial: Allows browser to find style.css and newfeat.js

// --- DATABASE CONNECTION ---
// Using 127.0.0.1 to avoid localhost resolution issues
mongoose.connect('mongodb://adminbruno:adminbrunop12@ac-5gy8pc7-shard-00-00.gapxbpr.mongodb.net:27017,ac-5gy8pc7-shard-00-01.gapxbpr.mongodb.net:27017,ac-5gy8pc7-shard-00-02.gapxbpr.mongodb.net:27017/pccoetech?ssl=true&replicaSet=atlas-63jifl-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(() => console.log("✅ Connected to MongoDB: pccoetech"))
    .catch(err => console.error("❌ DB Connection Error:", err.message));

// --- SCHEMAS & MODELS ---

// 1. Registration Model (For the "Apply Now" form)
const registrationSchema = new mongoose.Schema({
    clubName: String,
    studentName: String,
    department: String,
    reason: String,
    date: { type: Date, default: Date.now }
});
const Registration = mongoose.model('Registration', registrationSchema);

// 2. Club Model (For fetching the 10 clubs info)
const clubSchema = new mongoose.Schema({
    clubName: String,
    president: String,
    vicePresident: String,
    achievements: [String]
});
const Club = mongoose.model('Club', clubSchema, 'clubs');

// --- ROUTES ---

// 1. Page Route: Serve the dedicated Club Info HTML page
app.get('/club-info', (req, res) => {
    res.sendFile(path.join(__dirname, 'club-info.html'));
});

// 2. API Route: Get all clubs from MongoDB
app.get('/api/clubs', async (req, res) => {
    try {
        const data = await Club.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. API Route: Handle Form Submissions (Apply Now)
app.post('/api/register', async (req, res) => {
    try {
        const newReg = new Registration(req.body);
        await newReg.save();
        res.status(201).json({ message: "Registration saved!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. API Route: Admin View and Delete
app.get('/api/registrations', async (req, res) => {
    try {
        const data = await Registration.find().sort({ date: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch registrations" });
    }
});

app.delete('/api/registrations/:id', async (req, res) => {
    try {
        await Registration.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// --- START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📂 Home: http://localhost:${PORT}`);
    console.log(`ℹ️  Club Info Page: http://localhost:${PORT}/club-info`);
});