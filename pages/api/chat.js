export default function handler(req, res) {
  if (req.method === 'POST') {
    // const data = JSON.stringify();
    res.status(200).json({ data: req.body });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
