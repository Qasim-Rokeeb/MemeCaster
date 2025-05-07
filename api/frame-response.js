export async function POST(req) {
    const body = await req.json();
  
    // Optional: log interaction
    console.log('Frame interaction:', body);
  
    return new Response(
      JSON.stringify({
        redirect: 'https://meme-caster.vercel.app/', // send user to full app
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
  