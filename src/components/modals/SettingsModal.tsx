"use client";

import { Modal } from "@/components/ui/Modal";
import { Toggle } from "@/components/ui/Toggle";
import { useI18n } from "@/components/i18n/I18nProvider";
import { useUI } from "@/components/layout/ui-context";
import { useSettings } from "@/components/settings/SettingsProvider";

function Setting({
  title,
  desc,
  checked,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] py-3">
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-[var(--muted)]">{desc}</div>
      </div>
      <Toggle checked={checked} onChange={onChange} label={title} />
    </div>
  );
}

export function SettingsModal() {
  const { t } = useI18n();
  const { closeModal } = useUI();
  const { settings, update } = useSettings();

  return (
    <Modal title={t.settings.title} onClose={closeModal}>
      <div>
        <Setting
          title={t.settings.hardMode}
          desc={t.settings.hardModeDesc}
          checked={settings.hardMode}
          onChange={(v) => update({ hardMode: v })}
        />
        <Setting
          title={t.settings.darkTheme}
          desc={t.settings.darkThemeDesc}
          checked={settings.theme === "dark"}
          onChange={(v) => update({ theme: v ? "dark" : "light" })}
        />
        <Setting
          title={t.settings.colorblind}
          desc={t.settings.colorblindDesc}
          checked={settings.colorblind}
          onChange={(v) => update({ colorblind: v })}
        />
      </div>
    </Modal>
  );
}
