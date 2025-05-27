import React, { useEffect, useState } from 'react';

interface Product {
  id: string;
  title: string;
  image: string;
  affiliate_link: string;
}

interface ShopMyCollectionProps {
  collectionId: number;
}


const ShopMyCollection: React.FC<ShopMyCollectionProps> = ({ collectionId }) => {
  const [products, setProducts] = useState<Product[]>([]);
   const [collectionName, setCollectionName] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.shopmy.us/api/Collections/${collectionId}`);
        const data = await response.json();
        setCollectionName(data.name.trim()); // 👈 removes \n or spaces
        setProducts(data.pins); // 👈 Grab only the 'pins' array
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
         {/* {collectionName && 
            <a href="https://shopmy.us/collections/${collectionId}">
                <h2 className="text-2xl font-bold mb-4">{collectionName}</h2>
            </a>
        } */}
            <div className="product-grid">
            {products.map((product) => (
                <a
                key={product.id}
                href={product.affiliate_link}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card"
                >
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                    <h4>{product.title}</h4>
                </div>
                </a>
            ))}
        </div>
     </div>
  );
};

export default ShopMyCollection;
