async function loadAllClubs() {
    try {
        const response = await fetch('http://localhost:5000/api/clubs');
        const clubs = await response.json();

        console.log("DATA:", clubs); // debug

        const grid = document.getElementById('all-clubs-grid');
        if (!grid) return;

        grid.innerHTML = '';

        clubs.forEach(club => {
            const card = document.createElement('div');
            card.className = 'club-card';

            card.innerHTML = `
                <div class="club-card-content">
                    <h3>${club.clubName}</h3>
                    <p><strong>President:</strong> ${club.president}</p>
                    <ul>
                        ${(club.achievements || []).map(a => `<li>${a}</li>`).join('')}
                    </ul>
                </div>
            `;

            grid.appendChild(card);
        });

    } catch (error) {
        console.error("Failed to load clubs:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadAllClubs);