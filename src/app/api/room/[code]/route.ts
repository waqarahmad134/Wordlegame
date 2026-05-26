import { getState } from "@/lib/rooms";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ code: string }> },
) {
  const { code } = await ctx.params;
  const state = getState(code);
  if (!state) return Response.json({ error: "Room not found" }, { status: 404 });
  return Response.json(state);
}
