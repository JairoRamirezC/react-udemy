import { useState } from "react"

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target?.value);
  }

  // const handleEnterInput = event => {
  //   if(event?.key !== 'Enter' || inputValue.trim().length <= 2) return;
  //   setCategories(category => [...category, inputValue]);
  //   setInputValue('');
  // }

  const onAddNewCategory = (event) => {
    event.preventDefault();
    if(inputValue?.trim().length <= 2) return;

    setCategories(category => {
      if(category === inputValue) return category;
      return [inputValue, ...category];
    });
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={onAddNewCategory}>
        <input 
          type="text" 
          placeholder = "Ingresa un nuevo gif"
          value={inputValue}
          onChange={onInputChange}
          // onKeyDown={handleEnterInput}
        />
        <button type="submit">Agregar Categoria</button>
      </form>
    </>
  )
}
