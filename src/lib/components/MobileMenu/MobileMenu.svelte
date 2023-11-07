<script lang="ts">
  import { NavItems } from "$lib/data/NavItems";
  import NavItem from "$lib/components/NavItem/NavItem.svelte";
  import Icon from "$lib/components/Icon/Icon.svelte";
</script>

<div
  class="fixed top-0 right-0 w-full h-screen lg:hidden lg:pointer-events-none"
>
  <div class="pt-[60px]">
    <div class="flex justify-end px-[20px]">
      <button
        class="p-2 transition-all duration-200 border lg:hidden border-blue text-blue hover:text-white hover:bg-blue cursor:pointer"
      >
        <Icon icon="times" />
      </button>
    </div>

    <div class="flex flex-col py-[33px]">
      {#each NavItems as item}
        <NavItem
          label={item.label}
          href={item.href}
          classes="block py-[15px] px-[22px] border-b border-b-[#F5F5F5] hover:pl-[32px]"
        />
      {/each}
    </div>
  </div>
</div>
