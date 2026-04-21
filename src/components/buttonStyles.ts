const baseButtonClassName =
  "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export function primaryButtonClassName(className = "") {
  return `${baseButtonClassName} bg-accent text-white shadow-sm hover:bg-accent-hover focus-visible:outline-accent ${className}`;
}

export function secondaryButtonClassName(className = "") {
  return `${baseButtonClassName} border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 focus-visible:outline-neutral-400 ${className}`;
}
