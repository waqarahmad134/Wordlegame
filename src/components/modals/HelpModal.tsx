"use client";

import { Modal } from "@/components/ui/Modal";
import { useI18n } from "@/components/i18n/I18nProvider";
import { useUI } from "@/components/layout/ui-context";

function ExampleRow({
  word,
  states,
}: {
  word: string;
  states: ("correct" | "present" | "absent" | "empty")[];
}) {
  return (
    <div className="my-2 flex gap-1">
      {word.split("").map((ch, i) => (
        <div
          key={i}
          className="tile h-10 w-10 text-lg"
          data-state={states[i] === "empty" ? undefined : states[i]}
          data-filled="true"
        >
          {ch}
        </div>
      ))}
    </div>
  );
}

export function HelpModal() {
  const { t } = useI18n();
  const { closeModal } = useUI();
  return (
    <Modal title={t.howTo.title} onClose={closeModal}>
      <div className="space-y-3 text-sm">
        <p>{t.howTo.intro}</p>
        <hr className="border-[var(--border)]" />
        <ExampleRow
          word="weary"
          states={["correct", "empty", "empty", "empty", "empty"]}
        />
        <p>
          <b>W</b> {t.howTo.correct}
        </p>
        <ExampleRow
          word="pills"
          states={["empty", "present", "empty", "empty", "empty"]}
        />
        <p>
          <b>I</b> {t.howTo.present}
        </p>
        <ExampleRow
          word="vague"
          states={["empty", "empty", "absent", "empty", "empty"]}
        />
        <p>
          <b>G</b> {t.howTo.absent}
        </p>
      </div>
    </Modal>
  );
}
