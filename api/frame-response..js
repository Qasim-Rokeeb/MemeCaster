export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const body = await req.json();
  console.log('Frame interaction:', body);

  return new Response(
    JSON.stringify({
      redirect: 'https://meme-caster.vercel.app/',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
