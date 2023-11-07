<script lang="ts">
  import { PortableText } from "@portabletext/svelte";
  import Body from "$lib/components/Copy/Body.svelte";
  import Heading from "$lib/components/Copy/Heading.svelte";
  import ListItem from "$lib/components/Copy/ListItem.svelte";

  export let content: [] = [];
</script>

<div class="prose">
  <!-- <PortableText value={content} /> -->

  <PortableText
    value={content}
    onMissingComponent={false}
    components={{
      types: {
        //@ts-ignore
        normal: Body,
        // linebreak: Break,
        // quote: Quote,
        // imageBlock: SanityImage,
      },
      block: {
        //@ts-ignore
        normal: Body,
        //@ts-ignore
        h1: Heading,
        //@ts-ignore
        h2: Heading,
        //@ts-ignore
        h3: Heading,
        // quote: Quote,
      },
      listItem: {
        normal: ListItem,
      },
    }}
  />
</div>
