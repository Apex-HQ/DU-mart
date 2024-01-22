<script lang="ts">
  import Post from "@/components/custom/post/post.svelte";
  import { Button } from "@/components/ui/button";
  import type { PageData } from "./$types";
  import SideNav from "@/components/custom/nav/side-nav.svelte";

  export let data: PageData
</script>

{#if !data.user}
  <div class="h-full w-full flex items-center justify-center gap-4">
    <Button href='/signup'>
      Sign up
    </Button>
    <Button variant='secondary' href='/login'>
      Login
    </Button>
  </div>
{:else}
<div class="w-full h-full flex items-center">
    <SideNav />
    <div class="h-full flex-1 grid grid-cols-4 gap-4 overflow-scroll bg-gray-50 p-2">
      <div>
        {#each { length: 10 } as i}
            <Post />
        {/each}
      </div>
      <div>
        {#each { length: 10 } as i}
            <Post />
        {/each}
      </div>
      <div>
        {#each { length: 10 } as i}
            <Post />
        {/each}
      </div>
      <div>
        {#each { length: 10 } as i}
            <Post />
        {/each}
      </div>
    </div>
  </div>
{/if}