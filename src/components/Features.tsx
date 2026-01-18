import {
  MapPin,
  Clock,
  Bell,
  Mic,
  Scale,
  Trophy,
  Smartphone,
  Wifi,
  Shield
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    description: 'Real-time location sharing with configurable privacy levels. Share precise location with trusted contacts only.',
  },
  {
    icon: Clock,
    title: 'Automatic Check-ins',
    description: 'Set customizable intervals. If you miss a check-in, your network is automatically notified.',
  },
  {
    icon: Bell,
    title: 'Emergency Notifications',
    description: 'One-tap panic button sends instant alerts with your location to all safety contacts.',
  },
  {
    icon: Mic,
    title: 'Audio Recording Backup',
    description: 'Optional secure audio recording that uploads to encrypted cloud storage in real-time.',
  },
  {
    icon: Scale,
    title: 'Legal Support Integration',
    description: 'Connect with legal aid networks and have attorney contact information readily available.',
  },
  {
    icon: Trophy,
    title: 'Community Leaderboards',
    description: 'Track documented civic participation hours, successful interventions, and community contributions.',
  },
  {
    icon: Smartphone,
    title: 'Works Offline',
    description: 'Core safety features work even without cellular data. Syncs when connection is restored.',
  },
  {
    icon: Wifi,
    title: 'Low Battery Mode',
    description: 'Optimized tracking that extends battery life during extended actions.',
  },
  {
    icon: Shield,
    title: 'Duress Detection',
    description: 'Secondary PIN triggers silent alert mode, appearing normal while notifying your network.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-slate-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Features Built for Safety</h2>
          <p className="section-subheading">
            Every feature is designed with one goal: keeping you safe while you exercise your constitutional rights.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                <feature.icon className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#signup"
            className="btn-primary bg-slate-900 hover:bg-slate-800 text-white"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  );
}
