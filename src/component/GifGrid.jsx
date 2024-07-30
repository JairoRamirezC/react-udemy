import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({categorie}) => {
  const {data, loading, error} = useFetchGifs(categorie);
  

  return (
    <>
      <h1>{categorie}</h1>
      <div className="card-grid">
        {
          loading ?
            <p>Cargando...</p>
          :
            data.map(dataGif => (
              <div className="card" key={dataGif.id}>
                <img src={dataGif.urlImage} alt="" />
                <p>{dataGif.title}</p>
              </div>
            ))
        }
        {error && <p>Ocurrio un error en la data</p>}
      </div>
    </>
  )
}
