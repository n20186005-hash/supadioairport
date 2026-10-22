interface Env { ASSETS: { fetch(request: Request): Promise<Response> } }
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.protocol !== 'https:' || url.hostname === 'www.supadioairport.com') {
      url.protocol = 'https:'; url.hostname = 'supadioairport.com'; url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const isErrorPage = ['/404', '/404/', '/404.html'].includes(url.pathname);
    const assetURL = new URL(request.url);
    if (isErrorPage) assetURL.pathname = '/__missing_error_page__';
    const response = await env.ASSETS.fetch(new Request(assetURL, request));
    if (response.status !== 404 && !isErrorPage) return response;
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(response.body, { status: 404, headers });
  }
};
