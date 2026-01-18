import { UserPlus, Users, MapPin, Bell } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Your Account',
    description: 'Sign up with secure, passwordless authentication. Your identity is protected from the start.',
  },
  {
    icon: Users,
    title: 'Build Your Safety Network',
    description: 'Add trusted contacts—friends, family, legal observers, or attorneys—who can respond if needed.',
  },
  {
    icon: MapPin,
    title: 'Activate Live Tracking',
    description: 'When participating in an action, enable tracking with one tap. Your location is encrypted and shared only with your network.',
  },
  {
    icon: Bell,
    title: 'Automatic Alerts',
    description: 'If you miss a check-in or contact is lost, your network is immediately notified with your last known location.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            Four simple steps to ensure someone always has your back when you're standing up for what's right.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-amber-500 to-slate-200" />
              )}

              <div className="relative flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 text-slate-900 font-bold rounded-full flex items-center justify-center text-sm z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="w-10 h-10 text-amber-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Preview */}
        <div className="mt-20 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mock Phone */}
            <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl flex-shrink-0">
              <div className="w-full h-full bg-slate-800 rounded-[2.5rem] overflow-hidden relative">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl" />

                {/* Screen Content */}
                <div className="pt-10 px-4 h-full flex flex-col">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-white text-xs mb-4">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3 h-full bg-green-500 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="text-center mb-4">
                    <h4 className="text-white font-bold text-lg">Active Session</h4>
                    <p className="text-amber-500 text-sm">Recording for 1:23:45</p>
                  </div>

                  {/* Mock Map */}
                  <div className="flex-1 bg-slate-700 rounded-xl mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-30">
                      <div className="w-full h-full" style={{
                        backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    {/* Location Marker */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse" />
                      <div className="absolute -top-1 -left-1 w-6 h-6 border-2 border-amber-500 rounded-full animate-ping" />
                    </div>
                    {/* Ping indicators */}
                    <div className="absolute top-8 left-6 w-2 h-2 bg-green-500 rounded-full" />
                    <div className="absolute top-16 right-8 w-2 h-2 bg-green-500 rounded-full" />
                    <div className="absolute bottom-12 left-10 w-2 h-2 bg-green-500 rounded-full" />
                  </div>

                  {/* Check-in Button */}
                  <button className="w-full bg-amber-500 text-slate-900 font-bold py-3 rounded-xl mb-4">
                    Check In Now
                  </button>

                  {/* Status */}
                  <div className="flex items-center justify-center gap-2 text-green-400 text-sm mb-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    3 contacts watching
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                See Your Network in Action
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                The PresenceProtocol app provides a real-time view of your active session.
                Your trusted contacts can see your approximate location and receive instant
                alerts if you miss a scheduled check-in.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Configurable check-in intervals (5, 15, or 30 minutes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">One-tap emergency alert to all contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Optional audio recording backup to secure cloud</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
