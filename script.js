document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigasi Mobile (Hamburger Menu)
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 2. Filter Kategori Destinasi
    const filterBtns = document.querySelectorAll('.filter-btn');
    const destCards = document.querySelectorAll('.dest-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            destCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 3. Simulasi AI Travel Planner Interaktif
    const plannerForm = document.getElementById('planner-form');
    const resultContent = document.getElementById('result-content');
    const resultMeta = document.getElementById('result-meta');

    const itineraryDatabase = {
        santai: {
            title: "Retret Ketenangan Bahari & Kaldera",
            dest: "Labuan Bajo / Danau Toba",
            budget: "Rp 3.200.000 - Rp 4.500.000",
            days: [
                "Hari 1: Penjemputan bandara, check-in Eco-Resort tepi perairan, sesi relaksasi senja & makan malam organik.",
                "Hari 2: Pelayaran santai ke teluk tersembunyi, snorkeling koral dangkal, dan piknik pantai privat.",
                "Hari 3: Yoga pagi menghadap kaldera/laut, kunjungan ke pusat tenun desa lokal, dan kembali ke bandara.",
                "Hari 4: Sesi spa rempah tradisional Nusantara, wisata kuliner pasar terapung/lokal, dan kepulangan."
            ]
        },
        petualangan: {
            title: "Ekspedisi Vulkanik & Karang Timur",
            dest: "Taman Nasional Bromo & Pulau Padar",
            budget: "Rp 3.800.000 - Rp 5.600.000",
            days: [
                "Hari 1: Perjalanan menuju basecamp dataran tinggi, briefing keamanan bersama pemandu lokal, dan aklimatisasi.",
                "Hari 2: Trekking dini hari mengejar golden sunrise di puncak bukit, eksplorasi kawah & savana pasir berbisik.",
                "Hari 3: Island hopping dengan kapal kayu, penyelaman bersama pari manta, dan berkemah di pulau nirwana.",
                "Hari 4: Eksplorasi air terjun tersembunyi di hutan tropis, makan siang di desa adat, dan perjalanan pulang."
            ]
        },
        budaya: {
            title: "Jejak Warisan Leluhur & Gastronomi",
            dest: "Lembah Borobudur & Desa Adat Ubud",
            budget: "Rp 2.400.000 - Rp 3.500.000",
            days: [
                "Hari 1: Kedatangan, tur bersepeda menyusuri jalur persawahan Subak, dan jamuan makan malam keraton/tradisional.",
                "Hari 2: Kunjungan pagi ke candi warisan dunia, dilanjutkan lokakarya membatik dan membuat gerabah bersama pengrajin.",
                "Hari 3: Tur pasar rempah pagi hari, kelas memasak kuliner autentik daerah, dan menyaksikan pertunjukan tari tradisional.",
                "Hari 4: Berbelanja kriya UMKM lokal langsung dari sanggar desa, minum kopi lereng gunung, dan kepulangan."
            ]
        }
    };

    plannerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const vibe = document.getElementById('vibe-select').value;
        const duration = parseInt(document.getElementById('duration-select').value, 10);
        const companion = document.getElementById('companion-select').value;

        resultMeta.textContent = "Menyusun rute...";
        resultContent.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">✨</div>
                <h3>AI Travel Assistant Sedang Merancang Rute...</h3>
                <p>Menyesuaikan jadwal cuaca dan ketersediaan pemandu lokal untuk ${companion}.</p>
            </div>
        `;

        setTimeout(() => {
            const data = itineraryDatabase[vibe];
            const selectedDays = data.days.slice(0, duration);

            let daysHTML = selectedDays.map(day => {
                const parts = day.split(':');
                return `<li class="day-item"><strong>${parts[0]}</strong> ${parts[1]}</li>`;
            }).join('');

            resultMeta.textContent = `${duration} Hari • ${companion}`;
            resultContent.innerHTML = `
                <div>
                    <h3 class="itinerary-title">${data.title}</h3>
                    <p class="itinerary-sub">📍 Rekomendasi Lokasi: ${data.dest} &bull; Estimasi: ${data.budget}</p>
                    <ul class="day-list">
                        ${daysHTML}
                    </ul>
                </div>
            `;
        }, 700);
    });

    // 4. Form Newsletter Footer
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterMsg = document.getElementById('newsletter-msg');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        newsletterMsg.textContent = `Terima kasih! Panduan wisata telah dikirim ke ${emailInput.value}.`;
        emailInput.value = '';
    });
});