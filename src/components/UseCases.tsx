import { Eye, Plane, Vote, Camera } from 'lucide-react';

const useCases = [
  {
    icon: Eye,
    title: 'Legal Observers',
    description: 'Document law enforcement interactions at protests and demonstrations. Ensure your footage and observations are preserved even if your device is confiscated.',
    scenario: 'You\'re observing a peaceful protest. With PresenceProtocol, your network knows your location, and if you\'re detained, legal support is notified immediately.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Plane,
    title: 'Immigration Monitoring',
    description: 'Witness and document immigration enforcement activities. Protected presence provides accountability for those who cannot speak for themselves.',
    scenario: 'Monitoring a workplace raid or checkpoint. Your presence is documented, your network is watching, and legal observers can respond if needed.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Vote,
    title: 'Voter Protection',
    description: 'Ensure fair elections by monitoring polling places. Document irregularities and voter intimidation while staying connected to your team.',
    scenario: 'Election day monitoring. Coordinate with your team, document incidents, and ensure every citizen\'s right to vote is protected.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Camera,
    title: 'Journalism',
    description: 'Reporters covering civil unrest or sensitive stories need protection too. Stay connected to your newsroom and legal team at all times.',
    scenario: 'Covering a breaking story in a volatile situation. Your editor knows where you are, and if contact is lost, immediate action can be taken.',
    color: 'from-purple-500 to-violet-500',
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Who Is PresenceProtocol For?</h2>
          <p className="section-subheading">
            Anyone exercising their constitutional rights in potentially volatile situations
            benefits from a safety network that has their back.
          </p>
        </div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${useCase.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">{useCase.description}</p>

                {/* Scenario Box */}
                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Scenario
                  </div>
                  <p className="text-slate-700 italic">"{useCase.scenario}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-16 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <p className="text-amber-900 text-lg">
            <strong>Remember:</strong> PresenceProtocol is for documentation and safety,
            not confrontation. We promote peaceful, legal civic engagement and witnessing,
            not interference with law enforcement activities.
          </p>
        </div>
      </div>
    </section>
  );
}
