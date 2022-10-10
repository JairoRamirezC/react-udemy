// import { useEffect, useState } from 'react'
// import { getDataApi } from './getApiGifs'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifItems } from './GifItems/GifItems';

export const Gridcards = ({categorie}) => {

  // const [images, setImages] = useState([]);

  // useEffect(() => {

  //   getDataApi(categorie)
  //     .then(res => setImages(res))
  
  // }, [])

  const {images, isLoading} = useFetchGifs(categorie);

  console.log(images, isLoading);

  return (
    <div>
      <h3>{categorie}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          images.map(image => (
            <GifItems 
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </div>
  )
}
