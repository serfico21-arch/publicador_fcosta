// Netlify Function (Google AI Studio / Gemini). Variaveis no Netlify: GEMINI_API_KEY, ALLOWED_ORIGIN, GEMINI_MODEL (opcional)
const H = o => ({
  "Access-Control-Allow-Origin": o || "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
});
exports.handler = async (event) => {
  const allowed = process.env.ALLOWED_ORIGIN || "";
  const origin = event.headers.origin || "";
  const h = H(allowed || origin);
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers: h, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers: h, body: JSON.stringify({ error: "método inválido" }) };
  if (allowed && origin && origin !== allowed) return { statusCode: 403, headers: h, body: JSON.stringify({ error: "origem não permitida" }) };
  let prompt = "";
  try { prompt = String(JSON.parse(event.body || "{}").prompt || ""); } catch (e) {}
  if (!prompt || prompt.length > 12000) return { statusCode: 400, headers: h, body: JSON.stringify({ error: "pedido inválido" }) };
  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 4000, temperature: 0.8 }
      })
    });
    const d = await r.json();
    if (!r.ok) return { statusCode: r.status, headers: h, body: JSON.stringify({ error: "falha na IA" }) };
    const text = ((d.candidates || [])[0]?.content?.parts || []).map(p => p.text || "").join("\n");
    return { statusCode: 200, headers: h, body: JSON.stringify({ text }) };
  } catch (e) {
    return { statusCode: 500, headers: h, body: JSON.stringify({ error: "erro interno" }) };
  }
};
