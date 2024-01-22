import { error, type Actions } from "@sveltejs/kit";




export const actions: Actions = {
    
    default: async ({ locals , request }) => {

        const data = Object.fromEntries(await request.formData())

        try {
            
            await locals.pb.collection('posts').create(data)

        } catch (err) {
            console.log(err);
            throw error(500 , err as any)
        }

        
    }
};