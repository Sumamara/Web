import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductStress = () => {
  const { toast } = useToast();

  const benefits = [
    'Reduce anxiety and overwhelm instantly',
    'Develop emotional resilience and calm',
    'Master proven stress-relief techniques',
    'Improve mental clarity and focus',
    'Build sustainable stress management habits',
    'Enhance overall wellbeing and happiness'
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
        <title>How to Stop Being Stressed - Transform Life</title>
        <meta name="description" content="Discover effective strategies to reduce stress and anxiety. Build resilience and find calm in your daily life with proven techniques." />
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              How to Stop Being Stressed
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find peace and calm in your life with proven stress-management techniques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 shadow-xl">
                <img alt="Person meditating in peaceful natural setting" className="w-full h-96 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1606663485553-432d79af0620" />
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
                  <span className="text-gray-600">(3,456 reviews)</span>
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
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                Chronic stress is one of the biggest health challenges of our time. It affects your physical health, mental clarity, relationships, and overall quality of life. Our comprehensive stress management program gives you the tools to break free from the cycle of stress and anxiety.
              </p>
              <p className="mb-4">
                Through evidence-based techniques including mindfulness, breathing exercises, cognitive reframing, and lifestyle optimization, you'll learn to respond to life's challenges with calm and confidence rather than stress and overwhelm.
              </p>
              <p>
                This program has been developed by combining insights from neuroscience, psychology, and ancient wisdom traditions. You'll gain practical skills you can use immediately to reduce stress, build resilience, and create lasting inner peace.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProductStress;
