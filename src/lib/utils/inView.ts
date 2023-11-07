type IOParams = {
  root?: Element | Document | null;
  rootMargin?: string; // like css margin property
  threshold?: number | number[];
};

export default function inView(node: any, params?: IOParams) {
  let observer: any;

  const handleIntersect = (entries: any) => {
    entries.forEach((entry: any) => {
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
    update(params: any) {
      setObserver(params);
    },

    destroy() {
      if (observer) observer.disconnect();
    },
  };
}

// How to use...
// use:inView
// on:intersect={({ detail }) => {
//   updateChapterTitle(detail, postTitle);
// }}
