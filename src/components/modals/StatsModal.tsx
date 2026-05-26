"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { useI18n } from "@/components/i18n/I18nProvider";
import { useUI } from "@/components/layout/ui-context";
import { type Stats, loadStats, winPercent } from "@/lib/stats";

function Stat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-center text-xs text-[var(--muted)]">{label}</div>
    </div>
  );
}

export function StatsModal() {
  const { t } = useI18n();
  const { closeModal, activeLength } = useUI();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    setStats(loadStats(activeLength));
  }, [activeLength]);

  if (!stats) return null;
  const max = Math.max(1, ...stats.distribution);

  return (
    <Modal title={t.stats.title} onClose={closeModal}>
      <div className="mb-6 flex justify-around">
        <Stat value={stats.played} label={t.stats.played} />
        <Stat value={winPercent(stats)} label={t.stats.winPct} />
        <Stat value={stats.currentStreak} label={t.stats.currentStreak} />
        <Stat value={stats.maxStreak} label={t.stats.maxStreak} />
      </div>
      <h3 className="mb-2 text-center text-sm font-bold uppercase">
        {t.stats.distribution}
      </h3>
      <div className="space-y-1">
        {stats.distribution.map((count, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="w-3 text-right">{i + 1}</span>
            <div className="flex-1">
              <div
                className="flex justify-end rounded-sm px-2 py-0.5 text-xs font-bold text-white"
                style={{
                  width: `${Math.max(8, (count / max) * 100)}%`,
                  background: "var(--absent)",
                }}
              >
                {count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
