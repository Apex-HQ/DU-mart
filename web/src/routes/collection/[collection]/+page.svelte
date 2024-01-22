<script>
    import Post from "@/components/custom/post/post.svelte";
</script>




<div class="h-full w-full flex flex-col items-center overflow-scroll">
    {#each { length: 10 } as i}
        <Post />
    {/each}
</div>