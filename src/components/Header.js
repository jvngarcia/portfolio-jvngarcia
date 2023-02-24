

export default function Header() {
    return (
        <header className="py-4">
          <div className="mx-auto flex justify-center gap-6">
            <a href="https://github.com/jvngarcia" target="_blank" rel="noopener noreferrer"><img src="/images/icons/github.svg" alt="JVN García github" className="w-8 h-8 rounded-full filter brightness-50 dark:filter-none" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="/images/icons/linkedin.svg" alt="JVN García linkedin" className="w-8 h-8 rounded-full filter brightness-50 dark:filter-none" /></a>
            <a href="https://www.producthunt.com/@jvngarcia" target="_blank" rel="noopener noreferrer"><img src="/images/icons/producthunt.svg" alt="JVN García producthunt" className="w-8 h-8 rounded-full filter brightness-50 dark:filter-none" /></a>
          </div>
        </header>
    )
}