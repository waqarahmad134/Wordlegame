import { createRoom } from "@/lib/rooms";
import { clampLength } from "@/lib/words";
import { isLocale } from "@/lib/i18n/locales";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const locale = isLocale(body.locale) ? body.locale : "en";
  const length = clampLength(Number(body.length) || 5);
  const code = await createRoom(locale, length);
  return Response.json({ code, locale, length });
}
