import { useLayoutEffect, useState } from "react";
import ApiGifs from "../helpers/ApiGifs";

export const useFetchGifs = (categorie) => {

  const [dataGifs, setDataGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState('');
  
  useLayoutEffect(() => {
    ApiGifs(categorie)
      .then(resp => {
        setDataGifs(resp);
        setIsLoading(false);
      })
      .catch(setIsError)
  }, [categorie])

  return {
    data: dataGifs,
    loading: isLoading,
    error: isError
  }
}
