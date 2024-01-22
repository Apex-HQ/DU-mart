<script lang="ts">
    import '../app.css'
    import '@fontsource/poppins'
</script>

<slot />

<style>
:global(body , html){
    height: 100%;
    width: 100%;
    font-family: 'Poppins' , sans-serif;
}

:global(::-webkit-scrollbar){
    display: none;
}
</style>