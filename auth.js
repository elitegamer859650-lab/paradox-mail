// scripts/auth.js

// 1. Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem('paradox_user');
    const currentPage = window.location.pathname;

    // Agar user logged in nahi hai aur wo index.html par nahi hai, toh login par bhejo
    if (!user && !currentPage.includes('index.html') && currentPage !== '/') {
        window.location.href = '/index.html';
    }
}

// 2. Login function (Simple version for friends/brothers)
function loginUser(username, password) {
    // Aap yahan apne bhaiyon ke liye fix passwords bhi rakh sakte hain
    if (username && password) {
        const userData = {
            username: username,
            loginTime: new Date().getTime(),
            role: 'member'
        };
        localStorage.setItem('paradox_user', JSON.stringify(userData));
        window.location.href = '/inbox.html';
    } else {
        alert("Bhai, sahi details daalo!");
    }
}

// 3. Logout function
function logout() {
    localStorage.removeItem('paradox_user');
    window.location.href = '/index.html';
}

// Automatically check auth when script loads
checkAuth();
