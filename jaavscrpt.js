const techClubsData = [
    {
        name: "Team Automatons",
        description: "Pioneering robotics and intelligent systems. We build autonomous machines that shape the future.",
        about: "Team Automatons is the robotics team of PCCOE. Founded with a vision to push the boundaries of intelligent systems, we focus on autonomous navigation, artificial intelligence, and mechanical prowess.",
        contact: "automatons@pccoepune.org",
        icon: "🤖",
        instagram: "https://www.instagram.com/team_automatons/",
        linkedin: "https://www.linkedin.com/company/team-automatons/posts/?feedView=all",
        website: "https://www.teamautomatons.in/",
        faqs: [
            { question: "Do I need advanced technical skills to join as a first-year student?", answer: "Not at all. Most teams look for attitude, logic, and a willingness to learn over existing expertise. Since these are multi-disciplinary teams, they provide rigorous internal training." },
            { question: "What is the time commitment required?", answer: "Joining a technical club is a significant commitment. During peak competition seasons, teams often work late hours in the workshop to meet fabrication deadlines. However, the experience gained is often cited by alumni as the most valuable part of their engineering degree." },
            { question: "What software stack do the Automatons use?", answer: "We work with everything from low-level C++ for microcontrollers and Arduino to advanced ROS (Robot Operating System) and computer vision for autonomous navigation." },
            { question: "What kind of robots do you build?", answer: "We build high-performance robots for national competitions like ABU Robocon, ranging from manual-controlled bots to fully autonomous machines." }
        ]
    },
    {
        name: "Team Solarium",
        description: "Driving the transition to sustainable energy through cutting-edge solar powered off-road electric vehicles.",
        about: "Team Solarium is dedicated to renewable energy innovation. We design, manufacture, and race solar electric vehicles. If you're passionate about EVs and sustainability, this is the place for you.",
        contact: "solarium@pccoepune.org",
        icon: "☀️",
        instagram: "https://www.instagram.com/teamsolarium_india",
        linkedin: "https://www.linkedin.com/company/team-solarium/",
        website: "https://teamsolarium.com/",
        faqs: [
            { question: "What is the 'Invictus' series?", answer: "Invictus is the name given to our lineup of solar vehicles. Each iteration features advancements in aerodynamics, battery management, and weight reduction." },
            { question: "Is Solarium different from Red Baron or Kratos Racing?", answer: "Yes. While those teams focus on off-road or formula-style racing, Solarium focuses specifically on Solar-Electric efficiency, endurance, and renewable energy integration." }
        ]
    },
    {
        name: "Team Maverick",
        description: "Engineering excellence in off-road buggy manufacturing and ATV competitions.",
        about: "We are an elite BAJA SAE off-road racing team. Team Maverick builds rugged, all-terrain buggies capable of enduring the toughest trials.",
        contact: "maverick@pccoepune.org",
        icon: "🏎️",
        instagram: "https://www.instagram.com/team_maverick_pccoe/",
        linkedin: "https://www.linkedin.com/in/team-automatons/",
        website: "https://mechanical.pccoepune.com/clubs/maverick.php",
        faqs: [
            { question: "What does Team Maverick actually do?", answer: "We design, build, and race rugged all-terrain buggies. Our focus is on structural engineering, drivetrain design, and performance tuning for BAJA SAE competitions." },
            { question: "Can I join if I am from a non-mechanical branch?", answer: "Absolutely! We need electronics students for sensors and telemetry, and CS/IT students for simulations and website management." }
        ]
    },
    {
        name: "Team Ambush",
        description: "Designing and manufacturing high-performance off-road vehicles with a focus on agility and power.",
        about: "Team Ambush pushes off-road engineering limits. Our members gain hands-on experience in automotive design and dynamics.",
        contact: "ambush@pccoepune.org",
        icon: "🦅",
        instagram: "https://www.instagram.com/teamambush_india/",
        linkedin: "https://www.linkedin.com/company/teamambush/",
        website: "https://mechanical.pccoepune.com/clubs/ambush.php",
        faqs: [
            { question: "What kind of machines does Team Ambush build?", answer: "While we are known for building rugged off-road vehicles (ATVs), we also focus on Agri-Tech — designing machines like automated seed sowers and smart sprayers." },
            { question: "What technical skills will I learn?", answer: "From heavy-duty fabrication and welding to advanced electronics for automation. You'll gain hands-on experience in mechanical design and real-world problem-solving." }
        ]
    },
    {
        name: "Team Kratos",
        description: "Formula Student team engineering high-speed electric race cars for global competitions.",
        about: "Kratos Racing is PCCOE's Formula SAE team. We build high-speed, aerodynamic, and lightweight electric race cars.",
        contact: "kratos@pccoepune.org",
        icon: "⚡",
        instagram: "https://www.instagram.com/team_kratos?igsh=Y3VienZ0M2hkd2No",
        linkedin: "https://share.google/H2gBxCiwgNrRUa31p",
        website: "https://www.kratosracing.in/index.html",
        faqs: [
            { question: "What technical domains exist within TKR?", answer: "Mechanical: Chassis, Aerodynamics, Drivetrain, Suspension. Electronics: High Voltage, Low Voltage, Cooling Systems. Statics: Business Plan, Cost, and Design Analysis." },
            { question: "Do you compete internationally?", answer: "Yes, we have represented India at Formula Student Germany and Formula Student Hungary." }
        ]
    },
    {
        name: "Team Anantam",
        description: "Innovators in aero-design, building technically advanced drones and RC aircraft.",
        about: "Reach for the skies with Team Anantam! Our RC aircrafts and drones participate in SAE Aero design challenges.",
        contact: "anantam@pccoepune.org",
        icon: "🛩️",
        instagram: "https://www.instagram.com/_tarsr_pccoe/",
        linkedin: "https://www.linkedin.com/company/team-anantampccoe/",
        website: "https://www.tarsr.com/contactus",
        faqs: [
            { question: "What does Team Anantam actually build?", answer: "We design and launch model rockets and CanSats. Our projects involve building airframes, recovery systems, and electronic sensors that track the flight." },
            { question: "Do I need to be an expert in Space Science to join?", answer: "Not at all! We need Mechanical students for structures, Electronics students for flight computers, and CS/AIML students for data analysis and simulations." }
        ]
    },
    {
        name: "Team Redbaron",
        description: "Specializing in the design and development of dynamic all-terrain vehicles.",
        about: "Team Redbaron is relentless in structural engineering and performance tuning for ATVs.",
        contact: "redbaron@pccoepune.org",
        icon: "🛡️",
        instagram: "https://www.instagram.com/team_red_baron",
        linkedin: "https://in.linkedin.com/company/team-red-baron",
        website: "https://teamredbaron.com/",
        faqs: [
            { question: "Does the team work on Electric Vehicles (EV)?", answer: "Yes, the team participates in both mBAJA (Internal Combustion) and eBAJA (Electric) categories, focusing on battery management systems and motor controllers." },
            { question: "Where do we compete?", answer: "The primary competition is BAJA SAEINDIA, usually held at Pithampur (NATRAX) or Chitkara University. We also aim for international events based on sponsorship." }
        ]
    }
];

