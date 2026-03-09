const divElem = document.querySelector("#showing");
 const htmlElem = document.querySelector(":root");

 

//  function showHile() {
//     divElem.classList.toggle("showing");
//  }
 
 const f = document.getElementById("foo");
 document.addEventListener("click", (e) => {
    f.style.transform = `translateY(${e.clientY - 10}px)`;
     f.style.transform += `translateX(${e.clientX - 10}px)`;
 });

 