<script lang="ts">
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Separator } from "@/components/ui/separator";

    
</script>

<div class="h-full w-full flex items-center justify-center p-4">

    <form method="post" class="flex flex-col items-center gap-4 w-full md:w-96">
        <Input required name="username" placeholder="Username"/>
        <Input required name="password" placeholder="Password" type="password"/>
        <Input required name="passwordConfirm" placeholder="Confirm Passsword" type="password"/>
        <Input required name="email" placeholder="Email" type="email"/>
        <Button type="submit" class="w-full">SignUp</Button>
        <Separator about="have an account"/>
        <p>Already have an account?</p>
        <Button href='/login' variant="secondary" class="w-full">Login</Button>
        <Separator />
    </form>

</div>

<style>

</style>