export type LinkWithTooltipProps = {
  text: string;
  description: string;
  href?: string;
};

export function LinkWithTooltip({ text, description, href = "#" }: LinkWithTooltipProps) {
  return (
    <span className="relative inline-block group">
      <a href={href} className="text-blue-600 underline">
        {text}
      </a>
      <span className="pointer-events-none absolute left-0 top-full mt-2 w-64 max-w-xs rounded-md bg-white p-3 text-sm text-gray-900 shadow-lg ring-1 ring-black/5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition z-20">
        {description}
        <span className="absolute -top-1 left-3 h-2 w-2 rotate-45 bg-white shadow -z-10"></span>
      </span>
    </span>
  );
}


