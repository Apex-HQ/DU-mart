<script lang="ts">
   import type { PageData } from "./$types";

    
    export let data: PageData
</script>

<div>
    <h1>{ data.record?.name }</h1>
</div>

<style>

</style>