export default function Home() {
  return (
    <div style={{ backgroundColor: '#000814', color: '#00f2ff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <h1>Paradox Mail</h1>
      <p>Secure. Futuristic. Private.</p>
      <img src="/icon.png" alt="Paradox Logo" style={{ width: '100px', marginTop: '20px' }} />
    </div>
  );
}import fs from 'fs';
import path from 'path';

export default function Home() {
  // Ye line aapki index.html file ko read karegi
  const filePath = path.join(process.cwd(), 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
