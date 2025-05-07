export default async function handler(req, res) {
    const { searchParams } = new URL(req.url || '', `http://${req.headers.host}`);
    const memeId = searchParams.get('meme') || '112126428'; // fallback to "Distracted Boyfriend"
  
    const memeUrl = `https://i.imgflip.com/${memeId}.jpg`;
  
    const frameHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Meme Frame</title>
          <meta property="og:title" content="Generate a Meme!" />
          <meta property="og:image" content="${memeUrl}" />
          <meta name="fc:frame" content="vNext" />
          <meta name="fc:frame:image" content="${memeUrl}" />
          <meta name="fc:frame:button:1" content="Customize" />
          <meta name="fc:frame:post_url" content="https://${req.headers.host}/api/frame-response" />
        </head>
        <body>
          Meme loading...
        </body>
      </html>
    `;
  
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.status(200).send(frameHtml);
  }
  