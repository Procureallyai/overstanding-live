import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <img 
              src="/overstanding_live_logo_200x200.jpg" 
              alt="Overstanding Live" 
              className="h-6 w-6 rounded-sm"
            />
            <span className="text-sm text-muted-foreground">
              © {currentYear} Overstanding Live
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
