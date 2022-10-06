export const afterNavigate = function afterNavigate(cb) {
  console.log("afterNavigate");
};
export const goto = function goto(url, opts) {
  console.log("goto", url, opts);
  return Promise.resolve();
};
