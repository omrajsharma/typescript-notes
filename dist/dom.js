var page = "2";
var pageNumber = page;
// pageNumber = 1;  // error
var someElement = document.getElementById('someElement');
// const someElement = document.querySelector('#someElement');      // incomplete
console.log('someElement', someElement);
// console.log('someElement', (someElement as any).value);     // not the correct way
// LISTENERS
var someEle = document.querySelector(".foo");
someEle.addEventListener("blur", function (event) {
    var target = event.target;
    console.log('blur', target.value);
});
