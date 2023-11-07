<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  // import type { Image as ImageType } from "@sanity/types";
  import type { Image as ImageType } from "$lib/gql/gen/codegen";
  import Icon from "$lib/components/Icon/Icon.svelte";

  export let image: ImageType;
  export let heading = "Kelly & Tom";
  export let date = "Saturday 20th April 2024";
</script>

<div
  class="relative flex flex-col items-center justify-center w-full min-h-[100dvh] text-white bg-gray-900 transition-all duration-300"
>
  <Image
    lazyLoad={false}
    {image}
    altText={image?.asset?.altText
      ? image?.asset?.altText
      : "Tom & Kelly Wedding"}
    lgImg={true}
    lgSizes={{
      xxxxl: {
        width: 2560,
        height: 1440,
      },
      xxxl: {
        width: 2000,
        height: 1440,
      },
      xxl: {
        width: 1600,
        height: 1440,
      },
      xl: {
        width: 1400,
        height: 1400,
      },
      lg: {
        width: 1280,
        height: 1280,
      },
      md: {
        width: 1200,
        height: 1200,
      },
      sm: {
        width: 1024,
        height: 1024,
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
    pictureClasses="absolute top-0 left-0 w-full min-h-[100dvh] transition-all duration-300"
    imageClasses="w-full h-[100dvh] object-cover transition-all duration-300"
  />

  <div
    class="absolute w-full text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-1"
  >
    <Typography variant="title1" component="p">{heading}</Typography>
  </div>

  <div class="relative flex flex-col justify-center mt-auto mb-16 z-1">
    <Typography variant="title2" component="p" uppercase>{date}</Typography>

    <div class="text-on-surface mt-[20px] text-center">
      <Icon icon="west-mill-logo" width={66} height={53} />
    </div>
  </div>
</div>
