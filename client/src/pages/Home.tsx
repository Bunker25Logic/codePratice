import { useState, useEffect } from "react";
import { challenges, getTechnologyProgress } from "@/lib/challenges";
import Feedback from "@/components/Feedback";
import ProgressBar from "@/components/ProgressBar";
import { Code2, BookOpen, Award, Moon, Sun } from "lucide-react";
import { useThemeToggle } from "@/hooks/useThemeToggle";

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const badgeClasses = {
    easy: "badge-easy",
    medium: "badge-medium",
    hard: "badge-hard"
  };

  const difficultyText = {
    easy: "Fácil",
    medium: "Médio",
    hard: "Difícil"
  };

  return (
    <span className={`badge-tech ${badgeClasses[difficulty as keyof typeof badgeClasses]}`}>
      {difficultyText[difficulty as keyof typeof difficultyText]}
    </span>
  );
}

export default function Home() {
  const { isDark, toggleTheme } = useThemeToggle();
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | "info" | null;
    message: string;
  }>({ type: null, message: "" });
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [filter, setFilter] = useState<"all" | "html" | "css" | "javascript">("all");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("completedChallenges");
    if (saved) {
      setCompletedChallenges(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
  }, [completedChallenges]);

  const filteredChallenges = filter === "all" ? challenges : challenges.filter((c) => c.technology === filter);
  const currentChallenge = filteredChallenges[currentChallengeIndex];
  const progress = getTechnologyProgress(completedChallenges);

  const handleSubmit = () => {
    if (!currentChallenge) return;

    try {
      const isCorrect = currentChallenge.testFunction(code);

      if (isCorrect) {
        setFeedback({
          type: "success",
          message: `✓ Parabéns! Você acertou "${currentChallenge.title}"!`,
        });

        if (!completedChallenges.includes(currentChallenge.id)) {
          setCompletedChallenges([...completedChallenges, currentChallenge.id]);
        }

        // Move to next challenge after 2 seconds
        setTimeout(() => {
          if (currentChallengeIndex < filteredChallenges.length - 1) {
            setCurrentChallengeIndex(currentChallengeIndex + 1);
            setCode("");
          }
        }, 2000);
      } else {
        setFeedback({
          type: "error",
          message: `✗ Não está correto. ${currentChallenge.hint ? `Dica: ${currentChallenge.hint}` : "Tente novamente!"}`,
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: "Erro ao validar o código. Verifique a sintaxe.",
      });
    }
  };

  const handleReset = () => {
    setCode("");
    setFeedback({ type: null, message: "" });
  };

  const handleNextChallenge = () => {
    if (currentChallengeIndex < filteredChallenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
      setCode("");
      setFeedback({ type: null, message: "" });
    }
  };

  const handlePrevChallenge = () => {
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(currentChallengeIndex - 1);
      setCode("");
      setFeedback({ type: null, message: "" });
    }
  };

  const totalCompleted = completedChallenges.length;
  const totalChallenges = challenges.length;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header Refined */}
      <header className="header-refined">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text" style={{ fontFamily: "Poppins" }}>
                  CodePractice
                </h1>
                <p className="text-xs text-muted-foreground">Aprenda a programar na prática</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">
                  {totalCompleted}/{totalChallenges}
                </span>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Challenge Info Card */}
            <div className="card-modern space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                      {currentChallenge?.technology.toUpperCase()}
                    </span>
                    <DifficultyBadge difficulty={currentChallenge?.difficulty || "easy"} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "Poppins" }}>
                    {currentChallenge?.title}
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm">{currentChallenge?.description}</p>
                </div>
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap ml-4">
                  {currentChallengeIndex + 1}/{filteredChallenges.length}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-sm mb-2 text-foreground">Instruções:</h3>
                  <p className="text-sm text-muted-foreground">{currentChallenge?.instructions}</p>
                </div>
                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <h3 className="font-semibold text-sm mb-2 text-success">Resultado esperado:</h3>
                  <p className="text-sm text-foreground">{currentChallenge?.expectedOutput}</p>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-foreground">Seu Código:</label>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Escreva seu código aqui..."
                className="code-editor w-full h-72 resize-none"
                spellCheck="false"
              />
            </div>

            {/* Feedback */}
            {feedback.type && (
              <Feedback
                type={feedback.type}
                message={feedback.message}
                onDismiss={() => setFeedback({ type: null, message: "" })}
                autoDismiss={feedback.type === "success"}
              />
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button onClick={handleSubmit} className="btn-primary flex-1">
                Verificar Código
              </button>
              <button onClick={handleReset} className="btn-secondary flex-1">
                Limpar
              </button>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={handlePrevChallenge}
                disabled={currentChallengeIndex === 0}
                className="btn-ghost flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Anterior
              </button>
              <button
                onClick={handleNextChallenge}
                disabled={currentChallengeIndex === filteredChallenges.length - 1}
                className="btn-ghost flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Próximo →
              </button>
            </div>
          </div>

          {/* Right Column - Progress & Filters */}
          <div className="space-y-6">
            {/* Filter Section */}
            <div className="card-modern space-y-3">
              <h3 className="section-title flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Filtrar
              </h3>
              <div className="space-y-2">
                {(["all", "html", "css", "javascript"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => {
                      setFilter(f);
                      setCurrentChallengeIndex(0);
                      setCode("");
                      setFeedback({ type: null, message: "" });
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      filter === f
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-card border border-border text-foreground hover:border-primary/50"
                    }`}
                  >
                    {f === "all" ? "Todos os Desafios" : f.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Section */}
            <div className="card-modern section-refined">
              <h3 className="section-title flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Seu Progresso
              </h3>

              <ProgressBar
                label="HTML"
                completed={progress.html.completed}
                total={progress.html.total}
                percentage={progress.html.percentage}
                icon="🏗️"
              />

              <ProgressBar
                label="CSS"
                completed={progress.css.completed}
                total={progress.css.total}
                percentage={progress.css.percentage}
                icon="🎨"
              />

              <ProgressBar
                label="JavaScript"
                completed={progress.javascript.completed}
                total={progress.javascript.total}
                percentage={progress.javascript.percentage}
                icon="⚡"
              />

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Total</span>
                  <span className="text-lg font-bold text-primary">
                    {totalCompleted}/{totalChallenges}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(totalCompleted / totalChallenges) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="card-modern bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-sm text-primary flex items-center gap-2 mb-3">
                💡 Dica do Desafio
              </h3>
              <p className="text-sm text-foreground">
                {currentChallenge?.hint || "Complete os desafios para aprender a programar!"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
