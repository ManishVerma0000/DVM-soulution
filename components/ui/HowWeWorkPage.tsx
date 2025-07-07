import React from 'react';
import { Workflow, Users, Code, Rocket } from 'lucide-react';

const workSteps = [
  {
    title: 'Understanding Your Needs',
    description:
      'We begin by thoroughly understanding your business goals, technical requirements, and project scope. This helps us align our efforts with your vision from day one.',
    icon: Users,
  },
  {
    title: 'Planning & Strategy',
    description:
      'We create a detailed roadmap with milestones, timelines, and technology stacks to ensure a structured development process. Agile methodology is used for flexibility and transparency.',
    icon: Workflow,
  },
  {
    title: 'Design & Development',
    description:
      'Our UI/UX team designs user-friendly interfaces, while our developers build robust and scalable solutions. We focus on performance, security, and code quality at every step.',
    icon: Code,
  },
  {
    title: 'Launch & Support',
    description:
      'After rigorous testing and deployment, we ensure a smooth launch. Post-launch, we offer ongoing support, monitoring, and updates to keep your product at its best.',
    icon: Rocket,
  },
];

const HowWeWorkPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-white to-green-700">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h1>
        <p className="text-lg text-gray-600">
          We follow a transparent, collaborative, and goal-oriented process to turn your ideas into powerful digital products.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {workSteps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWorkPage;
