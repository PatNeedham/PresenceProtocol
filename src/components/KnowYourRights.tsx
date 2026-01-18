import { useState } from 'react';
import { ChevronDown, ExternalLink, FileText } from 'lucide-react';

const faqs = [
  {
    question: 'Can I legally film police or ICE agents in public?',
    answer: `Yes, you have a First Amendment right to record law enforcement officers performing their duties in public spaces. This right has been affirmed by multiple federal circuit courts. However:

    • You may not physically interfere with officers
    • You should maintain a safe distance
    • Officers cannot demand you stop recording or delete footage
    • They cannot seize your phone without a warrant (Riley v. California, 2014)

    Some states have specific laws about audio recording, so be aware of local "two-party consent" laws that may apply to audio.`,
    amendment: 'First Amendment',
  },
  {
    question: 'What should I do if I am detained?',
    answer: `If you are detained:

    • Remain calm and don't resist physically
    • Clearly state: "I am exercising my right to remain silent"
    • Ask: "Am I free to leave?" If yes, leave calmly
    • You have the right to refuse consent to searches
    • Ask for a lawyer before answering questions
    • You do NOT have to provide ID in most states unless you're driving
    • Don't sign anything you don't understand

    Remember: Anything you say can be used against you. Silence cannot be used against you.`,
    amendment: 'Fifth Amendment',
  },
  {
    question: 'What are my rights at immigration checkpoints?',
    answer: `At interior checkpoints (not the border):

    • You can remain silent about your immigration status
    • You do not have to answer questions about citizenship
    • You do not have to consent to a vehicle search
    • Agents can briefly detain you but need reasonable suspicion to extend the stop

    At the border or within 100 miles (the "border zone"):

    • CBP has broader authority but still cannot use excessive force
    • You can still refuse to answer questions (though there may be consequences for non-citizens)
    • Recording is still generally protected

    Immigration status does not eliminate constitutional protections.`,
    amendment: 'Fourth & Fifth Amendments',
  },
  {
    question: 'Can my phone be searched without a warrant?',
    answer: `Generally, no. The Supreme Court ruled in Riley v. California (2014) that police need a warrant to search your cell phone, even during an arrest.

    Protect yourself:

    • Use a strong passcode (not just biometrics)
    • You can be compelled to use biometrics; Fifth Amendment may not protect them
    • Enable remote wipe capabilities
    • Consider apps that require secondary authentication
    • Back up important data securely

    Exception: At the actual border, CBP claims authority to search devices without a warrant, though this is being challenged in courts.`,
    amendment: 'Fourth Amendment',
  },
  {
    question: "What's the difference between being detained and arrested?",
    answer: `Detention:
    • Temporary stop based on reasonable suspicion
    • You're not free to leave, but you're not under arrest
    • Should be brief (typically minutes)
    • You still have the right to remain silent

    Arrest:
    • Based on probable cause that you committed a crime
    • You must be informed of charges
    • You have the right to an attorney
    • You will be taken into custody and booked

    Always ask: "Am I being detained or am I free to go?" and "Am I under arrest? What is the charge?"

    This clarifies your status and protects your rights.`,
    amendment: 'Fourth & Sixth Amendments',
  },
];

const resources = [
  { name: 'ACLU Know Your Rights', url: 'https://www.aclu.org/know-your-rights' },
  { name: 'National Lawyers Guild', url: 'https://www.nlg.org' },
  { name: 'United We Dream', url: 'https://unitedwedream.org' },
  { name: 'National Immigration Law Center', url: 'https://www.nilc.org' },
];

export function KnowYourRights() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="know-your-rights" className="py-20 md:py-32 bg-slate-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Know Your Rights</h2>
          <p className="section-subheading">
            Understanding your constitutional protections is the first step in exercising them.
            This is educational information, not legal advice.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <span className="text-sm text-amber-600 font-medium">
                        {faq.amendment}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="prose prose-slate max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-slate-600 text-base leading-relaxed bg-transparent p-0 m-0">
                          {faq.answer}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Downloadable Resources */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-500" />
                Know Your Rights Cards
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                Download printable cards to carry with you during actions.
              </p>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium text-sm transition-colors"
                >
                  English (PDF)
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium text-sm transition-colors"
                >
                  Spanish / Español (PDF)
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium text-sm transition-colors"
                >
                  Chinese / 中文 (PDF)
                </a>
              </div>
            </div>

            {/* External Resources */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Trusted Resources
              </h3>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-700 font-medium text-sm transition-colors group"
                  >
                    {resource.name}
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-900 text-sm">
                <strong>Legal Disclaimer:</strong> This information is for educational
                purposes only and does not constitute legal advice. Laws vary by jurisdiction.
                Consult with a qualified attorney for advice specific to your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
