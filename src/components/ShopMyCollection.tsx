import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Optional icons from react-icons

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
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.shopmy.us/api/Collections/${collectionId}`);
        const data = await response.json();
        setCollectionName(data.name.trim());
        setProducts(data.pins);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [collectionId]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-5 position-relative">
      {collectionName && (
        <a
          href={`https://shopmy.us/collections/${collectionId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none'}}
        >
          <h2
            className="text-2xl font-bold mb-3"
            style={{ 
                fontFamily: '"Julius Sans One"',
                color: 'white',
                marginLeft: '20px',
                fontSize: '1.3rem'
            }}
          >
            {collectionName}
          </h2>
        </a>
      )}

      {/* Arrows */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-3"
        style={{ zIndex: 10 }}
        onClick={() => scroll('left')}
      >
        <FaChevronLeft />
      </button>

      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-3"
        style={{ zIndex: 10 }}
        onClick={() => scroll('right')}
      >
        <FaChevronRight />
      </button>

      {/* Scrollable Row */}
      <div
        className="d-flex overflow-auto gap-3 py-2 px-2"
        ref={scrollContainerRef}
        style={{ }}
      >
        {products.map((product) => (
          <a
            key={product.id}
            href={product.affiliate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-decoration-none"
            style={{
              width: '200px',
              scrollSnapAlign: 'start',
            }}
          >
            <div className="bg-white p-2 rounded shadow-sm h-100">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid rounded mb-2"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <h6 className="text-dark" style={{ fontFamily: 'quicksand' }}>
                {product.title}
              </h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShopMyCollection;
