// YummiHairCollections.tsx
import React, { useEffect, useState } from 'react';
import ShopMyCollection from './ShopMyCollection';

interface Collection {
  id: number;
  name: string;
}

const YummiHairCollections: React.FC = () => {
  const [collectionIds, setCollectionIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchUserCollections = async () => {
      try {
        const res = await fetch('https://api.shopmy.us/api/Users/username/yummihair');
        const data = await res.json();
        const ids = data.user.collections.map((col: Collection) => col.id);
        console.log(ids)
        setCollectionIds(ids);
      } catch (error) {
        console.error('Failed to fetch user collections:', error);
      }
    };

    fetchUserCollections();
  }, []);

  return (
    <div style={{
        marginTop: '30px'
    }}>
      
      {collectionIds.map((id) => (
        <ShopMyCollection collectionId={id} />
      ))}
    </div>
  );
};

export default YummiHairCollections;
