function menu_toggle() {
  const menu = document.querySelector("ul");
  menu.classList.toggle("visible");
}

slide();



async function slide() {
  let x = document.getElementsByClassName("mySlides");
  var arr = [...x];
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let el;

  while (true) {
    for(let i=0; i<16; i+=4) {
      arr[i].style.transform = "translateY(0)";
      arr[i+1].style.transform = "translateY(100%)";
      arr[i+2].style.transform = "translateY(-100%)";
      arr[i+3].style.transform = "translateY(100%)";
    }
    await delay(2500);
    for(let i=0; i<16; i+=4) {
      arr[i].style.transform = "translateY(-100%)";
      arr[i+1].style.transform = "translateY(0)";
    }   
    await delay(2500);
    for(let i=0; i<16; i+=4) {
      arr[i+1].style.transform = "translateY(100%)";
      arr[i+2].style.transform = "translateY(0)";
    }       
    await delay(2500);
    for(let i=0; i<16; i+=4) {
      arr[i+2].style.transform = "translateY(-100%)";
      arr[i+3].style.transform = "translateY(0)";
    }   
    
    await delay(2500);
    for(let i=0; i<16; i+=4) {
      arr[i+3].style.transform = "translateY(100%)";
      arr[i].style.transform = "translateY(0)";
    }   
    
 
    // for(let i= 0; i<4 ; i++) {
    //   el = arr.shift()
    //   arr.push(el);
    // } 
    
  }
}
