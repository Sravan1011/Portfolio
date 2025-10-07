import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 py-8">
      <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Sravan Avvaru. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="https://github.com/wrtsravan" target="_blank" className="hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="https://twitter.com/wrtsravan" target="_blank" className="hover:text-foreground transition-colors">
            Twitter
          </Link>
          <Link href="https://linkedin.com/in/wrtsravan" target="_blank" className="hover:text-foreground transition-colors">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
