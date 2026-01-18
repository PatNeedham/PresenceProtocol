import { MapPin, Calendar, Award, Quote } from 'lucide-react';

const cities = [
  { name: 'New York', members: 234, active: true },
  { name: 'Los Angeles', members: 189, active: true },
  { name: 'Chicago', members: 145, active: true },
  { name: 'Houston', members: 98, active: true },
  { name: 'Phoenix', members: 76, active: false },
  { name: 'Philadelphia', members: 112, active: true },
  { name: 'San Antonio', members: 54, active: false },
  { name: 'San Diego', members: 87, active: true },
  { name: 'Dallas', members: 91, active: true },
  { name: 'Austin', members: 123, active: true },
];

const upcomingEvents = [
  {
    title: 'Legal Observer Training',
    date: 'Feb 15, 2026',
    location: 'New York City',
    type: 'Training',
  },
  {
    title: 'Know Your Rights Workshop',
    date: 'Feb 22, 2026',
    location: 'Los Angeles',
    type: 'Workshop',
  },
  {
    title: 'Community Safety Network Meetup',
    date: 'Mar 1, 2026',
    location: 'Chicago',
    type: 'Meetup',
  },
  {
    title: 'Voter Protection Training',
    date: 'Mar 8, 2026',
    location: 'Austin',
    type: 'Training',
  },
];

const testimonials = [
  {
    quote: "PresenceProtocol gave me the confidence to document a checkpoint knowing my family would be notified if anything happened. That peace of mind is priceless.",
    author: 'Maria G.',
    role: 'Legal Observer, Texas',
  },
  {
    quote: "As a journalist covering protests, having a dead man's switch for my location has saved me from dangerous situations more than once.",
    author: 'James K.',
    role: 'Independent Journalist',
  },
  {
    quote: "The training resources helped our volunteer network understand both their rights and how to safely document without interfering.",
    author: 'Sarah L.',
    role: 'Community Organizer, Chicago',
  },
];

const leaderboardEntries = [
  { name: 'CivicWatchNYC', hours: 342, badge: 'Gold' },
  { name: 'BorderWitness', hours: 298, badge: 'Gold' },
  { name: 'ProtectTheVote', hours: 256, badge: 'Silver' },
  { name: 'FirstAmendFirst', hours: 201, badge: 'Silver' },
  { name: 'WitnessLA', hours: 187, badge: 'Bronze' },
];

export function Community() {
  return (
    <section id="community" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading">Join the Community</h2>
          <p className="section-subheading">
            Connect with like-minded activists, find local training, and become part
            of a nationwide network standing up for civil liberties.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Local Chapters Map */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              Active Chapters
            </h3>
            <div className="bg-slate-100 rounded-2xl p-6 h-80 relative overflow-hidden">
              {/* Simplified US Map representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-slate-300 text-sm">Interactive Map Coming Soon</div>
              </div>
              {/* City dots */}
              <div className="relative h-full">
                {cities.slice(0, 6).map((city, index) => (
                  <div
                    key={index}
                    className={`absolute ${
                      city.active ? 'bg-amber-500' : 'bg-slate-400'
                    } rounded-full`}
                    style={{
                      width: Math.max(12, city.members / 20) + 'px',
                      height: Math.max(12, city.members / 20) + 'px',
                      left: `${15 + index * 15}%`,
                      top: `${20 + (index % 3) * 25}%`,
                    }}
                    title={`${city.name}: ${city.members} members`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {cities.map((city, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    city.active
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {city.name} ({city.members})
                </span>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-500" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-4 flex items-center gap-4 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 truncate">{event.title}</h4>
                    <p className="text-sm text-slate-600">
                      {event.date} • {event.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-4 block text-center text-amber-600 hover:text-amber-700 font-medium"
            >
              View All Events →
            </a>
          </div>
        </div>

        {/* Leaderboard Preview */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Community Leaderboard
            <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">
              Coming Soon
            </span>
          </h3>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8">
            <p className="text-slate-400 mb-6 text-sm">
              Track documented civic participation hours, successful interventions, and community contributions.
              These leaderboards celebrate those who dedicate time to protecting civil liberties.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-slate-400 text-sm">
                    <th className="text-left pb-4 font-medium">Rank</th>
                    <th className="text-left pb-4 font-medium">Team</th>
                    <th className="text-right pb-4 font-medium">Hours Documented</th>
                    <th className="text-right pb-4 font-medium">Badge</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardEntries.map((entry, index) => (
                    <tr key={index} className="border-t border-slate-700/50">
                      <td className="py-4 text-white font-bold">{index + 1}</td>
                      <td className="py-4 text-white">{entry.name}</td>
                      <td className="py-4 text-slate-300 text-right">{entry.hours}h</td>
                      <td className="py-4 text-right">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            entry.badge === 'Gold'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : entry.badge === 'Silver'
                              ? 'bg-slate-400/20 text-slate-300'
                              : 'bg-orange-600/20 text-orange-400'
                          }`}
                        >
                          {entry.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">
            Voices from the Community
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
                <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
