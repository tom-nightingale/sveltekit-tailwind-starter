/** @type {import('@sveltejs/kit').Load} */
export async function load({ url }) {
  return {
    url: url.pathname,
  };
}
