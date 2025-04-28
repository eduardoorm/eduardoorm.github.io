import React, { useEffect, useState } from 'react';
import './Photos.css'; // Reemplaza con la ruta correcta a tu archivo de estilos

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch('/data/photos.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPhotos(data.photos))
      .catch((error) => console.error('Error al cargar las fotos:', error));
  }, []);

  return (
    <section className='sectionPhotos'>
      <h2>Photos</h2>
      <section className='containerPhotos'>
        {photos.map((photo, index) => (
          <figure className='figurePhotos' key={index}>
            <img src={photo.src} alt={photo.alt} />
          </figure>
        ))}
      </section>
    </section>
  );
};

export default Photos;