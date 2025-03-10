
import AnimatedElement from "./AnimatedElement";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    delay: 0
  },
  {
    name: "Michael Chen",
    role: "Marketing Strategist",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    delay: 150
  },
  {
    name: "Emily Rodriguez",
    role: "Design Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    delay: 300
  },
  {
    name: "David Wilson",
    role: "Development Director",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    delay: 450
  },
];

const Team = () => {
  return (
    <section id="team" className="section bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedElement direction="up" className="mb-16 max-w-3xl">
          <h2 className="section-title">Our Team</h2>
          <p className="text-lg text-brand-navy max-w-2xl">
            Meet the talented professionals behind our success. Our diverse team brings together expertise 
            from various disciplines to deliver exceptional results for our clients.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedElement 
              key={index} 
              direction="up" 
              delay={member.delay}
              className="team-card group"
            >
              <div className="relative mb-6 mx-auto">
                <div className="w-32 h-32 overflow-hidden rounded-full mx-auto border-4 border-brand-green/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -z-10 w-32 h-32 rounded-full bg-brand-pink/20 -bottom-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-pink transition-colors">{member.name}</h3>
              <p className="text-brand-green font-medium">{member.role}</p>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement direction="up" delay={600} className="mt-16 text-center max-w-3xl mx-auto">
          <div className="highlight-box">
            <h3 className="text-xl font-bold text-brand-navy mb-4">Join Our Team</h3>
            <p className="text-brand-navy">
              We're always looking for talented individuals who are passionate about marketing 
              and design to join our growing team. Check out our career opportunities.
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Team;
