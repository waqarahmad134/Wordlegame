export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center p-10 text-center">
      <h1 className="mb-2 text-2xl font-bold">{title}</h1>
      <p className="text-[var(--muted)]">This mode is coming soon.</p>
    </div>
  );
}
