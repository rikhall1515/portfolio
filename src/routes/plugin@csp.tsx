import type { RequestHandler } from "@builder.io/qwik-city";
import { isDev } from "@builder.io/qwik/build";

export const onRequest: RequestHandler = (event) => {
  if (isDev) return; // Will not return CSP headers in dev mode
  const nonce = Date.now().toString(36); // Your custom nonce logic here
  event.sharedMap.set("@nonce", nonce);
  const csp = [
    `upgrade-insecure-requests`,
    `default-src 'self' 'unsafe-inline'`,
    `font-src 'self'`,
    `img-src 'self' 'unsafe-inline' data: https: blob:`,
    `script-src 'self' 'unsafe-inline' https: 'nonce-${nonce}' *.cloudflareinsights.com 'strict-dynamic'`,
    `style-src 'self' 'unsafe-inline'`,
    `frame-src 'self' 'nonce-${nonce}'`,
    `object-src 'none'`,
    `base-uri 'self'`,
  ];

  const sts = [`max-age '30'`, `includeSubDomains`, `preload`];

  event.headers.set("Content-Security-Policy", csp.join("; "));
  event.headers.set("Strict-Transport-Security", sts.join("; "));
};