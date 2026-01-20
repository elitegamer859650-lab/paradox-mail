import fs from 'fs';
import path from 'path';

export default function Home() {
  try {
    // index.html ko read karne ki koshish
    const filePath = path.join(process.cwd(), 'index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  } catch (error) {
    // Agar file na mile toh ye backup view dikhayega
    return (
      <div style={{ backgroundColor: '#000814', color: '#00f2ff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1>Paradox Mail</h1>
        <p>Error: index.html not found in root directory.</p>
        <img src="/icon.png" alt="Paradox Logo" style={{ width: '100px', marginTop: '20px' }} />
      </div>
    );
  }
}
