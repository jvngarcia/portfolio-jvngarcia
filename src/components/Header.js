

export default function Header() {
    return (
        <header className="py-4">
          <div className="mx-auto flex justify-center gap-6">
            <a href="https://github.com/jvngarcia" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-all"><img src="/images/icons/github.svg" alt="JVN García github" className="w-8 h-8 filter brightness-50 dark:filter-none" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-all"><img src="/images/icons/linkedin.svg" alt="JVN García linkedin" className="w-8 h-8 filter brightness-50 dark:filter-none" /></a>
            <a href="https://www.instagram.com/jvngarcia_" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-all"><img src="/images/icons/insta.svg" alt="JVN García producthunt" className="w-8 h-8 filter brightness-50 dark:filter-none" /></a>
            <a href="https://www.producthunt.com/@jvngarcia" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-all"><img src="/images/icons/producthunt.svg" alt="JVN García producthunt" className="w-8 h-8 filter brightness-50 dark:filter-none" /></a>
          </div>
        </header>
    )
}