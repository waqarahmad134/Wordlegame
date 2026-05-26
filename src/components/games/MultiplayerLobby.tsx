"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/components/i18n/I18nProvider";

export function MultiplayerLobby() {
  const { locale } = useI18n();
  const router = useRouter();
  const [joinCode, setJoinCode] = useState("");
  const [creating, setCreating] = useState(false);
  const [length, setLength] = useState(5);

  const create = async () => {
    setCreating(true);
    const res = await fetch("/api/room", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale, length }),
    });
    const data = await res.json();
    if (data.code) router.push(`/${locale}/room/${data.code}`);
    else setCreating(false);
  };

  const join = () => {
    const c = joinCode.trim().toUpperCase();
    if (c) router.push(`/${locale}/room/${c}`);
  };

  return (
    <div className="mx-auto w-full max-w-md p-6">
      <h1 className="mb-2 text-2xl font-bold">Multiplayer</h1>
      <p className="mb-6 text-sm text-[var(--muted)]">
        Race against your friends to solve the same word first.
      </p>

      <div className="space-y-4 rounded-lg border border-[var(--border)] p-4">
        <label className="block text-sm">
          Word length
          <select
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="ml-2 rounded border border-[var(--border)] bg-transparent px-2 py-1"
          >
            {[4, 5, 6, 7].map((n) => (
              <option key={n} value={n} className="text-black">
                {n}
              </option>
            ))}
          </select>
        </label>
        <button
          onClick={create}
          disabled={creating}
          className="w-full rounded bg-[var(--correct)] px-4 py-2 font-bold text-white disabled:opacity-50"
        >
          {creating ? "Creating…" : "Create a Room"}
        </button>
      </div>

      <div className="my-4 text-center text-sm text-[var(--muted)]">— or —</div>

      <div className="flex gap-2">
        <input
          value={joinCode}
          onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
          placeholder="Enter room code"
          className="flex-1 rounded border border-[var(--border)] bg-transparent px-3 py-2 uppercase"
        />
        <button
          onClick={join}
          className="rounded border border-[var(--border)] px-4 py-2 font-bold"
        >
          Join
        </button>
      </div>
    </div>
  );
}
