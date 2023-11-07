type size = {
  width: number;
  height: number;
};

export type imageSizes = {
  xxxxl: size;
  xxxl: size;
  xxl: size;
  xl: size;
  lg: size;
  md: size;
  sm: size;
  xs: size;
  fallback: size;
};

export const smSizesDefault: imageSizes = {
  xxxxl: {
    width: 744,
    height: 446,
  },
  xxxl: {
    width: 744,
    height: 446,
  },
  xxl: {
    width: 744,
    height: 446,
  },
  xl: {
    width: 744,
    height: 446,
  },
  lg: {
    width: 744,
    height: 446,
  },
  md: {
    width: 792,
    height: 446,
  },
  sm: {
    width: 736,
    height: 446,
  },
  xs: {
    width: 344,
    height: 344,
  },
  fallback: {
    width: 744,
    height: 446,
  },
};

export const lgSizesDefault: imageSizes = {
  xxxxl: {
    width: 744,
    height: 446,
  },
  xxxl: {
    width: 744,
    height: 446,
  },
  xxl: {
    width: 744,
    height: 446,
  },
  xl: {
    width: 744,
    height: 446,
  },
  lg: {
    width: 1512,
    height: 851,
  },
  md: {
    width: 1200,
    height: 676,
  },
  sm: {
    width: 768,
    height: 433,
  },
  xs: {
    width: 376,
    height: 376,
  },
  fallback: {
    width: 1512,
    height: 851,
  },
};
