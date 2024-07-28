const leftArr = document.getElementById("left-arrow");
const rightArr = document.getElementById("right-arrow");

const imgEl = document.querySelectorAll("#slide")


 const slide = document.getElementById("image")

 let num  = 0;

rightArr.addEventListener("click", () =>{
 if(num >= imgEl.length ){
     num = 0;
     console.log(`reverse`);
 }else{
        num++      
  slide.style.transform = `translateX(-${(num - 1 ) * 500}px)`
  console.log(`clicked`);
 }
        
})

leftArr.addEventListener("click", () =>{   

        num--
        slide.style.transform = `translateX(-${( num - 1) * 500}px)`
    
})
