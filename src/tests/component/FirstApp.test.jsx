import React from 'react';
import { render } from "@testing-library/react"
import { FirstApp } from "../../component"


describe('Pruebas en el componente FirstApp', () => {

  // test('El componente FirstApp debe hacer match con el snapshot', () => {
  //   const {container} = render(<FirstApp title='Prueba' name='Si como no'/>);
  //   expect(container).toMatchSnapshot();
  // })

  test('El componente FirstApp debe mostrar el titulo en una etiqueta H1', () => {
    const title = 'Prueba';
    const {container, getByText} = render(<FirstApp title={title} name='Si como no'/>);
    expect(getByText(title)).toBeTruthy();
  });

  test('El componente FirstApp debe contener el titulo Probando-title', () => {
    const title= 'Probando-title';
    const {getByTestId} = render(<FirstApp title={title} name='si como no'/>);
    // expect(getByTestId('text-title').innerHTML).toHaveTextContent('title');
    expect(getByTestId('text-title')).toBeTruthy();
    expect(getByTestId('text-title').innerHTML).toContain(title);//* toContain = Sin importar los espacios que tenga al principio o al final del texto, identifica el valor
    expect(getByTestId('text-title').textContent).toBe(title);
    expect(getByTestId('text-title').tagName).toBe('H1');
  })

  test('El componente FirstApp debe identificar la cantidad de nombres igual a 3', () => {
    const name= 'Federico Lopez'
    const {getAllByText} = render(
      <FirstApp title='cualquier cosa' name={name} />
    );
    expect(getAllByText(name).length).toBe(3);
    expect(getAllByText(name)).toHaveLength(3);
  });

})