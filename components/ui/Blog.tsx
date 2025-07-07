import React from 'react';
import { Search, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

const BlogsPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Harnessing the Power of Rust in Blockchain Development',
      description: 'Explore how Rust is powering the future of blockchain with speed, safety, and performance.',
      author: 'Manish Verma',
      date: 'July 7, 2025',
      image: '/api/placeholder/400/250',
      category: 'Rust & Blockchain',
    },
    {
      id: '2',
      title: 'From Frontend to Backend: A Full Stack Developer’s Guide',
      description: 'Master full stack development with React, Node.js, and databases like PostgreSQL.',
      author: 'TechDev Guru',
      date: 'July 6, 2025',
      image: '/api/placeholder/400/250',
      category: 'Full Stack',
    },
    {
      id: '3',
      title: 'Building Scalable APIs with Kotlin and Spring Boot',
      description: 'Learn how Kotlin is revolutionizing backend development with concise syntax and strong typing.',
      author: 'JetBrains Expert',
      date: 'July 5, 2025',
      image: '/api/placeholder/400/250',
      category: 'Kotlin & Backend',
    },
    {
      id: '4',
      title: 'Deploying Production Apps with NGINX and Docker',
      description: 'Learn how to use NGINX as a reverse proxy and load balancer in modern web app deployment.',
      author: 'InfraDev',
      date: 'July 3, 2025',
      image: '/api/placeholder/400/250',
      category: 'DevOps & NGINX',
    },
    {
      id: '5',
      title: 'DevOps Best Practices for Scalable Application Delivery',
      description: 'CI/CD, container orchestration, and monitoring: a practical guide for efficient DevOps.',
      author: 'CloudNative Pro',
      date: 'July 2, 2025',
      image: '/api/placeholder/400/250',
      category: 'DevOps',
    },
    {
      id: '6',
      title: 'Using Rust to Build Secure and Fast Web Services',
      description: 'How Rust’s memory safety and speed are ideal for creating fast and secure microservices.',
      author: 'Rustacean',
      date: 'July 1, 2025',
      image: '/api/placeholder/400/250',
      category: 'Rust & Web',
    }
  ];

  const getImageContent = (index: number) => {
    const backgrounds = [
      'bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400',
      'bg-gradient-to-br from-indigo-600 via-indigo-400 to-sky-300',
      'bg-gradient-to-br from-green-700 via-lime-500 to-yellow-300',
      'bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500',
      'bg-gradient-to-br from-yellow-600 via-orange-400 to-red-300',
      'bg-gradient-to-br from-slate-800 via-gray-700 to-cyan-500'
    ];
    return (
      <div className={`absolute inset-0 ${backgrounds[index % backgrounds.length]} flex items-center justify-center`}>
        <span className="text-white font-bold text-lg uppercase tracking-wide">
          {blogPosts[index].category}
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h1 className="text-5xl font-bold text-gray-900 mb-2">Tech Blogs</h1>
              <p className="text-xl text-gray-600">Deep dives into trending tools, languages, and stacks.</p>
            </div>
            {/* Search Bar */}
            <div className="relative max-w-md w-full lg:w-96">
              <input
                type="text"
                placeholder="Search for blogs..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                {getImageContent(index)}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Meta Description:</span> {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span className="font-medium">Author:</span>
                    <span className="ml-1">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
