type IOParams = {
  root?: Element | Document | null;
  rootMargin?: string; // like css margin property
  threshold?: number | number[];
};

export default function inView(node, params?: IOParams) {
  let observer;

  const handleIntersect = entries => {
    entries.forEach(entry => {
      node.dispatchEvent(
        new CustomEvent("intersect", {
          detail: entry.isIntersecting,
        }),
      );
    });
  };

  const setObserver = (options?: IOParams) => {
    const defaultOptions: IOParams = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      handleIntersect,
      options ? options : defaultOptions,
    );
    observer.observe(node);
  };

  setObserver(params);

  return {
    update(params) {
      setObserver(params);
    },

    destroy() {
      if (observer) observer.disconnect();
    },
  };
}
