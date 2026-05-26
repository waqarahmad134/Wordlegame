import { getState, joinRoom } from "@/lib/rooms";

export async function POST(
  request: Request,
  ctx: { params: Promise<{ code: string }> },
) {
  const { code } = await ctx.params;
  const body = await request.json().catch(() => ({}));
  const nickname = String(body.nickname || "Player").slice(0, 20);
  const playerId = joinRoom(code, nickname);
  if (!playerId)
    return Response.json({ error: "Room not found" }, { status: 404 });
  return Response.json({ playerId, state: getState(code) });
}
