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

    console.log("block content", blockContent);
    let blockContentJoined = blockContent.join("");
    text = blockContentJoined;
  }
</script>

<Typography component="p" variant="body1">{@html text}</Typography>
