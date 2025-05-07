export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req) {
    const frameHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta property="og:title" content="Start Creating Memes" />
          <meta property="og:image" content="https://your-vercel-domain.vercel.app/logo.png" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:button:1" content="Open Meme App" />
          <meta property="fc:frame:post_url" content="https://your-vercel-domain.vercel.app/api/frame-response" />
          <meta http-equiv="refresh" content="0;url=https://your-vercel-domain.vercel.app/?source=frame" />
        </head>
        <body></body>
      </html>
    `;
  
    return new Response(frameHtml, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  }
  