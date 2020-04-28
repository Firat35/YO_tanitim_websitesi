function menu_toggle() {
  const menu = document.querySelector("ul");
  menu.classList.toggle("visible");
}

slide();



async function slide() {
  let x = document.getElementsByClassName("mySlides");
  var arr = [...x];
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  console.log(arr)

  while (true) {
    for(let i=0; i<24; i+=6) {
      arr[i].style.transform = "translateY(0)";
      arr[i+1].style.transform = "translateY(100%)";
      arr[i+2].style.transform = "translateY(-100%)";
      arr[i+3].style.transform = "translateY(100%)";
      arr[i+4].style.transform = "translateY(-100%)";
      arr[i+5].style.transform = "translateY(100%)";
    }
    await delay(2500);
    for(let i=0; i<24; i+=6) {
      arr[i].style.transform = "translateY(-100%)";
      arr[i+1].style.transform = "translateY(0)";
    }   
    await delay(2500);
    for(let i=0; i<24; i+=6) {
      arr[i+1].style.transform = "translateY(100%)";
      arr[i+2].style.transform = "translateY(0)";
    }       
    await delay(2500);
    for(let i=0; i<24; i+=6) {
      arr[i+2].style.transform = "translateY(-100%)";
      arr[i+3].style.transform = "translateY(0)";
    }   
    
    await delay(2500);
    for(let i=0; i<24; i+=6) {
      arr[i+3].style.transform = "translateY(100%)";
      arr[i+4].style.transform = "translateY(0)";
    } 
    
    await delay(2500);
    for(let i=0; i<24; i+=6) {
      arr[i+4].style.transform = "translateY(-100%)";
      arr[i+5].style.transform = "translateY(0)";     
    }
    await delay(2500);
  }
}
