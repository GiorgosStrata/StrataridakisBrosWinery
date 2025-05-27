document.addEventListener('DOMContentLoaded', function() {
    const ageModal = document.getElementById('ageModal');
    const ageYes = document.getElementById('ageYes');
    const ageNo = document.getElementById('ageNo');

    // Check if user has already verified their age in this session
    if (sessionStorage.getItem('ageVerified') !== 'true') {
        ageModal.classList.remove('hidden');
    }

    // Handle "Yes" button click
    ageYes.addEventListener('click', function() {
        sessionStorage.setItem('ageVerified', 'true');
        ageModal.classList.add('hidden');
    });

    // Handle "No" button click
    ageNo.addEventListener('click', function() {
        window.location.href = 'exit.html';
    });
});
