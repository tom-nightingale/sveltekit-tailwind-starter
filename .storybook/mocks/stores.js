import { readable } from "svelte/store";

export const page = readable({
  url: new URL("http://example.com/test/page"),
  params: {},
  routeId: "test",
  status: 200,
  error: null,
  data: {},
});
