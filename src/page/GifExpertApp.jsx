import { useState } from "react"
import { AddCategory, GifGrid } from "../component";

export const GifExpertApp = () => {

  // API KEY: Nd37WkEL7jW4I3O2HZuIMLGLk7LL7BJY
  const [categories, setCategories] = useState(['one puch man']);
  

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories}/>
      
      {
        categories.map(categorie => (
          <GifGrid key={categorie} categorie= {categorie} />
        ))
      }
    </>
  )
}
