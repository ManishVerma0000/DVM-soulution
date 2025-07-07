import React from 'react';
import { ExternalLink, BookOpen, Layers3 } from 'lucide-react';

const caseStudies = [
  {
    id: '1',
    title: 'Blockchain-Powered Land Registry System',
    category: 'Blockchain',
    description: `We implemented a decentralized land registry using Hyperledger Fabric to ensure immutability and prevent fraud. This system reduced property disputes by 80% and improved transparency in land ownership transfers.`,
    link: 'https://www.hyperledger.org/use/blockchain-land-registry',
    icon: Layers3,
    bgColor: 'bg-gradient-to-br from-green-500 to-indigo-500',
  },
  {
    id: '2',
    title: 'Kotlin in Large-Scale Banking Backend',
    category: 'Kotlin',
    description: `By migrating Java services to Kotlin and Spring Boot, we reduced boilerplate code by 40% and improved developer productivity. The system now supports over 5 million daily transactions with enhanced null safety and reduced bugs.`,
    link: 'https://kotlinlang.org/docs/server-overview.html',
    icon: BookOpen,
    bgColor: 'bg-gradient-to-br from-green-500 to-rose-400',
  },
  {
    id: '3',
    title: 'DevOps Transformation for a Logistics Company',
    category: 'DevOps',
    description: `Implemented CI/CD pipelines using GitHub Actions, Docker, and Kubernetes. Achieved 95% deployment automation, reduced production incidents by 60%, and improved rollback strategies using Helm charts.`,
    link: 'https://cloud.google.com/devops',
    icon: ExternalLink,
    bgColor: 'bg-gradient-to-br from-green-600 to-cyan-400',
  }
];

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600">
            Discover how real-world businesses are leveraging modern technologies to build scalable and efficient solutions.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map(({ id, title, category, description, link, icon: Icon, bgColor }) => (
            <div key={id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className={`p-6 text-white ${bgColor} flex items-center`}>
                <Icon className="w-10 h-10 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="text-sm opacity-80">{category}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-sm mb-4">{description}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:underline text-sm font-medium"
                >
                  Read Full Case Study
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
