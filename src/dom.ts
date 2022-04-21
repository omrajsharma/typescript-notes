let page: any = "2";
let pageNumber = page as string;
// pageNumber = 1;  // error

const someElement = document.getElementById('someElement') as HTMLInputElement;
// const someElement = document.querySelector('#someElement');      // incomplete
console.log('someElement', someElement);
// console.log('someElement', (someElement as any).value);     // not the correct way

// LISTENERS
const someEle = document.querySelector(".foo");

someEle.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log('blur', target.value);
})