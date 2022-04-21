let page: any = "2";
let pageNumber = page as string;
// pageNumber = 1;  // error

const someElement = document.getElementById('someElement') as HTMLInputElement;
// const someElement = document.querySelector('#someElement');      // incomplete
console.log('someElement', someElement);
// console.log('someElement', (someElement as any).value);     // not the correct way