// Ye function JSON se config uthayega aur signup karega
async function paradoxAuth(userData) {
    // 1. Pehle JSON config file load karo
    const configRes = await fetch('config.json');
    const config = await configRes.json();

    // 2. Data Hugging Face par bhejo
    const response = await fetch(config.api_url + config.endpoints.signup, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });

    return await response.json();
}
