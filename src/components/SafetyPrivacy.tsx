import { Lock, Eye, Shield, Server, FileText, Users } from 'lucide-react';

const privacyFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All location data and communications are encrypted using industry-standard AES-256 encryption. Not even we can read your data.',
  },
  {
    icon: Eye,
    title: 'You Control Your Data',
    description: 'Granular privacy controls let you decide exactly what\'s shared, with whom, and for how long. Delete your data at any time.',
  },
  {
    icon: Shield,
    title: 'No Law Enforcement Cooperation',
    description: 'We will not voluntarily share data with law enforcement. We require valid warrants and fight overbroad requests.',
  },
  {
    icon: Server,
    title: 'Minimal Data Collection',
    description: 'We only collect what\'s necessary for the service to function. No tracking, no profiling, no selling to third parties.',
  },
  {
    icon: FileText,
    title: 'Open Source & Auditable',
    description: 'Our code is open source and regularly audited by independent security researchers. Trust through transparency.',
  },
  {
    icon: Users,
    title: 'Community Governed',
    description: 'Major policy decisions are made transparently with input from our user community and civil liberties organizations.',
  },
];

export function SafetyPrivacy() {
  return (
    <section id="safety-privacy" className="py-20 md:py-32 bg-slate-900">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Privacy Is Non-Negotiable
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            A safety tool is useless if it becomes a surveillance tool. We've built
            PresenceProtocol with privacy as a fundamental right, not an afterthought.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {privacyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Privacy Commitment
            </h3>
            <div className="space-y-4 text-left text-slate-300">
              <p className="flex items-start gap-3">
                <span className="text-amber-500 font-bold text-lg">1.</span>
                We will never sell, share, or monetize your personal data or location history.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-500 font-bold text-lg">2.</span>
                We will challenge any government request for data that doesn't meet strict legal standards.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-500 font-bold text-lg">3.</span>
                We will publish an annual transparency report detailing any data requests we receive.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-500 font-bold text-lg">4.</span>
                We will notify users if their data is requested by authorities, unless legally prohibited.
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-500 font-bold text-lg">5.</span>
                We will continue to improve our security practices and maintain open-source transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
