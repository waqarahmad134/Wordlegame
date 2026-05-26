"use client";

export function Toast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="pointer-events-none fixed left-1/2 top-20 z-50 -translate-x-1/2">
      <div className="rounded bg-black px-4 py-2 text-sm font-bold text-white shadow-lg">
        {message}
      </div>
    </div>
  );
}
