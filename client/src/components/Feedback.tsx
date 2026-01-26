import { CheckCircle2, XCircle, AlertCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

interface FeedbackProps {
  type: "success" | "error" | "info" | null;
  message: string;
  onDismiss?: () => void;
  autoDismiss?: boolean;
}

export default function Feedback({ type, message, onDismiss, autoDismiss = true }: FeedbackProps) {
  const [isVisible, setIsVisible] = useState(!!type);

  useEffect(() => {
    setIsVisible(!!type);

    if (autoDismiss && type) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [type, autoDismiss, onDismiss]);

  if (!isVisible || !type) return null;

  const baseClasses = "rounded-lg p-4 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300";

  const styleClasses = {
    success: "bg-success/10 border border-success text-success",
    error: "bg-destructive/10 border border-destructive text-destructive",
    info: "bg-primary/10 border border-primary text-primary",
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 flex-shrink-0" />,
    error: <XCircle className="w-5 h-5 flex-shrink-0" />,
    info: <AlertCircle className="w-5 h-5 flex-shrink-0" />,
  };

  return (
    <div className={`${baseClasses} ${styleClasses[type]}`}>
      {icons[type]}
      <div className="flex-1">
        <p className="font-medium text-sm">{message}</p>
      </div>
      {onDismiss && (
        <button
          onClick={() => {
            setIsVisible(false);
            onDismiss();
          }}
          className="text-current hover:opacity-70 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
