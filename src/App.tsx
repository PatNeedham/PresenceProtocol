import {
  Navigation,
  Hero,
  HowItWorks,
  Features,
  UseCases,
  SafetyPrivacy,
  KnowYourRights,
  Community,
  Footer,
} from './components';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <UseCases />
        <SafetyPrivacy />
        <KnowYourRights />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
