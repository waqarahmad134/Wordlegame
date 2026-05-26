import { getState, submitGuess } from "@/lib/rooms";

export async function POST(
  request: Request,
  ctx: { params: Promise<{ code: string }> },
) {
  const { code } = await ctx.params;
  const body = await request.json().catch(() => ({}));
  const result = await submitGuess(
    code,
    String(body.playerId || ""),
    String(body.guess || ""),
  );
  return Response.json({ ...result, state: getState(code) });
}
