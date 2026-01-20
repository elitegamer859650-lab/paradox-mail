// paradox-studio/api/identities.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = { /* Aapka Config */ };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default async function handler(req, res) {
    const { username } = req.query;

    try {
        // Firebase mein 'identities' node se user dhoondo
        const identityRef = ref(db, `paradox_ecosystem/identities/${username}`);
        const snapshot = await get(identityRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            
            // Server decide karega ke ye VIP hai ya Free
            return res.status(200).json({
                success: true,
                username: username,
                identity: data.type === "VIP" ? `${username}.paradox.pk` : `${username}@paradox.pk`,
                type: data.type,
                theme: data.theme || "dark-blue"
            });
        }

        return res.status(404).json({ success: false, message: 'Identity not found' });
    } catch (error) {
        return res.status(500).json({ error: 'Paradox Server Error' });
    }
}
