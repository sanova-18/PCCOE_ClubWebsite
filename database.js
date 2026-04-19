const { setServers } = require('node:dns').promises;
setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config();
const mongoose = require('mongoose');

// Club Schema based on User's 4 distinct sections constraint
const clubSchema = new mongoose.Schema({
    clubName: { type: String, required: true },
    president:  { type: String, required: true },
    vicePresident: { type: String, required: true },
    achievements: [{ type: String }],
   
});

const Club = mongoose.model('Club', clubSchema);

// Sample Data derived from the website details
const seedData = [
    {
        clubName: "Team Automatons",
        president: "Sarthak (Placeholder)", 
        vicePresident: "Rahul (Placeholder)",
        achievements: ["1st Place Robotics National", "Best Autonomous Navigation Award"]
    },
    {
        clubName: "Team Kratos",
        president: "Amit (Placeholder)",
        vicePresident: "Neha (Placeholder)",
        achievements: ["Top Speed Formula SAE", "Engineering Excellence Award"]
    },
    {
        clubName: "GDGC",
        president: "Rohit (Placeholder)",
        vicePresident: "Priya (Placeholder)",
        achievements: ["Successfully hosted Google Cloud Next Watch Party", "500+ attendees at Android Development Sprint"]

    },
    {
        clubname: "Solarium",
        president:"aryan Jadhav",
        vicePresident:"raj dhanjode",
        achievements: ["ESVC 2025 - Electric Solar Vehicle Championship, championship edition, NSVC 2023 - National Solar Vehicle Challenge ,ESVC 2023 - Electric Solar Vehicle Championship"]
    },
    {
        clubName: "Ambush",
        president: "Dr. I. R. Sathone",
        vicePresident: "",
        achievements: ["All India Rank 01 – SAE TIFAN 2024–25 ,Qualified for Final Round of SAE TIFAN 2023- 2024 amongst 40 teams across India, Best Design Award – Rank 01 – SAE TIFAN 2024–25, Best Productivity Award – Rank 02 – SAE TIFAN 2024–25"]
    },
    {
        clubName: "Kratos ",
        president: " Suraj aher",
        vicePresident: "",
        achievements: ["Formula Bharat 2025: Overall Winners (1st Prize).,Formula Bharat 2025 Dynamic Wins: 1st place in Dynamics, Endurance, Efficiency, Skidpad, Acceleration, and Autocross."]

    },
    {
         clubName: "Red baron",
        president: "Devansh rahate",
        vicePresident: "ishan bhosale ",
        achievements: ["Albatros XIII – 2025- AIR 3 in Sled Pull, AIR 6 in Maneuverability, AIR 5 in Acceleration, AIR 4 in Suspension and Traction, and AIR 5 in Endurance "]
    },
    {
         clubName: "Anantam",
        president: "Soham vakte ",
        vicePresident: "Karan marathe",
        achievements: ["Red titan 1: The mission achieved a successful launch and stable ascent, validating propulsion performance, structural integrity, and avionics sequencing in an operational environment. While recovery was partial, the flight delivered exactly what experimental aerospace development demands—high-value data, clear lessons, and defined paths for improvement"]

    },
    {
         clubName: "Maverick",
        president: "Ritik Lipate", 
        vicePresident: "Nimisha Halabe",
        achievements: ["NIDAR (National Innovation Challenge for Drone Application & Research), Overall Performance:- AIR 2nd in Disaster Management Category"]
    },
    {
        clubName: "Computer Engineering Students Association (CESA)",
        president: "Sourav Narvekar",
        vicePresident: "Sahil Hirve ",
        achievements: ["CESA is the Computer Engineering Students Association of the Department of Computer Engineering at PCCOE, Pune. It works on chapters like PCCOE ACM Student Chapter, PCCOE ACM-W Student Chapter, CSI, and IET. It is the managing body that handles all the events in the department."]
    },
    {
        clubName: "Mechanical Engineering Students Association (MESA)",
        president: "Ashay Jambhorkar",
        vicePresident: "Aditya Patil",
        achievements: ["Mechanical Engineering Students Association (MESA) at Pimpri Chinchwad college of Engineering believes in the holistic development of the students to meet their professional & societal needs. It connects the student community to the world outside the classroom walls."]
    },
    {
        clubName: "Electronics and telecommunication student association",
        president: "Dr. Swati Patil",
        vicePresident: "Kaivalya Katti",
        achievements: ["ETSA provides a platform for holistic student development beyond academics. Through technical, co-curricular, cultural and social initiatives, the association nurtures leadership qualities, communication skills and social responsibility. ETSA encourages students to actively participate, lead initiatives and grow into confident professionals prepared for industry and societal challenges."]
    },
    {
          clubName: "Civil Engineering Students Association (CiESA)",
        president: "Dr.Suresh Nama", 
        vicePresident: "",
        achievements: [""]
    }
];

const registrationSchema = new mongoose.Schema({
    clubName: String, // Which club are they joining?
    studentName: { type: String, required: true },
    department: { type: String, required: true },
    reason: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});

const Registration = mongoose.model('Registration', registrationSchema);
module.exports = { Club, Registration }; // Export both now
async function seedDB() {
    try {
        console.log("Connecting to MongoDB Atlas Cluster0...");
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to MongoDB Workspace 'pccoetech'.");

        console.log("Emptying previous Club records (if any)...");
        await Club.deleteMany({});
        
        console.log("Creating database structure with the 4 distinct requested sections...");
        await Club.insertMany(seedData);
        
        console.log("Database seeded successfully!");
        
        const seededClubs = await Club.find({});
        console.log("Current Database Output Snapshot:");
        console.log(JSON.stringify(seededClubs, null, 2));

    } catch (error) {
        console.error("Error connecting to database or seeding:", error);
    } finally {
        mongoose.connection.close();
        console.log("Connection securely closed.");
    }
}


module.exports = Club; // THIS LINE IS KEY!

