import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductProcrastination = () => {
  const { toast } = useToast();

  const benefits = [
    'Break the procrastination cycle permanently',
    'Build momentum and take consistent action',
    'Overcome fear and self-doubt',
    'Develop powerful productivity habits',
    'Complete projects faster and better',
    'Achieve your goals with confidence'
  ];

  const handleCheckout = () => {
    toast({
      title: "🚧 Checkout Coming Soon!",
      description: "Stripe integration will be available soon. Stay tuned!",
    });
  };

  return (
    <>
      <Helmet>
        <title>How to Stop Procrastinating - Transform Life</title>
        <meta name="description" content="End procrastination and start taking action. Learn proven strategies to overcome delays and achieve your goals faster." />
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              How to Stop Procrastinating
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take action, build momentum, and achieve your goals without delay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-8 shadow-xl">
                <img alt="Focused person working productively on laptop" className="w-full h-96 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1693089090099-efda9edad256" />
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">(2,134 reviews)</span>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-gray-900">What You'll Get</h2>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="border-t pt-6 mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">$47</span>
                    <span className="text-xl text-gray-500 line-through">$97</span>
                  </div>
                  <p className="text-green-600 font-semibold">Save 50% - Limited Time Offer!</p>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Instant Access Now
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  30-day money-back guarantee
                </p>
              </div>
            </motion.div>
          </div>

          {/* Detailed Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">About This Program</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Procrastination isn't just about being lazy – it's a complex psychological pattern involving fear, perfectionism, and overwhelm. Our anti-procrastination system addresses the root causes and gives you practical tools to overcome delay and take consistent action.
              </p>
              <p className="mb-4">
                You'll learn the psychology behind procrastination, identify your personal triggers, and develop customized strategies to break the cycle. Discover how to build unstoppable momentum, overcome resistance, and make progress on your most important goals every single day.
              </p>
              <p>
                This program combines insights from behavioral psychology, neuroscience, and productivity research to create a comprehensive system for ending procrastination. Join thousands who have transformed from chronic procrastinators into action-takers and high achievers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProductProcrastination;
