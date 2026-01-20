// scripts/identity.js

document.addEventListener('DOMContentLoaded', () => {
    const userRaw = localStorage.getItem('paradox_user');
    
    if (userRaw) {
        const user = JSON.parse(userRaw);
        
        // Agar aapki HTML mein 'user-name' id wala element hai, toh ye wahan naam daal dega
        const nameDisplay = document.getElementById('user-name');
        if (nameDisplay) {
            nameDisplay.innerText = user.username;
        }

        // Futuristic UI Console log
        console.log(`%c Paradox Identity Loaded: ${user.username} `, 'background: #00f2ff; color: #000; font-weight: bold;');
    }
});

// Function to generate a unique Paradox ID (just for fun)
function getParadoxID() {
    return 'PRDX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}
