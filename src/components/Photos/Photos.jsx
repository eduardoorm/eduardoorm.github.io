import React from 'react';
import './Photos.css'; // Reemplaza con la ruta correcta a tu archivo de estilos

const Photos = () => {
  return (
    <section className='sectionPhotos'>
      <h2>Fotos</h2>
      <section className='containerPhotos'>
        <figure className='figurePhotos'>
          <img src="./images/flutterschool.jpg" alt="Imagen 1" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/fotoFestIca.jpg" alt="Imagen 2" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/extendedica.jpg" alt="Imagen 3" />
        </figure>
        {/* Agrega más figuras según sea necesario */}
      </section>
    </section>
  );
};

export default Photos;