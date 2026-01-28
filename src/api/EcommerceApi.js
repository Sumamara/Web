const currencyDefaults = {
  currency: 'USD',
  locale: 'en-US',
  currency_symbol: '$',
};

const products = [
  {
    id: 'energy-boost',
    title: 'Energy Reset Kit',
    subtitle: 'Daily rituals to restore focus and stamina.',
    description:
      '<p>Build sustainable energy with a simple daily system. Includes morning routines, nutrition tips, and recovery tactics.</p>',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        url:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      },
      {
        url:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    ribbon_text: 'Bestseller',
    purchasable: true,
    variants: [
      {
        id: 'energy-boost-standard',
        title: 'Standard',
        price_in_cents: 2900,
        sale_price_in_cents: 1900,
        price_formatted: '$29.00',
        sale_price_formatted: '$19.00',
        currency_info: currencyDefaults,
        manage_inventory: true,
        inventory_quantity: 32,
      },
    ],
  },
  {
    id: 'deep-sleep',
    title: 'Deep Sleep Blueprint',
    subtitle: 'A 14-day plan for deeper, faster sleep.',
    description:
      '<p>Reset your sleep rhythm with expert-guided protocols and calming routines designed for busy minds.</p>',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        url:
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    ribbon_text: 'New',
    purchasable: true,
    variants: [
      {
        id: 'deep-sleep-standard',
        title: 'Standard',
        price_in_cents: 3400,
        sale_price_in_cents: null,
        price_formatted: '$34.00',
        sale_price_formatted: null,
        currency_info: currencyDefaults,
        manage_inventory: true,
        inventory_quantity: 18,
      },
    ],
  },
  {
    id: 'stress-less',
    title: 'Stress Reset Guide',
    subtitle: 'Quick calm techniques for high-pressure days.',
    description:
      '<p>Learn breathwork, focus resets, and lifestyle shifts that help you recover quickly from stress.</p>',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        url:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    ribbon_text: null,
    purchasable: true,
    variants: [
      {
        id: 'stress-less-standard',
        title: 'Standard',
        price_in_cents: 2400,
        sale_price_in_cents: 1900,
        price_formatted: '$24.00',
        sale_price_formatted: '$19.00',
        currency_info: currencyDefaults,
        manage_inventory: false,
        inventory_quantity: 999,
      },
    ],
  },
  {
    id: 'focus-flow',
    title: 'Focus Flow Pack',
    subtitle: 'Beat procrastination with a clean plan.',
    description:
      '<p>Structured templates and prompts to build momentum and finish what matters.</p>',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    images: [
      {
        url:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    ribbon_text: null,
    purchasable: true,
    variants: [
      {
        id: 'focus-flow-standard',
        title: 'Standard',
        price_in_cents: 2100,
        sale_price_in_cents: null,
        price_formatted: '$21.00',
        sale_price_formatted: null,
        currency_info: currencyDefaults,
        manage_inventory: false,
        inventory_quantity: 999,
      },
    ],
  },
];

const formatPrice = (amountInCents, currencyInfo = currencyDefaults) => {
  const { locale, currency } = currencyInfo || currencyDefaults;
  const formatter = new Intl.NumberFormat(locale || 'en-US', {
    style: 'currency',
    currency: currency || 'USD',
  });
  return formatter.format((amountInCents || 0) / 100);
};

export const formatCurrency = (amountInCents, currencyInfo) =>
  formatPrice(amountInCents, currencyInfo);

export const getProducts = async () => {
  const normalizedProducts = products.map(product => ({
    ...product,
    variants: product.variants.map(variant => ({
      ...variant,
      price_formatted: formatPrice(variant.price_in_cents, variant.currency_info),
      sale_price_formatted: variant.sale_price_in_cents
        ? formatPrice(variant.sale_price_in_cents, variant.currency_info)
        : null,
    })),
  }));

  return { products: normalizedProducts };
};

export const getProduct = async (productId) => {
  const response = await getProducts();
  const product = response.products.find(item => item.id === productId);

  if (!product) {
    throw new Error('Product not found.');
  }

  return product;
};

export const getProductQuantities = async ({ product_ids: productIds } = {}) => {
  const response = await getProducts();
  const filteredProducts = productIds?.length
    ? response.products.filter(product => productIds.includes(product.id))
    : response.products;

  const variants = filteredProducts.flatMap(product =>
    product.variants.map(variant => ({
      id: variant.id,
      inventory_quantity: variant.inventory_quantity ?? 0,
    }))
  );

  return { variants };
};

export const initializeCheckout = async ({ successUrl, cancelUrl } = {}) => {
  return {
    url: successUrl || cancelUrl || '/',
  };
};
