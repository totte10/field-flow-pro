import AppLayout from "@/components/AppLayout";
import { Bot, Send } from "lucide-react";
import { useState } from "react";

const AiPage = () => {
  const [input, setInput] = useState("");

  const suggestions = [
    "Planera dagens rutt",
    "Optimera jobb",
    "Skapa arbetsplan",
    "Vilka jobb är kvar?",
  ];

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">AI Assistent</h1>
        <p className="text-sm text-muted-foreground">Fråga om rutt, planering eller optimering</p>
      </div>

      {/* Chat area */}
      <div className="glass-card p-5 mb-4 min-h-[280px] flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-2xl gradient-orange flex items-center justify-center mb-4">
          <Bot className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="font-semibold text-foreground mb-1">Hej! Hur kan jag hjälpa?</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Jag kan hjälpa dig planera rutter, optimera jobb och skapa arbetsplaner.
        </p>
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 mb-4">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => setInput(s)}
            className="glass-card px-3 py-1.5 text-xs font-medium text-foreground hover:border-primary/40 transition-colors"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="glass-card flex items-center gap-2 p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Skriv ditt meddelande..."
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none px-2"
        />
        <button className="w-9 h-9 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
          <Send className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
    </AppLayout>
  );
};

export default AiPage;
