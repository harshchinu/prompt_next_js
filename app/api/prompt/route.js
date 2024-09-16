import { connectToDB } from "@utils/database";
import Prompt from "@models/promt";

export const GET = async (req) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to Fetch Prompts", { status: 500 })
    }

}