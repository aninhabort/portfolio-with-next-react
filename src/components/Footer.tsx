interface FooterProps {
  tagline?: string;
}

export function Footer({ tagline }: FooterProps) {
  return (
    <footer className="border-t border-black/5 bg-[#f5f3f1]/70">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-6 text-xs text-[#6b6b6b] sm:flex-row sm:items-center sm:justify-between">
        <p>© Ana Carolina B. de Magalhães · {new Date().getFullYear()}</p>
        {tagline && <span>{tagline}</span>}
      </div>
    </footer>
  );
}
