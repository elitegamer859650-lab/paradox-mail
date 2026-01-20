// app/page.js
export default function Home() {
  return (
    /* Niche wale div mein apne index.html ka saara code 
       un teen backticks (```) ke beech mein paste kar dein.
    */
    <div dangerouslySetInnerHTML={{ __html: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Paradox Mail</title>
        </head>
        <body style="margin: 0; background: #000814; color: #00f2ff;">
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
            <h1>Paradox Mail</h1>
            <p>Secure. Futuristic. Private.</p>
            <img src="/icon.png" alt="Logo" style="width: 100px;" />
          </div>
        </body>
      </html>
    ` }} />
  );
}
