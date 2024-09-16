import { connectToDB } from "@utils/database";
import Prompt from "@models/promt";

export const GET = async (req, { params }) => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id).populate('creator');

        if (!prompt) return new Response("Prompt doesn't found", { status: 400 })
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to Fetch Prompts", { status: 500 })
    }

}


export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await req.json();
    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id)
        if (!existingPrompt) return new Response("Prompt doesn't found", { status: 400 })

        existingPrompt.prompt = prompt
        existingPrompt.tag = tag

        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to Update Prompts", { status: 500 })
    }

}


export const DELETE = async (req, { params }) => {
    try {
        await connectToDB();

        const existingPrompt = await Prompt.findByIdAndRemove(params.id)

        await existingPrompt.delete();
        return new Response("Prompt Delete Successfully", { status: 200 })
    } catch (error) {
        return new Response("Failed to Delete Prompts", { status: 500 })
    }

}