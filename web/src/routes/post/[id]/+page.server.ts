import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ locals , params }) => {
    
    try {
        
        let record = await locals.pb.collection('posts').getOne(params.id)

        return { record }

    } catch (err) {
        console.log(err);
        throw error(500 , "Couldn't load post")
    }
}