const deptClubsData = [
    {
        name: "ACMW",
        description: "ACM Women's chapter fostering women in technology.",
        about: "Empowering women in the tech space through coding, networking, and leadership opportunities.",
        contact: "acmw@pccoepune.org",
        icon: "👩‍💻",
        instagram: "https://share.google/2uieheHyXQZYSn0f0",
        linkedin: "https://share.google/sSLvc4G0mDQxr2Hfz",
        website: "https://pccoeacmw.acm.org/"
    },
    {
        name: "OWASP",
        description: "Security community dedicated to enabling organizations to develop secure applications.",
        about: "Learn ethical hacking, secure software development, and cyber-security best practices.",
        contact: "owasp@pccoepune.org",
        icon: "🔒",
        instagram: "https://www.instagram.com/pccoe_owasp/",
        linkedin: "https://www.linkedin.com/company/owasp-student-chapter-pccoe/",
        website: "https://owasppccoe.vercel.app/"
    },
    {
        name: "GDGC",
        description: "Google Developer Groups on Campus - fostering development skills with Google technologies.",
        about: "A developer club powered by Google. Learn about Android, Cloud, Web, and AI from experts.",
        contact: "gdgc@pccoepune.org",
        icon: "🌐",
        instagram: "https://share.google/2O6Jsg5cEOyytUOYS",
        linkedin: "https://share.google/nZ3G3q0GQA7tojBRL",
        website: ""
    },
    {
        name: "MLSC",
        description: "Microsoft Learn Student Club - building next-gen technological skills.",
        about: "Explore Azure, .NET, and Microsoft's robust tech stack with the Microsoft Learn Student Club.",
        contact: "mlsc@pccoepune.org",
        icon: "💻",
        instagram: "https://www.instagram.com/mlscpccoe/",
        linkedin: "https://www.linkedin.com/company/mlsc-pccoe-chapter",
        website: "https://mlscpccoe.site/"
    },
    {
        name: "PCCOE Coding Club",
        description: "A community of coders and algorithmic problem solvers.",
        about: "We aim to improve your competitive programming ranking and problem-solving skills.",
        contact: "codingclub@pccoepune.org",
        icon: "⌨️",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
        website: "https://abhishekeb211.github.io/PCCOE-CODING-CLUB.github.io/"
    },
    {
        name: "GFG PCCOE",
        description: "GeeksforGeeks student chapter representing programming enthusiasm at PCCOE.",
        about: "The ultimate hub for GeeksforGeeks resources, workshops, and interview preparations.",
        contact: "gfg@pccoepune.org",
        icon: "🧩",
        instagram: "https://www.instagram.com/gfg_pccoe/",
        linkedin: "https://www.linkedin.com/company/gfgpccoe",
        website: "https://gfgpccoe.in/"
    },
    {
        name: "Codechef PCCOE",
        description: "Competitive programming chapter to build algorithmic excellence.",
        about: "Join the largest competitive programming community at PCCOE. Let's cook some code!",
        contact: "codechef@pccoepune.org",
        icon: "👨‍🍳",
        instagram: "https://www.instagram.com/pccoe.codechef.chapter/",
        linkedin: "https://www.linkedin.com/company/codechef-pccoe-chapter",
        website: "https://codechef-pccoe.vercel.app/"
    }
];

