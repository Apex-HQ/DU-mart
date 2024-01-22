<script lang="ts">
  import { Button } from "@/components/ui/button";
  import { BarChart2 , Heart } from 'lucide-svelte'

  const HEIGHTS = [ 300 , 400 , 500 , 600 ]

  let height = HEIGHTS[Math.floor(Math.random() * HEIGHTS.length)]

</script>

<div class="h-[{height}px] w-full mb-4 flex flex-col bg-white rounded-lg border hover:shadow-md transition-all" style:border-color="hsl(var(--border))">

    
    <div class="w-full h-[90%] rounded-t-md overflow-hidden z-0 relative">
        <div class="absolute h-full w-full bg-gray-50 -z-10"></div>
        <img class="h-full w-full object-cover" src="https://random.imagecdn.app/500/150" alt="profile_pic"/>

        <div class="flex items-center gap-4 mb-4 absolute top-4 left-4">
            <div class="h-[40px] w-[40px] relative z-0 rounded-full overflow-hidden border-2 border-white">
                <div class="absolute h-full w-full bg-gray-50 -z-10"></div>
                <img class="h-full object-cover" src="https://random.imagecdn.app/500/500" alt="profile_pic"/>
            </div>
        </div>
    </div>

    <div class="w-full p-4">
        <strong>@pappy</strong>
    </div>

    <div class="flex items-center justify-around p-2">
        <Button variant='ghost'>
            <BarChart2 class="mr-4"/>
            <p>{Math.floor(Math.random() * 30)}</p>
        </Button>
        <Button variant='ghost'>
            <Heart class="mr-4"/>
            <p>{Math.floor(Math.random() * 100)}</p>
        </Button>
    </div>
</div>

<style>

</style>