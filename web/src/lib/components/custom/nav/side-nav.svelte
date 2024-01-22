<script>

  import { Button } from "@/components/ui/button";
  import { ShoppingBag , Book , Watch , Plus , Search } from 'lucide-svelte'

  const links = [
    {
        icon: ShoppingBag,
        href: '/collection/accessories',
        text: 'Accessories'
    },
    {
        icon: Book,
        href: '/collection/books',
        text: 'Books'
    },
    {
        icon: Watch,
        href: '/collection/gadget',
        text: 'Gadgets'
    },
    {
        icon: Search,
        href: '/search',
        text: 'Search'
    },
  ]

</script>




<nav style:width="var(--side-nav-width)" class="h-full flex  flex-col items-center justify-between gap-4 p-4 border-r-2">

    <div></div>

    <div class="">
        {#each links as { href , text , icon }}
            <Button variant='ghost' {href} class="w-full flex justify-start mb-4">
                <svelte:component this={icon} class="mr-4"/>
                <p class="text-xl">{ text }</p>
            </Button>
        {/each}
    </div>

    <Button href='post'>
        <Plus class="mr-4"/>
        <p>New Product</p>
    </Button>
</nav>