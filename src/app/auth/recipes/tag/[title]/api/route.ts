import {getFilterByTag} from "@/server-actions/serverActions";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    await getFilterByTag(JSON.stringify(searchParams));
}