import { getState, subscribe } from "@/lib/rooms";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ code: string }> },
) {
  const { code } = await ctx.params;
  const initial = getState(code);
  if (!initial)
    return Response.json({ error: "Room not found" }, { status: 404 });

  const encoder = new TextEncoder();
  let unsubscribe: (() => void) | null = null;
  let interval: ReturnType<typeof setInterval> | null = null;

  const stream = new ReadableStream({
    start(controller) {
      const send = (data: unknown) =>
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      send(initial);
      unsubscribe = subscribe(code, send);
      // Keep-alive comment so proxies don't close the connection.
      interval = setInterval(() => controller.enqueue(encoder.encode(": ping\n\n")), 25000);
    },
    cancel() {
      unsubscribe?.();
      if (interval) clearInterval(interval);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
