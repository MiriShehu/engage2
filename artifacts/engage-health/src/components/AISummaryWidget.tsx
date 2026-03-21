import { useState } from 'react';
import { Sparkles, ChevronDown, Loader2 } from 'lucide-react';

const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

async function summariseContent(text: string): Promise<string> {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      messages: [
        {
          role: 'user',
          content: `Summarise the following content in 4–5 clear bullet points. Be concise and focus on the key takeaways for someone deciding whether this service is right for them:\n\n${text.slice(0, 6000)}`,
        },
      ],
    }),
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  const data = await res.json();
  return data.content[0].text as string;
}

interface Props {
  /** CSS selector for the element whose text content should be summarised.
   *  Defaults to `[data-ai-content]`. */
  contentSelector?: string;
}

export function AISummaryWidget({ contentSelector = '[data-ai-content]' }: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState(false);

  async function handleToggle() {
    // Already have a summary — just toggle visibility
    if (summary !== null) {
      setOpen(v => !v);
      return;
    }

    setOpen(true);
    setLoading(true);
    setError(false);

    try {
      const el = document.querySelector(contentSelector);
      const text = el?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
      if (!text) throw new Error('No content found');
      const result = await summariseContent(text);
      setSummary(result);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-7 rounded-xl border border-primary/20 bg-primary/5 overflow-hidden">
      <button
        onClick={handleToggle}
        className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-primary/10 transition-colors"
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/15">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <span className="flex-1 text-sm font-semibold text-secondary">
          Summarise this content using AI
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-primary/10">
          {loading && (
            <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
              Generating summary…
            </div>
          )}
          {error && (
            <p className="pt-4 text-sm text-red-500">
              Couldn't generate a summary. Please check your API key or try again.
            </p>
          )}
          {summary && (
            <div className="pt-4 text-sm text-secondary leading-relaxed whitespace-pre-line">
              {summary}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
