import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
    const apiKey = process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY;

    if (!agentId || !apiKey) {
      console.error("API VOICE > Faltan credenciales en .env.local");
      return NextResponse.json({ error: "Faltan credenciales" }, { status: 500 });
    }

    const response = await fetch(
      `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
      {
        method: 'GET',
        headers: { 'xi-api-key': apiKey },
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("API VOICE > ElevenLabs Error:", errorData);
      return NextResponse.json({ error: "ElevenLabs rechazó la petición" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ signedUrl: data.signed_url });

  } catch (error: any) {
    console.error("API VOICE > Fatal Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
