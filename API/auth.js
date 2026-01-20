// Paradox Studio - Central Auth Server [cite: 2026-01-20]
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = { /* Aapka Config */ };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default async function handler(req, res) {
    // Sirf POST requests allow karni hain taake koi browser se URL na chala sake
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { username, password, appSource } = req.body;

    try {
        const userRef = ref(db, `paradox_ecosystem/users/${username}`);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
            const userData = snapshot.val();
            
            if (userData.password === password) {
                // Aik "Secure Token" banayein jo sirf 1 ghante ke liye valid ho
                const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
                
                return res.status(200).json({
                    success: true,
                    message: 'Identity Verified',
                    token: token,
                    user: {
                        name: username,
                        address: `${username}@paradox.pk`
                    }
                });
            }
        }
        
        return res.status(401).json({ success: false, message: 'Invalid Credentials' });

    } catch (error) {
        return res.status(500).json({ error: 'Paradox Server Error' });
    }
}
