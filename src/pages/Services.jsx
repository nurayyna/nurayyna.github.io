// pages/Services.jsx
import Hero from '../components/Hero';

export default function Services() {
  return (
    <div>
      <Hero
        backgroundImage="/images/service_hero.png"
        title="Engineered & Specialized"
        subtitle="We build top-tier engineering platforms with industrial-grade security and scalability."
        buttonText="View Services"
        onButtonClick={() => navigate('/services')}
      />
    </div>
  );
}