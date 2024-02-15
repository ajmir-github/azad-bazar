import { ReactNode } from "react";

export default function SettingCollapse({
  Icon,
  label,
  children,
}: {
  label: string;
  Icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium flex gap-2 items-center">
        {Icon} {label}
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
