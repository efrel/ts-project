(() => {
  let productTitle = "A Book of JavaScript";
  // productTitle = null
  // productTitle = () => {}
  // productTitle 123

  productTitle = "A Book of TypeScript";
  console.log("productTitle", productTitle);

  const productDescription = "A Book of TypeScript";
  console.log("productDescription", productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log("summary", summary);

  const myString: string = "Hello World";
})();
