import { error, type Actions, redirect } from "@sveltejs/kit";



export const actions: Actions = {

    default: async ({ locals , request }) => {
        
        const data = Object.fromEntries(await request.formData())

        try {
            
            await locals.pb.collection('users').authWithPassword(data["email"] as string , data["password"] as string)

            if(!locals?.pb?.authStore?.model?.verified){

                locals.pb.authStore.clear()

                return { notVerfied: true }
            }
        } catch (err) {
            console.log(err);
            throw error(500 , err as any)
        }

        throw redirect(303 , '/')
    }
}