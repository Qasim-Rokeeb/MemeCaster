export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const body = req.body || {};
  
    console.log('Frame interaction:', body);
  
    return res.status(200).json({
      redirect: 'https://meme-caster.vercel.app/',
    });
  }
  