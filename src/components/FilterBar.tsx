"use client";

interface FilterBarProps {
  categories: readonly string[];
  active: string;
  onSelect: (category: string) => void;
  counts: Record<string, number>;
}

export default function FilterBar({
  categories,
  active,
  onSelect,
  counts,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
            active === cat
              ? "bg-accent text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]"
              : "border border-card-border bg-card text-muted hover:border-accent/30 hover:text-foreground"
          }`}
        >
          {cat}
          <span className="ml-1.5 opacity-60">{counts[cat] ?? 0}</span>
        </button>
      ))}
    </div>
  );
}
