interface ProgressBarProps {
  label: string;
  completed: number;
  total: number;
  percentage: number;
  icon?: React.ReactNode;
}

export default function ProgressBar({ label, completed, total, percentage, icon }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <h3 className="font-semibold text-sm text-foreground">{label}</h3>
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {completed}/{total}
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground text-right">
        {Math.round(percentage)}% concluído
      </p>
    </div>
  );
}
