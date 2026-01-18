import { useState } from 'react';
import { Shield, Lock, Code, ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call - replace with actual backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative section-container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            Protecting Constitutional Rights Through Solidarity
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Real-Time Safety Networks for{' '}
            <span className="text-amber-500">Civil Liberties</span> Activists
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Coordinate live geolocation tracking and instant safety notifications.
            When you stand up for rights, we ensure someone always knows where you are.
          </p>

          {/* Email Signup Form */}
          <div id="signup" className="max-w-md mx-auto mb-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary whitespace-nowrap"
                >
                  {isLoading ? (
                    'Joining...'
                  ) : (
                    <>
                      Join Waitlist <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 bg-green-500/10 text-green-400 px-6 py-4 rounded-lg">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">You're on the list! We'll be in touch soon.</span>
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="trust-badge">
              <Lock className="w-4 h-4 text-amber-500" />
              End-to-End Encrypted
            </div>
            <div className="trust-badge">
              <Code className="w-4 h-4 text-amber-500" />
              Open Source
            </div>
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-amber-500" />
              No Data Sold
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-amber-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
