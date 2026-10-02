// Noir Web Agency — Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Consultation Form Handler -> Direct to WhatsApp
  const consultationForm = document.getElementById('consultationForm');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const plan = document.getElementById('selectedPackage').value;
      const notes = document.getElementById('projectNotes').value.trim();

      // Noir Agency WhatsApp Number (Ganti nomor ini jika sudah memiliki nomor resmi agensi)
      const agencyWaNumber = "6281234567890"; // contoh format internasional tanpa simbol +

      const messageText = 
        `Halo Noir Web Agency! 👋\n\n` +
        `Saya ingin konsultasi mengenai pembuatan website:\n` +
        `• *Nama:* ${name}\n` +
        `• *Pilihan Paket:* ${plan}\n` +
        `• *Catatan / Kebutuhan:* ${notes ? notes : '-'}\n\n` +
        `Mohon info ketersediaan dan proses selanjutnya. Terima kasih!`;

      const encodedMessage = encodeURIComponent(messageText);
      const waUrl = `https://wa.me/${agencyWaNumber}?text=${encodedMessage}`;

      window.open(waUrl, '_blank');
    });
  }
});

// Helper function called from pricing buttons to preselect plan and scroll to form
window.selectPlan = function(planName) {
  const selectElem = document.getElementById('selectedPackage');
  if (selectElem) {
    for (let i = 0; i < selectElem.options.length; i++) {
      if (selectElem.options[i].value === planName) {
        selectElem.selectedIndex = i;
        break;
      }
    }
  }
  
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
