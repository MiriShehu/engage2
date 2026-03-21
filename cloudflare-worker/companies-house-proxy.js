/**
 * Cloudflare Worker — Companies House search proxy
 *
 * Secrets (set via Wrangler or Cloudflare dashboard):
 *   COMPANIES_HOUSE_KEY  — your Companies House API key
 *
 * Deploy:
 *   wrangler secret put COMPANIES_HOUSE_KEY
 *   wrangler deploy
 */

export default {
  async fetch(request, env) {
    // Only allow GET
    if (request.method !== 'GET') {
      return new Response('Method not allowed', { status: 405 });
    }

    const url = new URL(request.url);
    const q = url.searchParams.get('q');

    if (!q || q.trim().length < 2) {
      return Response.json({ items: [] });
    }

    const apiUrl = `https://api.company-information.service.gov.uk/search/companies?q=${encodeURIComponent(q)}`;
    const auth = btoa(env.COMPANIES_HOUSE_KEY + ':');

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
