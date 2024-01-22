<script lang="ts">
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Separator } from "@/components/ui/separator";
  
      
  </script>
  
  <div class="h-full w-full flex items-center justify-center p-4">
  
      <form method="post" class="flex flex-col items-center gap-4 w-full md:w-96">
          <Input required name="email" placeholder="Email" type="email"/>
          <Input required name="password" placeholder="Password" type="password"/>
          <Button type="submit" class="w-full">Login</Button>
          <Separator />
          <p>Don't have an account yet?</p>
          <Button href='/signup' variant="secondary" class="w-full">SignUp</Button>
          <Separator />
      </form>
  
  </div>
  
  <style>
  
  </style>