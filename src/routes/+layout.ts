/** @type {import('./$types').PageLoad} */

// Prerender everything
export const prerender = true;

export async function load({ url }) {
  return {
    url: url.pathname,
  };
}
