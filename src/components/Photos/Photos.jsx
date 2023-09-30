import React from 'react';
import './Photos.css'; // Reemplaza con la ruta correcta a tu archivo de estilos

const Photos = () => {
  return (
    <section className='sectionPhotos'>
      <h2>Photos</h2>
      <section className='containerPhotos'>
        <figure className='figurePhotos'>
          <img src="./images/flutterschool.jpg" alt="Imagen 1" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/fotoFestIca.jpg" alt="Imagen 2" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/extendedSanLuis.jpg" alt="Imagen 10" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/fotoPablo.jpeg" alt="Imagen 5" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/extendedica.jpg" alt="Imagen 3" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/speakerUtpPiura.jpeg" alt="Imagen 6" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/toulouseJam.jpeg" alt="Imagen 7" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/reunionOpen.jpg" alt="Imagen 9" />
        </figure>
        <figure className='figurePhotos'>
          <img src="./images/gdgOpen.jpeg" alt="Imagen 8" />
        </figure>

        {/* Agrega más figuras según sea necesario */}
      </section>
    </section>
  );
};

export default Photos;