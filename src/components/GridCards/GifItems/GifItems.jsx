
export const GifItems = ({images, title}) => {

  return (
    <div className="card">
      <img src={images} alt={title} />
      <p>{title}</p>
    </ div>
  )
}
