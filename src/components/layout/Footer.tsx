import { FaGithub, FaTwitter, FaDiscord, FaShieldAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-secondary-black border-t border-accent-orange/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="h-6 w-6 text-accent-orange" />
              <span className="text-lg font-sans text-text-light">Vikify</span>
            </div>
            <p className="text-text-dark text-sm">
              Privacy-first subscription platform for digital content.
            </p>
          </div>

          <div>
            <h3 className="text-text-light font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-text-dark hover:text-accent-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-text-dark hover:text-accent-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-text-dark hover:text-accent-orange transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-light font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs" className="text-text-dark hover:text-accent-orange transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/faq" className="text-text-dark hover:text-accent-orange transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="text-text-dark hover:text-accent-orange transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-light font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent-orange transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent-orange transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent-orange transition-colors"
              >
                <FaDiscord className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-accent-orange/20">
          <p className="text-center text-text-dark text-sm">
            © {new Date().getFullYear()} Vikify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}