import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en el archivo 07-deses-arr', () => {

  test('La funcion retornaArreglo debe retornar ABC y 123', () => {
    const firstData = 'ABC';
    const secondData = 123;

    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe(firstData);
    expect(numbers).toBe(secondData);

  });

  test('La funcion retornaArreglo debe retornar siempre un string y un numero', () => {
    const [letters, numbers] = retornaArreglo();
    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');
  })

})