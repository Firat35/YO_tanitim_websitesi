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

    arr[0].style.transform = "translateY(0)";
    arr[1].style.transform = "translateY(100%)";
    arr[2].style.transform = "translateY(-100%)";
    arr[3].style.transform = "translateY(100%)";

    
    await delay(2500);
    arr[0].style.transform = "translateY(-100%)";
    arr[1].style.transform = "translateY(0)";
    await delay(2500);
    arr[1].style.transform = "translateY(100%)";
    arr[2].style.transform = "translateY(0)";
    await delay(2500);
    arr[2].style.transform = "translateY(-100%)";
    arr[3].style.transform = "translateY(0)";
    await delay(2500);
    arr[3].style.transform = "translateY(100%)";
    arr[0].style.transform = "translateY(0)";
    for(let i= 0; i<4 ; i++) {
      el = arr.shift()
      arr.push(el);
    } 
    
  }
}
