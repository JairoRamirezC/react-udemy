import { useEffect, useState } from "react";
import { getDataApi } from "../components/GridCards/getApiGifs";

export const useFetchGifs = (categorie) => {
  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    getDataApi(categorie)
      .then(res => {
        setImages(res)
        setIsLoading(false)
      })
  
  }, [])

  return{
    images,
    isLoading
  }
}
