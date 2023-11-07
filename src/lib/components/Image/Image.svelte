<script lang="ts">
  import {
    lgSizesDefault,
    smSizesDefault,
    type imageSizes,
  } from "./defaultImageSizes";
  import type { ImageUrlFitMode } from "@sanity/types";
  import { urlFor } from "$lib/utils/image";
  export let fit: ImageUrlFitMode = "min";
  export let image: any;
  export let altText = "";
  export let lazyLoad: boolean = true;
  export let pictureClasses = "";
  export let imageClasses = "";
  export let smSizes: imageSizes = smSizesDefault;
  export let lgSizes: imageSizes = lgSizesDefault;
  export let lgImg: boolean = false;

  // Xsmall
  const xsImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.xs.width : smSizes.xs.width,
      lgImg ? lgSizes.xs.height : smSizes.xs.height,
    )
    .auto("format")
    .url()}`;
  const xsImageUrl2x = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.xs.width * 2 : smSizes.xs.width * 2,
      lgImg ? lgSizes.xs.height * 2 : smSizes.xs.height * 2,
    )
    .auto("format")
    .url()} 2x`;

  // Small
  const smImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.sm.width : smSizes.sm.width,
      lgImg ? lgSizes.sm.height : smSizes.sm.height,
    )
    .auto("format")
    .url()}`;
  const smImageUrl2x = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.sm.width * 2 : smSizes.sm.width * 2,
      lgImg ? lgSizes.sm.height * 2 : smSizes.sm.height * 2,
    )
    .auto("format")
    .url()} 2x`;

  // Medium
  const mdImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.md.width : smSizes.md.width,
      lgImg ? lgSizes.md.height : smSizes.md.height,
    )
    .auto("format")
    .url()}`;
  const mdImageUrl2x = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.md.width * 2 : smSizes.md.width * 2,
      lgImg ? lgSizes.md.height * 2 : smSizes.md.height * 2,
    )
    .auto("format")
    .url()} 2x`;

  // Large
  const lgImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width : smSizes.lg.width,
      lgImg ? lgSizes.lg.height : smSizes.lg.height,
    )
    .auto("format")
    .url()}`;

  const lgImageUrl2x = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width * 2 : smSizes.lg.width * 2,
      lgImg ? lgSizes.lg.height * 2 : smSizes.lg.height * 2,
    )
    .auto("format")
    .url()} 2x`;

  // XLarge
  const xlImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width : smSizes.lg.width,
      lgImg ? lgSizes.lg.height : smSizes.lg.height,
    )
    .auto("format")
    .url()}`;

  const xlImageUrl2x = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width * 2 : smSizes.lg.width * 2,
      lgImg ? lgSizes.lg.height * 2 : smSizes.lg.height * 2,
    )
    .auto("format")
    .url()} 2x`;

  // XXLarge
  const xxlImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width : smSizes.lg.width,
      lgImg ? lgSizes.lg.height : smSizes.lg.height,
    )
    .auto("format")
    .url()}`;

  const xxlImageUrl2x = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width * 2 : smSizes.lg.width * 2,
      lgImg ? lgSizes.lg.height * 2 : smSizes.lg.height * 2,
    )
    .auto("format")
    .url()} 2x`;

  // XXXLarge
  const xxxlImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width : smSizes.lg.width,
      lgImg ? lgSizes.lg.height : smSizes.lg.height,
    )
    .auto("format")
    .url()}`;

  const xxxlImageUrl2x = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width * 2 : smSizes.lg.width * 2,
      lgImg ? lgSizes.lg.height * 2 : smSizes.lg.height * 2,
    )
    .auto("format")
    .url()} 2x`;

  // XXXXLarge
  const xxxxlImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width : smSizes.lg.width,
      lgImg ? lgSizes.lg.height : smSizes.lg.height,
    )
    .auto("format")
    .url()}`;

  const xxxxlImageUrl2x = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.lg.width * 2 : smSizes.lg.width * 2,
      lgImg ? lgSizes.lg.height * 2 : smSizes.lg.height * 2,
    )
    .auto("format")
    .url()} 2x`;

  const fallbackImageUrl = `${urlFor(image)
    .fit(fit)
    .size(
      lgImg ? lgSizes.fallback.width : smSizes.fallback.width,
      lgImg ? lgSizes.fallback.height : smSizes.fallback.height,
    )
    .auto("format")
    .url()}`;
</script>

<picture class={pictureClasses}>
  <source
    srcset={`${xxxxlImageUrl}, ${xxxxlImageUrl2x}`}
    media="(min-width: 2000px)"
  />

  <source
    srcset={`${xxxlImageUrl}, ${xxxlImageUrl2x}`}
    media="(min-width: 1600px)"
  />

  <source
    srcset={`${xxlImageUrl}, ${xxlImageUrl2x}`}
    media="(min-width: 1400px)"
  />

  <source
    srcset={`${xlImageUrl}, ${xlImageUrl2x}`}
    media="(min-width: 1280px)"
  />

  <source
    srcset={`${lgImageUrl}, ${lgImageUrl2x}`}
    media="(min-width: 1024px)"
  />

  <source
    srcset={`${mdImageUrl}, ${mdImageUrl2x}`}
    media="(min-width: 768px)"
  />

  <source
    srcset={`${smImageUrl}, ${smImageUrl2x}`}
    media="(min-width: 600px)"
  />
  <source
    srcset={`${xsImageUrl}, ${xsImageUrl2x}`}
    media="(min-width: 480px)"
  />
  <img
    src={`${fallbackImageUrl}`}
    alt={altText}
    loading={lazyLoad ? "lazy" : "eager"}
    width={lgImg ? lgSizes.md.width : smSizes.md.width}
    height={lgImg ? lgSizes.md.height : smSizes.md.height}
    class={imageClasses}
  />
</picture>

<!-- Exmaple Usage:
<SanityImage
    image={image.asset.url}
    altText={imageAltText}
    lgImg={true}
    fit="crop"
    lazyLoad={false}
    lgSizes={{
        lg: {
        width: 2560,
        height: 1024,
        },
        md: {
        width: 1592,
        height: 637,
        },
        sm: {
        width: 1280,
        height: 512,
        },
        xs: {
        width: 768,
        height: 768,
        },
        fallback: {
        width: 768,
        height: 768,
        },
    }}
/>
-->
