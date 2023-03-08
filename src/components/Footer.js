


export default function Footer() {
    return (
        <footer className="py-8 container mx-auto text-center mt-12">
            <div className="mx-auto flex justify-center gap-6 items-center flex-wrap">
                <p className="text-sm text-gray-500 dark:text-gray-400">© 2021 JVN García</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 md:block hidden">|</p>
                <a href="https://github.com/jvngarcia" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-all"><img src="/images/icons/github.svg" alt="JVN García github" className="w-8 h-8 rounded-full filter brightness-50 dark:filter-none" /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-all"><img src="/images/icons/linkedin.svg" alt="JVN García linkedin" className="w-8 h-8 rounded-full filter brightness-50 dark:filter-none" /></a>
                <a href="https://www.instagram.com/jvngarcia_" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-all"><img src="/images/icons/insta.svg" alt="JVN García producthunt" className="w-8 h-8 filter brightness-50 dark:filter-none" /></a>
                <a href="https://www.producthunt.com/@jvngarcia" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-all"><img src="/images/icons/producthunt.svg" alt="JVN García producthunt" className="w-8 h-8 rounded-full filter brightness-50 dark:filter-none" /></a>
            </div>
        </footer>
    )
}