const studentAssocData = [
    {
        name: "AIMSA",
        description: "Artificial Intelligence and Machine Learning Student Association.",
        about: "Discover the world of AI/ML through hands-on workshops and real-world projects.",
        contact: "aimsa@pccoepune.org",
        icon: "🧠",
        instagram: "https://www.instagram.com/pccoe_aimsa",
        linkedin: "https://www.linkedin.com/company/pccoe-s-aimsa/",
        website: "https://www.pccoeaimsa.in/",
        faqs: [
            { question: "What are the 'Student Development Cells' within AiMSA?", answer: "AiMSA has a structured cell system: Coding Cell for competitive programming, Professional Development Cell for resume building and mock interviews, Higher Studies Cell for GRE/GATE/CAT guidance, and ISR for social outreach programs." },
            { question: "What professional bodies are associated with AiMSA?", answer: "AiMSA hosts chapters for AAAI and INNS, giving students access to global research and networking." },
            { question: "What software and tools will I master?", answer: "Through workshops, members gain hands-on experience in Python, TensorFlow, PyTorch, Scikit-learn, and modern cloud platforms." }
        ]
    },
    {
        name: "CRESA",
        description: "Civil Engineering Students Association at PCCOE.",
        about: "Fostering leadership and engineering talent among civil engineering students.",
        contact: "cresa@pccoepune.org",
        icon: "🏗️",
        instagram: "https://share.google/ntSSm4EMXjVVFENa9",
        linkedin: "https://share.google/ZeelvOqenToeBXVmd",
        website: "https://share.google/xsNcTi9Vl4AuNjQok"
    },
    {
        name: "ETSA",
        description: "Electronics and Telecommunication Students Association.",
        about: "Connecting ENTC students with industry tech scenarios, from IoT to digital electronics.",
        contact: "etsa@pccoepune.org",
        icon: "📡",
        instagram: "https://share.google/oDVWcnzrEhhdyzjMr",
        linkedin: "https://share.google/iPcump9D1cgvBQkTk",
        website: "https://entc.pccoepune.com/entc-etsa.php"
    },
    {
        name: "MESA",
        description: "Mechanical Engineering Students Association.",
        about: "The backbone of mechanical events, hosting seminars and competitions.",
        contact: "mesa@pccoepune.org",
        icon: "⚙️",
        instagram: "https://share.google/9ZKRWGCkbdpPBMruq",
        linkedin: "https://share.google/crgJajPkkHepXg1pw",
        website: "https://www.mesapccoe.org/"
    },
    {
        name: "ITSA",
        description: "Information Technology Students Association.",
        about: "Connecting IT enthusiasts to discuss recent trends, algorithms, and software development methodologies.",
        contact: "itsa@pccoepune.org",
        icon: "🖥️",
        instagram: "https://share.google/3MTuxRidBA5G20COi",
        linkedin: "https://share.google/usUtxejH3L6DEKYOc",
        website: "https://it.pccoepune.com/itsa"
    },
    {
        name: "CESA (ACM)",
        description: "Computer Engineering Student Association / ACM Chapter.",
        about: "Encouraging a research mindset alongside software engineering among computer undergrads.",
        contact: "cesa@pccoepune.org",
        icon: "📟",
        instagram: "https://share.google/1Y2YuFdq3B18YRJf2",
        linkedin: "https://share.google/abhhx7UQOzghH2NZJ",
        website: "https://pccoe.acm.org/"
    },
    {
        name: "CIESA",
        description: "Civil Engineering Event Student Association.",
        about: "Organizing civil tech fests, expert lectures, and mega structural challenges.",
        contact: "ciesa@pccoepune.org",
        icon: "📐",
        instagram: "https://share.google/SaDu2WoOrxPqDk0Lt",
        linkedin: "https://share.google/sD0kRfJ7Z0lva4tg6",
        website: "https://civil.pccoepune.com/pages/events/CIESA.php"
    }
];

