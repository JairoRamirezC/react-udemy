import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en el archivo 08-imp-exp', () => {

  test('La funcion getHeroeById debe obtener los heroes por el id', () => {
    const id = 1;
    const responseHeore = heroes.find(heroe => heroe.id === id);
    const heroeById = getHeroeById(id);

    expect(heroeById).toStrictEqual(responseHeore);
  });

  test('La funcion getHeroeById debe retornar undefined cuando el ID no existe', () => {
    const id = 100;
    const heroeById = getHeroeById(id);

    expect(heroeById).toBeFalsy();
  });

  test('La funcion getHeroesByOwner debe obtener los heroes por el propietario', () => {
    // const owner = 'Marvel';
    const owner = 'DC';
    const expectHeroe = heroes.filter(heroe => heroe.owner === owner);
    // const expectHeroe = [
    //   { id: 2, name: 'Spiderman', owner: 'Marvel' },
    //   { id: 5, name: 'Wolverine', owner: 'Marvel' },
    //   { id: 6, name: 'DeadPool', owner: 'Marvel' }
    // ];
    const heroeByOwner = getHeroesByOwner(owner);

    expect(heroeByOwner).toStrictEqual(expectHeroe);
  });

  test('La funcion getHeroesByOwner debe retornar un arreglo vacio cuando el propietario no existe', () => {
    const owner = 'pepito';
    const heroeByOwner = getHeroesByOwner(owner);

    expect(heroeByOwner).toStrictEqual([]);
  });

  test('La cantidad de heroes de DC deben ser 3', () => {
    const owner = 'DC';
    const heroeByOwner = getHeroesByOwner(owner);

    expect(heroeByOwner.length).toBe(3);
  });

  test('La cantidad de heroes de MARVEL deben ser 3', () => {
    const owner = 'Marvel';
    const heroeByOwner = getHeroesByOwner(owner);

    expect(heroeByOwner.length).toBe(3);
  });
})