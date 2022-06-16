(() => {
  let prices = [1, 2, 3, 4, 5, 'hola', true];

  /* Método Push para agregar un elemento al final del array */
  prices.push(6);
  console.log(prices); // [1,2,3,4,5,6]

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = [1, 'hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = ['as'];
  numbers.map((n) => n * 2);
})();
