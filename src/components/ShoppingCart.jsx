import React, { useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart as ShoppingCartIcon, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { initializeCheckout } from '@/api/EcommerceApi';
import { useToast } from '@/components/ui/use-toast';

const ShoppingCart = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleCheckout = useCallback(async () => {
    if (cartItems.length === 0) {
      toast({
        title: 'Your cart is empty',
        description: 'Add some products to your cart before checking out.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const items = cartItems.map(item => ({
        variant_id: item.variant.id,
        quantity: item.quantity,
      }));

      const successUrl = `${window.location.origin}/success`;
      const cancelUrl = window.location.href;

      const { url } = await initializeCheckout({ items, successUrl, cancelUrl });

      clearCart();
      window.location.href = url;
    } catch (error) {
      toast({
        title: 'Checkout Error',
        description: 'There was a problem initializing checkout. Please try again.',
        variant: 'destructive',
      });
    }
  }, [cartItems, clearCart, toast]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col border-l border-orange-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="w-5 h-5 text-orange-600" />
                <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
              </div>
              <Button onClick={onClose} variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5 text-gray-500" />
              </Button>
            </div>

            <div className="flex-grow p-6 overflow-y-auto space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center text-gray-400 h-full flex flex-col items-center justify-center">
                  <div className="bg-orange-50 p-4 rounded-full mb-4">
                    <ShoppingCartIcon size={48} className="text-orange-200" />
                  </div>
                  <p className="text-lg font-medium text-gray-600">Your cart is empty</p>
                  <p className="text-sm text-gray-400">Looks like you haven't added anything yet.</p>
                  <Button onClick={onClose} variant="link" className="text-orange-600 mt-4">
                    Start Shopping
                  </Button>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.variant.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-100 transition-colors">
                    <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-gray-200">
                      <img src={item.product.image} alt={item.product.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 line-clamp-1">{item.product.title}</h3>
                        <p className="text-sm text-gray-500">{item.variant.title}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold text-orange-600">
                          {item.variant.sale_price_formatted || item.variant.price_formatted}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm h-8">
                            <button 
                              onClick={() => updateQuantity(item.variant.id, Math.max(1, item.quantity - 1))} 
                              className="px-2 h-full hover:bg-gray-50 text-gray-600 rounded-l-lg transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-sm font-medium text-gray-900 min-w-[1.5rem] text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.variant.id, item.quantity + 1)} 
                              className="px-2 h-full hover:bg-gray-50 text-gray-600 rounded-r-lg transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.variant.id)} 
                            className="text-red-400 hover:text-red-600 p-1 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-gray-600">Total</span>
                  <span className="text-3xl font-bold text-gray-900">{getCartTotal()}</span>
                </div>
                <Button 
                  onClick={handleCheckout} 
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all"
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
