export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: "Only GET allowed" });
    }

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbz3Z5az8roU8tKJPJI65QQJ5HiaMd9pfAFqtIq-7FFCE7JZQOSO-7nUVGQWI_S9Uhae/exec");
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).json({ error: "Unable to fetch data" });
    }
}
