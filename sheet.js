export default async function handler(req, res) {
  const BACKEND_URL = "https://script.google.com/macros/s/AKfycbwV8QmQWqaP8tY-25x8AN8OzIhoJnaEzlyz5-fa1LuSWt6QDMJCdW7GSctxQAecmgOp/exec"; // <-- replace

  try {
    const response = await fetch(BACKEND_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch" });
  }
}
