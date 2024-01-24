<script lang="ts">
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Separator } from "@/components/ui/separator"; 
  import { Toaster, toast } from 'svelte-sonner'
  import { page } from '$app/stores';
  import { Avatar } from "bits-ui";
  // import { Avatar } from "@/components/ui/avatar";

  // $: if ($page.url.searchParams.get('success') === 'true') {
  //   toast.success("User created successfully", {
  //     description: "You can now log in with your new account."
  //   });
  // }

  // If there's an error, you can show an error toast
  // $: if ($page.error) {
  //   toast.error($page.error.message);
  // }
</script>

<Toaster />


<div class="flex-col mb-12 mt-28 sm:mt-40 items-center justify-center space-x-3">

  <!-- <Avatar.Root class="rounded-full h-6 w-6 items-center justify-center">
    <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
    <Avatar.Fallback>CN</Avatar.Fallback>
  </Avatar.Root> -->

  <h1 class="font-black text-center justify-center text-4xl">Create your DUmart account...</h1>

  <div class="h-full w-full items-center justify-center p-4 flex">
   
      <form method="post" class="flex flex-col items-center gap-4 w-full md:w-96">
          <Input required name="username" 
          placeholder="Username" />

          <Input required name="password" 
          placeholder="Password" 
          type="password"/>
          <Input required name="passwordConfirm" placeholder="Confirm Passsword" type="password"/>
          <Input required name="email" placeholder="Email" type="email"/>
          <Button type="submit" class="w-full bg-[#E83D22]" on:click={() => toast.success('Account created')}>SignUp</Button>

      
          <Separator about="have an account"/>
          <div class="flex">
            <p class="hover:underline hover:text-[#E83D22]">Already have an account? </p>
            <!-- <span><a href="/login"></a></span> -->
            <Button variant="link" href="/login">Login</Button>
          </div>
      </form>
  
  </div>
</div>


<style>

</style>