export function Accessibility({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5 5" />
      <path d="M6 19a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3.5" />
      <path d="m12 12-2 3" />
    </svg>
  )
}
