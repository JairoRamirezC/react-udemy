import { useState } from "react"

export const AddCategoryInput = ({onAddCategory}) => {

  const [search, setSearch] = useState('')

  const handleChangeInput = e => {
    const {value} = e.target
    setSearch(value)
  }

  const handleSubmitCategory = e => {
    e.preventDefault()
    if(search){
      onAddCategory(search)
      // setCategories(cat => [search, ...cat])
      setSearch('')
    }
  }

  return (
    <form onSubmit={handleSubmitCategory}>
      <input 
        type="text"
        placeholder="Busca tu anime"
        value={search}
        onChange={handleChangeInput}
      />

      <button type="submit">Agregar Categoria</button>

    </form>
  )
}
