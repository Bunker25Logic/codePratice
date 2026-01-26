import { useState, useEffect } from 'react';

export function useThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verificar preferência salva ou preferência do sistema
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
      applyTheme(saved === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      applyTheme(prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  return { isDark, toggleTheme };
}
