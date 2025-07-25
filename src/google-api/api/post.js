export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Only POST allowed" });
    }

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbz3Z5az8roU8tKJPJI65QQJ5HiaMd9pfAFqtIq-7FFCE7JZQOSO-7nUVGQWI_S9Uhae/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        const result = await response.json();
        res.status(200).json(result);
    } catch (error) {
        console.error("Submit error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
}