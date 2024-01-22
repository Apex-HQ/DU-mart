import { error, type Actions, redirect } from "@sveltejs/kit";




export const actions: Actions = {
    
    default: async ({ locals , request }) => {

        const data = Object.fromEntries(await request.formData())

        data["approved"] = true as any

        data["seller"] = locals.pb.authStore.model?.id

        let id = ''

        try {
            
            id = (await locals.pb.collection('posts').create(data)).id

        } catch (err) {
            console.log(err);
            throw error(500 , err as any)
        }

        throw redirect(303 , `/post/${id}`)
    }
};