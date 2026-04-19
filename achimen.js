/**
 * achievements.js
 * PCCOE Clubs Achievements Handler
 */

// Global storage for the database data to allow instant filtering
let allAchievements = [];

/**
 * Main Fetch Function
 * Pulls achievements from MongoDB via the Express API
 */
async function fetchAchievements() {
    const grid = document.getElementById('achievements-grid');
    const subtitle = document.querySelector('.admin-subtitle');

    // Show loading state
    grid.innerHTML = `
        <div class="empty-state">
            <div class="loading-spinner"></div>
            <p>Fetching trophies from database...</p>
        </div>
    `;

    try {
        const response = await fetch('http://localhost:5000/api/achievements');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        allAchievements = await response.json();

        // Update record count in subtitle
        if (subtitle) {
            subtitle.textContent = `Celebrating ${allAchievements.length} milestones of PCCOE Technical Teams`;
        }

        // Initial render of all items
        renderFilteredGrid('all');

    } catch (err) {
        console.error("Fetch error:", err);
        grid.innerHTML = `
            <div class="empty-state" style="color: #ef4444;">
                <p>❌ Error connecting to server. Make sure MongoDB and Server.js are running.</p>
            </div>
        `;
    }
}

/**
 * Filter and Render Logic
 * Updates the UI based on the selected club
 */
function renderFilteredGrid(clubFilter) {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';

    // Filter logic
    const filteredData = clubFilter === 'all' 
        ? allAchievements 
        : allAchievements.filter(item => item.clubName === clubFilter);

    // Empty state if a club has no achievements yet
    if (filteredData.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <p>No achievements recorded for ${clubFilter === 'all' ? 'any club' : clubFilter} yet.</p>
            </div>
        `;
        return;
    }

    // Build the grid
    filteredData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        
        card.innerHTML = `
            <span class="achievement-tag">${item.clubName || 'Technical'}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="achievement-date">
                <span>🏆</span> ${item.date || 'Recent'}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

/**
 * Button Click Handler
 * Manages the "Active" state of the filter buttons
 */
function filterAchievements(clubName) {
    // 1. Update UI: Toggle active class on buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        // Compare button text with the passed clubName
        if (btn.textContent.trim() === clubName || (clubName === 'all' && btn.textContent.trim() === 'All')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 2. Filter the cards
    renderFilteredGrid(clubName);
}

/**
 * Initialize on Load
 */
document.addEventListener('DOMContentLoaded', () => {
    fetchAchievements();
});