// ─── SVG Icons ───────────────────────────────────────────────
const icons = {
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
};

// ─── Single DOMContentLoaded — everything lives here ────────
document.addEventListener('DOMContentLoaded', () => {

    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const introOverlay = document.getElementById('intro-overlay');
    const bubble = document.getElementById('transition-bubble');
    const content = document.querySelector('.intro-content');

    if (introOverlay && bubble) {

        // Step 1: fade text
        setTimeout(() => {
            if (content) content.style.opacity = '0';
        }, 1500);

        // Step 2: start bubble
        setTimeout(() => {
            bubble.classList.add('expand');
        }, 1700);

        // Step 3: fade overlay WHILE bubble is expanding
        setTimeout(() => {
            introOverlay.classList.add('fade-out');
        }, 2200);

        // Step 4: restore scroll (no delay feeling)
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 2500);
    }

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    // --- Theme: restore saved preference on load ---
const savedTheme = localStorage.getItem('theme');
const htmlElement = document.documentElement;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const themeToggle = document.getElementById('theme-toggle');

if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    if (moonIcon) moonIcon.style.display = 'none';
    if (sunIcon) sunIcon.style.display = 'block';
} else {
    htmlElement.removeAttribute('data-theme');
    if (moonIcon) moonIcon.style.display = 'block';
    if (sunIcon) sunIcon.style.display = 'none';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = htmlElement.hasAttribute('data-theme');
        if (isDark) {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            if (moonIcon) moonIcon.style.display = 'block';
            if (sunIcon) sunIcon.style.display = 'none';
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (moonIcon) moonIcon.style.display = 'none';
            if (sunIcon) sunIcon.style.display = 'block';
        }
    });
}

    // --- Grab DOM elements ---
    const modal     = document.getElementById('club-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');

    // --- Club modal close ---
    if (closeModal && modal) {
        closeModal.onclick = () => modal.classList.remove('show');
    }

    window.onclick = (e) => {
        if (e.target === modal) modal.classList.remove('show');
        const regModal = document.getElementById('register-modal');
        if (e.target === regModal) regModal.classList.remove('show');
    };

    // --- Close registration modal button ---
    const closeRegModal = document.getElementById('close-reg-modal');
    if (closeRegModal) {
        closeRegModal.onclick = () => {
            document.getElementById('register-modal').classList.remove('show');
        };
    }

    // --- Registration form submit ---
    const regForm = document.getElementById('registration-form');
    if (regForm) {
        regForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = {
                clubName:    document.getElementById('form-club-name')?.value,
                studentName: document.getElementById('student-name')?.value,
                department:  document.getElementById('student-dept')?.value,
                reason:      document.getElementById('join-reason')?.value
            };

            try {
                const response = await fetch('http://localhost:5000/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

               if (response.ok) {
    // Close register modal
    document.getElementById('register-modal').classList.remove('show');
    regForm.reset();

    // Show success message inside club modal
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
            <h2 style="font-family: var(--font-heading); margin-bottom: 0.75rem; color: var(--text-primary);">
                Application Sent!
            </h2>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                Your application for <strong style="color: var(--accent-blue);">${formData.clubName}</strong> 
                has been submitted successfully. The team will get back to you soon.
            </p>
            <button class="register-btn" onclick="document.getElementById('club-modal').classList.remove('show')" 
                style="width: auto; padding: 0.75rem 2rem; border: none; cursor: pointer;">
                Done
            </button>
        </div>
    `;
    modal.classList.add('show');

} else {
    // Show error inside the modal instead of alert
    const errDiv = document.createElement('p');
    errDiv.style.cssText = 'color: red; margin-top: 1rem; text-align: center; font-size: 0.9rem;';
    errDiv.textContent = '❌ Server error. Make sure your backend is running.';
    // Remove any existing error message first
    const existing = regForm.querySelector('.err-msg');
    if (existing) existing.remove();
    errDiv.classList.add('err-msg');
    regForm.appendChild(errDiv);
}
            } 
             catch (err) {
    console.error("Connection error:", err);
    const errDiv = document.createElement('p');
    errDiv.style.cssText = 'color: red; margin-top: 1rem; text-align: center; font-size: 0.9rem;';
    errDiv.textContent = '❌ Cannot connect to server. Start server.js!';
    const existing = regForm.querySelector('.err-msg');
    if (existing) existing.remove();
    errDiv.classList.add('err-msg');
    regForm.appendChild(errDiv);
}
        });
    }

    // --- Render club cards ---
    const renderClubs = (dataArray, containerId) => {
        const grid = document.getElementById(containerId);
        if (!grid) return;

        grid.innerHTML = '';

        dataArray.forEach((club, index) => {
            const card = document.createElement('div');
            card.className = 'club-card';
            card.style.animationDelay = `${index * 50}ms`;

            card.innerHTML = `
                <div class="club-icon-container">${club.icon}</div>
                <h3>${club.name}</h3>
                <p>${club.description}</p>
                <div class="social-links" style="pointer-events: none;">
                    ${club.instagram ? `<span class="social-link">${icons.instagram}</span>` : ''}
                    ${club.linkedin  ? `<span class="social-link">${icons.linkedin}</span>`  : ''}
                </div>
            `;

            card.addEventListener('click', () => {
                const faqHtml = club.faqs ? `
                    <div class="faq-section">
                        <h3>FAQs</h3>
                        ${club.faqs.map(faq => `
                            <details class="faq-item">
                                <summary class="faq-question">${faq.question}</summary>
                                <div class="faq-answer">${faq.answer}</div>
                            </details>
                        `).join('')}
                    </div>` : '';

                modalBody.innerHTML = `
                    <h2>${club.icon} ${club.name}</h2>
                    <p class="modal-desc">${club.about}</p>
                    <div class="contact-info"><strong>Contact:</strong> ${club.contact}</div>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
                        ${club.instagram ? `<a href="${club.instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${icons.instagram} Instagram</a>` : ''}
                        ${club.linkedin  ? `<a href="${club.linkedin}"  target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${icons.linkedin} LinkedIn</a>`   : ''}
                        ${club.website   ? `<a href="${club.website}"   target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${icons.external} Visit Site</a>` : ''}
                    </div>
                    ${faqHtml}
                    <button class="register-btn" onclick="openRegisterForm('${club.name}')">Register Now</button>
                `;
                modal.classList.add('show');
            });

            grid.appendChild(card);
        });
    };

    // --- Run renders ---
    renderClubs(techClubsData,    'tech-clubs-grid');
    renderClubs(deptClubsData,    'dept-clubs-grid');
    renderClubs(studentAssocData, 'sa-clubs-grid');

}); // ← ONE closing brace for the single DOMContentLoaded

// ─── openRegisterForm lives outside (needs to be global) ────
window.openRegisterForm = function(clubName) {
    const clubModal = document.getElementById('club-modal');
    const regModal  = document.getElementById('register-modal');

    if (clubModal) clubModal.classList.remove('show');

    if (regModal) {
        const title       = document.getElementById('reg-club-name');
        const hiddenInput = document.getElementById('form-club-name');
        if (title)       title.innerText   = clubName;
        if (hiddenInput) hiddenInput.value = clubName;
        regModal.classList.add('show');
    }
};

const deleteRegistration = async (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
        try {
            const response = await fetch(`http://localhost:5000/api/registrations/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Remove the deleted item from your local state so it disappears from the screen
                setApplications(applications.filter(app => app._id !== id));
            }
        } catch (error) {
            console.error("Error deleting:", error);
        }
    }
};