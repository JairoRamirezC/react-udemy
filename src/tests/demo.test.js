describe('Pruebas en Demo.js', () => { 

  test('el msg2 debe ser igual al msg1', () => { 
    // inicializacion
    const msg1 = ' hola mundo';
  
    // estimulo
    const msg2 = ' hola mundo';
  
    // observar el comportamiento: se espera que X sea igual a Y
    expect(msg2).toBe(msg1);
  })
})