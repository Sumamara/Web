import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, Check, Star, Battery, Brain, Activity, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductEnergy = () => {
  const { toast } = useToast();

  const benefits = [
    'Wake up feeling refreshed and energized',
    'Maintain consistent energy throughout the day',
    'Eliminate afternoon energy crashes',
    'Boost physical and mental performance',
    'Natural energy without stimulants',
    'Improve focus and productivity'
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
        <title>How to Have More Energy - Transform Life</title>
        <meta name="description" content="Discover proven strategies to boost your energy levels naturally. Wake up refreshed and maintain vitality all day long." />
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              How to Have More Energy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your daily energy levels with our comprehensive guide to sustainable vitality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 shadow-xl">
                <img alt="Person full of energy stretching in morning sunlight" className="w-full h-96 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1621085350555-2661583177e3" />
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
                  <span className="text-gray-600">(1,247 reviews)</span>
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
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Instant Access Now
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  30-day money-back guarantee
                </p>
              </div>
            </motion.div>
          </div>

          {/* About This Program - Redesigned & Translated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 p-8 md:p-12 shadow-xl border border-orange-100"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Revoluciona Tu Vitalidad
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                  Olvídate de la fatiga crónica. Descubre un sistema probado para desbloquear una energía ilimitada.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100/50 hover:border-orange-200 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-md text-white transform -rotate-3">
                    <Battery className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Energía Real, No Prestada</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deja de depender de la cafeína y los estimulantes artificiales. Aprende a activar las reservas naturales de tu cuerpo para una potencia que dura todo el día sin bajones.
                  </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100/50 hover:border-orange-200 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center mb-6 shadow-md text-white transform rotate-3">
                    <Brain className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Claridad Mental Total</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Combate la niebla mental. Nuestras estrategias de neurociencia aplicada optimizan tu enfoque, permitiéndote rendir al máximo nivel en tu trabajo y vida personal.
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100/50 hover:border-orange-200 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center mb-6 shadow-md text-white transform -rotate-3">
                    <Sun className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Ciencia de Alto Rendimiento</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No es magia, es fisiología. Utilizamos protocolos basados en evidencia sobre sueño, nutrición y recuperación usados por atletas de élite mundial.
                  </p>
                </motion.div>
              </div>

              <div className="mt-12 p-6 bg-white/60 rounded-2xl border border-orange-100 text-center">
                <div className="flex items-center justify-center gap-2 mb-2 text-orange-600 font-semibold">
                  <Activity className="w-5 h-5" />
                  <span>Para todos los estilos de vida</span>
                </div>
                <p className="text-lg text-gray-700 italic">
                  "Este programa está diseñado para profesionales ocupados, padres y atletas que se niegan a vivir a media potencia."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProductEnergy;
