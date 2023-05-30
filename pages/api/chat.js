const Dalai = require('dalai');

export default function handler(req, res) {
  if (req.method === 'POST') {
    let response = '';
    new Dalai().request(
      {
        model: 'alpaca.7B',
        prompt: 'Hello World: ',
      },
      (token) => {
        response = token;
        process.stdout.write(token);
      }
    );
    res.status(200).json({ data: response });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
