import Title from '../components/Title';
import React, { useEffect, useState } from 'react';
import './gallery.css';

interface GalleryProps {
  folderId: string;
  apiKey: string;
}

const Gallery: React.FC<GalleryProps> = ({ folderId, apiKey }) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
    const fetchImages = async () => {
        try {
        const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents and mimeType contains 'image/'&key=${apiKey}&fields=files(id,name,webContentLink)`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.files) {
            const imageLinks = data.files
            .slice(0, 4)
            .map((file: any) => file.webContentLink.replace("&export=download", "&export=view"));
            setImageUrls(imageLinks);
        }
        } catch (error) {
        console.error('Error fetching Google Drive images:', error);
        }
    };

    fetchImages();
}, [folderId, apiKey]);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Title name="Gallery" cursiveName="hair" />

      <div className="grid-container">
        {imageUrls.map((url, idx) => (
          <div key={idx} className="grid-item">
            <img src={url} alt={`Drive Image ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
