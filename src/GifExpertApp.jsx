import { useState } from 'react';
import { AddCategoryInput, Gridcards } from './components'
// import { AddCategoryInput } from './components/AddCategoryInput';
// import { Gridcards } from './components/GridCards/Gridcards';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = newCategory => {
    // setCategories([...categories, 'Valorant']);
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategoryInput 
        // setCategories = {setCategories}
        onAddCategory = {onAddCategory}
        // handleSubmitCategory = {handleSubmitCategory}
      />

      <ol>
        {
          categories.map((categorie) => (
            <Gridcards 
              // key={index}
              key={categorie}
              categorie = {categorie}
            />
          ))
        }
      </ol>
    </>
  )
}
