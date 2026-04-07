import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
              Web Dev
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Mastering React Hooks: A Complete Guide
            </span>
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>Sarah Johnson</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>April 2, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>8 min read</span>
            </div>
          </div>

          <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop"
              alt="Blog post"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 space-y-6">
              <p className="text-xl leading-relaxed">
                React Hooks have revolutionized the way we build React applications.
                In this comprehensive guide, we'll explore the most important hooks
                and how to use them effectively in your projects.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
                Understanding useState
              </h2>
              <p>
                The useState hook is the most fundamental hook in React. It allows
                you to add state to functional components, making them more powerful
                and flexible than ever before.
              </p>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 my-6">
                <pre className="text-sm overflow-x-auto">
                  <code className="text-cyan-400">
{`const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}`}
                  </code>
                </pre>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
                The Power of useEffect
              </h2>
              <p>
                useEffect is your go-to hook for handling side effects in React
                components. Whether you're fetching data, subscribing to events, or
                manipulating the DOM, useEffect has you covered.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
                Custom Hooks
              </h2>
              <p>
                One of the most powerful features of hooks is the ability to create
                your own custom hooks. This allows you to extract and reuse stateful
                logic across multiple components.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">
                Conclusion
              </h2>
              <p>
                React Hooks have transformed React development, making it more
                intuitive and powerful. By mastering these concepts, you'll be able
                to build more maintainable and efficient applications.
              </p>
            </div>
          </div>
        </motion.article>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <Link
                key={item}
                to={`/blog/related-${item}`}
                className="p-6 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2 hover:text-cyan-400 transition-colors">
                  Related Article Title {item}
                </h4>
                <p className="text-gray-400 text-sm">
                  Brief description of the related article...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
