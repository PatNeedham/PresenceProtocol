import { Radio, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Use Cases', href: '#use-cases' },
      { label: 'Pricing', href: '#' },
    ],
    resources: [
      { label: 'Know Your Rights', href: '#know-your-rights' },
      { label: 'Documentation', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Status', href: '#' },
    ],
    community: [
      { label: 'Events', href: '#community' },
      { label: 'Local Chapters', href: '#community' },
      { label: 'Leaderboards', href: '#community' },
      { label: 'Partner Organizations', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Transparency Report', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Radio className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-bold text-white">PresenceProtocol</span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Real-time safety networks for constitutional rights activists.
              Protecting civil liberties through solidarity and technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/PatNeedham/PresenceProtocol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@presenceprotocol.org"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} PresenceProtocol. Open source under MIT License.
          </p>
          <p className="text-slate-500 text-sm text-center md:text-right">
            Built with solidarity. Protecting rights through presence.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
            PresenceProtocol is committed to nonviolent civic engagement and constitutional rights education.
            We do not support or encourage any illegal activities. Always exercise your rights responsibly
            and consult with legal professionals when in doubt.
          </p>
        </div>
      </div>
    </footer>
  );
}
