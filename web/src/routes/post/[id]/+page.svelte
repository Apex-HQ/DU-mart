<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData
</script>

<div class="h-full w-full">
    <div class="h-[300px] w-[300px] overflow-hidden">
        <img class="object-cover" src="{data.record.url}" alt="{data.record.name}">
    </div>
    <strong>{ data.record?.price }</strong>
    <h1>{ data.record?.name }</h1>
    <h1>{ data.record?.category }</h1>
    <h1>{ data.record?.expand?.seller.username }</h1>
</div>