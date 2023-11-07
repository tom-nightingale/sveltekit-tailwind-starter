<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Copy from "./Copy.svelte";
</script>

<Meta title="Components/Copy" component={Copy} />

<Template let:args>
  <Copy {...args} />
</Template>

<Story
  name="Default"
  args={{
    content: [
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: "Heading one",
            _key: "18c25b45142a0",
            _type: "span",
          },
        ],
        _type: "block",
        style: "h1",
        _key: "2f066f5bdb9e",
      },
      {
        _type: "block",
        style: "h2",
        _key: "295867fb16b0",
        markDefs: [],
        children: [
          {
            text: "Heading Two",
            _key: "32c5aa1ed658",
            _type: "span",
            marks: [],
          },
        ],
      },
      {
        children: [
          {
            _type: "span",
            marks: [],
            text: "Heading Three",
            _key: "53fb9c6596b9",
          },
        ],
        _type: "block",
        style: "h3",
        _key: "38b7c9ea0bb7",
        markDefs: [],
      },
      {
        style: "normal",
        _key: "10634a915207",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "",
            _key: "33f230d57372",
          },
        ],
        _type: "block",
      },
      {
        _key: "2cb2617accce",
        markDefs: [
          {
            href: "https://www.google.com",
            _key: "5df4fc71f025",
            _type: "link",
          },
        ],
        children: [
          {
            _key: "8ade700dc3a1",
            _type: "span",
            marks: [],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat leo nec sem tempus rhoncus. ",
          },
          {
            _type: "span",
            marks: ["5df4fc71f025"],
            text: "Nunc finibus ante vel felis interdum",
            _key: "8232c2919a17",
          },
          {
            _key: "4d91ed692ff0",
            _type: "span",
            marks: [],
            text: " semper. Praesent lobortis viverra ligula vitae porta. Sed mollis pret ium enim ut egestas. ",
          },
          {
            _type: "span",
            marks: ["em"],
            text: "Curabitur condi mentum finibus",
            _key: "42275848683c",
          },
          {
            _type: "span",
            marks: [],
            text: " rutrum. Sed frin gilla velit ligula, ut pulvinar urna blandit tempus rhoncus. Sed frin gilla velit ligula.\n\nDonec ut ornare ligula. Orci varius nato que penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sed sapien mi. Integer vitae sapien eu diam ",
            _key: "9b0ab58cf28e",
          },
          {
            marks: ["strong"],
            text: "venenatis hendrerit sed id dui.",
            _key: "1233352ab194",
            _type: "span",
          },
        ],
        _type: "block",
        style: "normal",
      },
      {
        _type: "block",
        style: "normal",
        _key: "13ec51506de5",
        listItem: "bullet",
        markDefs: [],
        children: [
          {
            text: "Hello",
            _key: "497c07ae078b",
            _type: "span",
            marks: [],
          },
        ],
        level: 1,
      },
      {
        _key: "523331148e97",
        listItem: "bullet",
        markDefs: [],
        children: [
          {
            _key: "b928a04fba3b",
            _type: "span",
            marks: [],
            text: "World",
          },
        ],
        level: 1,
        _type: "block",
        style: "normal",
      },
      {
        level: 1,
        _type: "block",
        style: "normal",
        _key: "371ca25b56bb",
        listItem: "bullet",
        markDefs: [],
        children: [
          {
            text: "Lorem",
            _key: "ea00da81d9d5",
            _type: "span",
            marks: [],
          },
        ],
      },
      {
        style: "normal",
        _key: "191fb8fb6b13",
        listItem: "bullet",
        markDefs: [],
        children: [
          {
            _key: "071164b95ac3",
            _type: "span",
            marks: [],
            text: "ipsum",
          },
        ],
        level: 1,
        _type: "block",
      },
    ],
  }}
/>
