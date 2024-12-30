import React from 'react';
import { ChevronRight, Clock, User } from 'lucide-react';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Art of Layering Fragrances",
    excerpt: "Discover how to combine different scents to create your unique signature fragrance...",
    image: "/perfume2.jpg",
    author: "Sophie Laurent",
    date: "Dec 28, 2024",
    category: "Tips & Guides",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding Perfume Notes: A Beginner's Guide",
    excerpt: "Learn about top, heart, and base notes and how they work together in perfumery...",
    image: "/perfume2.jpg",
    author: "Michael Chen",
    date: "Dec 25, 2024",
    category: "Education",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "2025 Fragrance Trends: What's Coming Next",
    excerpt: "Expert perfumers share their predictions for the upcoming year's scent trends...",
    image: "/perfume2.jpg",
    author: "Emma Roberts",
    date: "Dec 20, 2024",
    category: "Trends",
    readTime: "6 min read"
  }
];

export default function PerfumeBlog() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#BBA14F] text-xl font-mono mb-2">Our Blog</h2>
          <h3 className="text-white text-4xl font-bold mb-4">Latest Articles & News</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the latest trends, tips, and stories from the world of luxury perfumes.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 bg-[#2a2a2a] rounded-2xl overflow-hidden border border-[#BBA14F]">
            <div className="relative h-64 md:h-auto">
              <img
                src="/perfume2.jpg"
                alt="Featured article"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-[#BBA14F] font-medium mb-2">Featured Article</span>
              <h4 className="text-2xl font-bold text-white mb-4">
                The Evolution of Luxury Perfumes: Past, Present, and Future
              </h4>
              <p className="text-gray-400 mb-6">
                Take a journey through time as we explore how luxury perfumes have evolved,
                from ancient civilizations to modern-day innovations in sustainable perfumery...
              </p>
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[#BBA14F] hover:text-[#d4b85c] transition-colors">
                Read More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-[#2a2a2a] rounded-xl overflow-hidden border border-[#333333] hover:border-[#BBA14F] transition-colors"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#BBA14F] text-black px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h4>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-[#2a2a2a] rounded-2xl p-8 text-center border border-[#BBA14F]">
          <h4 className="text-2xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest articles, fragrance launches, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-[#1e1e1e] border border-[#BBA14F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BBA14F]"
            />
            <button
              type="submit"
              className="bg-[#BBA14F] text-black px-8 py-3 rounded-full hover:bg-[#d4b85c] transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}