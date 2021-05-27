function createGrid() {
  let htmlElements = "";
  let containerGrid = Number(prompt("boxes per side?"));
  let boxWidth = 1/(containerGrid*1.16)*100;
  let boxHeight = 1/(containerGrid*1.16)*100;
     
  for (let i=0;i < containerGrid*containerGrid; i++) {htmlElements += '<div class="box" id="box" data-el="i"></div>';
  }
  
  let container = document.getElementById("container");
  
  container.innerHTML = htmlElements;
    
  const boxes = document.querySelectorAll('#box');
    
  boxes.forEach(el => el.addEventListener('mouseenter', event => { el.style.background='pink'; }
   ));
      
  boxes.forEach(el => el.setAttribute('style', `height: ${boxHeight}%; width: ${boxWidth}%`));
  }
  
  const btn = document.querySelector('#btn');
  
  btn.addEventListener('click', () => {
    createGrid();
    });  