import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';

const Products = () => {
  return (
    <>
      <Helmet>
        <title>All Products - Transform Life</title>
        <meta name="description" content="Explore our complete collection of personal transformation tools and guides." />
      </Helmet>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Transformation Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the resources you need to upgrade your life, from energy and sleep to stress management.
            </p>
          </motion.div>
          
          <ProductsList />
        </div>
      </div>
    </>
  );
};

export default Products;
