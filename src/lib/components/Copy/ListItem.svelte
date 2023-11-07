<script lang="ts">
  import Typography from "$lib/components/Typography/Typography.svelte";
  import { extractMarks } from "$lib/utils/extractMarks";
  export let text = "";

  export let portableText: any;

  if (portableText) {
    let blockContent: any = [];

    portableText.value.children.map((child: any) => {
      blockContent.push(extractMarks(portableText.value.markDefs, child));
    });
    let blockContentJoined = blockContent.join("");

    text = blockContentJoined;
  }
</script>

<li
  class="relative pl-4 before:w-[5px] before:h-[5px] before:rotate-45 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-blue before:content-['&nbsp;']"
>
  <Typography component="p" variant="body1">
    {@html text}
  </Typography>
</li>
