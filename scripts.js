document.addEventListener('DOMContentLoaded', function() {
    const adminButton = document.getElementById('adminButton');
    const userButton = document.getElementById('userButton');
    const viewRecordButton = document.getElementById('viewRecordButton');
    const createAccountButton = document.getElementById('createAccountButton');
    const photoUpload = document.getElementById('photoUpload');

    if (adminButton) {
        adminButton.addEventListener('click', function() {
            console.log('Admin button clicked');
            window.location.href = 'Adminlanding.html';
        });
    }

    if (userButton) {
        userButton.addEventListener('click', function() {
            console.log('User button clicked');
            window.location.href = 'Userhomepage.html';
        });
    }

    if (viewRecordButton) {
        viewRecordButton.addEventListener('click', function() {
            console.log('View Record button clicked');
            alert('View Record clicked - navigation not implemented yet');
        });
    }

    if (createAccountButton) {
        createAccountButton.addEventListener('click', function() {
            console.log('Create Account button clicked');
            window.location.href = 'Adminhomepage.html';
        });
    }

    if (photoUpload) {
        photoUpload.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                generateHash(file);
            }
        });
    }

    async function generateHash(file) {
        const arrayBuffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        document.getElementById('hash').value = hashHex;
    }
});
