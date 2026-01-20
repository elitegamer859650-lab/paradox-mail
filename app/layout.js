import fs from 'fs';
import path from 'path';

export default function Home() {
  try {
    // Ye code root folder se index.html uthayega
    const filePath = path.join(process.cwd(), 'index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
  } catch (error) {
    // Agar index.html na mile toh ye backup dikhayega
    return (
      <div style={{ backgroundColor: '#000814', color: '#00f2ff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <div>
          <h1>Paradox Mail</h1>
          <p>Index file missing or path error.</p>
        </div>
      </div>
    );
  }
}
