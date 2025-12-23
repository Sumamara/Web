import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Moon, Heart, Target, ArrowRight, RefreshCcw, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const products = [
    {
      icon: Zap,
      title: 'More Energy',
      description: 'Unlock boundless vitality and power through your day',
      path: '/products/energy',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Moon,
      title: 'Better Sleep',
      description: 'Experience deep, restorative rest every night',
      path: '/products/sleep',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      icon: Heart,
      title: 'Less Stress',
      description: 'Find calm and peace in every moment',
      path: '/products/stress',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Target,
      title: 'Stop Procrastinating',
      description: 'Take action and achieve your goals today',
      path: '/products/procrastination',
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Transform Life - Your Journey to Personal Transformation</title>
        <meta name="description" content="Discover proven strategies to boost energy, improve sleep, reduce stress, and overcome procrastination. Start your transformation journey today." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Life
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover proven strategies to boost your energy, improve sleep quality, reduce stress, and overcome procrastination. Your journey to a better you starts here.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/products/energy">
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-orange-300 hover:border-orange-400 hover:bg-orange-50 transition-all duration-300">
                  Read Our Blog
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Wheel of Life Promo Section */}
      <section className="py-20 px-4 relative overflow-hidden">
         {/* Decorative Background */}
         <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 skew-y-3 transform origin-bottom-right scale-110 -z-10" />
         
         <div className="max-w-6xl mx-auto">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                   <div className="flex justify-center items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative w-64 h-64 md:w-80 md:h-80"
                      >
                         {/* Abstract Wheel Representation */}
                         <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#spinner-gradient)" strokeWidth="8" strokeDasharray="60 10" />
                            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="15" />
                            <path d="M50 50 L50 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <path d="M50 50 L95 50" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <path d="M50 50 L50 95" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <path d="M50 50 L5 50" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <defs>
                               <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#f97316" />
                                  <stop offset="100%" stopColor="#ec4899" />
                               </linearGradient>
                            </defs>
                         </svg>
                         <div className="absolute inset-0 flex items-center justify-center">
                            <RefreshCcw className="w-12 h-12 text-white/80" />
                         </div>
                      </motion.div>
                   </div>
                </div>
                {/* Glow effect behind wheel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/30 rounded-full blur-[64px]" />
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-white"
             >
               <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-lg">
                 <PieChart className="w-4 h-4" />
                 <span>Free Assessment Tool</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                 Not Sure Where to Start? <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                   Discover Your Balance.
                 </span>
               </h2>
               <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                 Take our interactive <strong>Wheel of Life Assessment</strong> to visualize your current state across energy, sleep, stress, and productivity. Get a personalized score and find out exactly which area needs your attention most.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link to="/wheel-of-life">
                   <Button className="w-full sm:w-auto bg-white text-gray-900 hover:bg-orange-50 hover:text-orange-600 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-white/20 transition-all duration-300 font-bold">
                     Take the Assessment Free
                     <ArrowRight className="ml-2 w-5 h-5" />
                   </Button>
                 </Link>
               </div>
               <p className="mt-4 text-sm text-gray-400">
                 *Takes less than 2 minutes to complete
               </p>
             </motion.div>
           </div>
         </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Choose Your Path
            </h2>
            <p className="text-xl text-gray-600">
              Select the area you want to transform first
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={product.path}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200 group"
                  >
                    <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform?
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Join thousands who have already started their journey to a better life
            </p>
            <Link to="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
