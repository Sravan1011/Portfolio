

export function Navigation() {
    return (
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-medium text-gray-900">Sravan Avvaru</div>
            <div className="flex items-center space-x-8 text-sm">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                about
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                projects
              </a>
              <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
                work
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  