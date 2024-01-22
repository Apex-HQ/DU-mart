import { redirect, type Actions, error } from "@sveltejs/kit";




export const actions: Actions = {
    default: async ({ locals , request }) => {
        
        const data = Object.fromEntries(await request.formData())

        try {
        //    locals.pb.authStore.clear()
            
           await locals.pb.collection('users').create(data)

           locals.user = locals.pb.authStore.model

        } catch (err) {
            console.log(err);
            throw error(404 , err as Error)
        }

        throw redirect(303 , '/login')
    }
}