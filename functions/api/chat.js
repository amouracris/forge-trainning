/**
 * Cloudflare Pages Function — proxy pro Gemini API
 * Endpoint: /api/chat
 *
 * Esconde a chave Gemini. Usuários do app não veem a chave.
 *
 * Configuração: adicionar GEMINI_KEY como env variable
 * em Cloudflare Pages → Settings → Environment variables
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers (allows app to call from same domain or anywhere)
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Check API key configured
  if (!env.GEMINI_KEY) {
    return new Response(
      JSON.stringify({ error: 'GEMINI_KEY não configurada no Cloudflare Pages' }),
      { status: 500, headers: corsHeaders }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Body inválido (precisa ser JSON)' }),
      { status: 400, headers: corsHeaders }
    );
  }

  // Validate request shape
  if (!body.contents || !Array.isArray(body.contents)) {
    return new Response(
      JSON.stringify({ error: 'Faltando contents[]' }),
      { status: 400, headers: corsHeaders }
    );
  }

  // Forward to Gemini
  const model = body.model || 'gemini-2.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_KEY}`;

  // Build clean payload (only allow specific fields)
  const payload = {
    contents: body.contents,
  };
  if (body.systemInstruction) payload.systemInstruction = body.systemInstruction;
  if (body.generationConfig) payload.generationConfig = body.generationConfig;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: corsHeaders,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: 'Falha ao chamar Gemini: ' + e.message }),
      { status: 502, headers: corsHeaders }
    );
  }
}

// Handle preflight CORS requests
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
