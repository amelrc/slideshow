


let arr = ['0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png'];
let index = 0;
let image = document.getElementById('image');

setInterval(function(){
    if(index === arr.length){
            index = 0
    }
}, 2000)

function previous(){
    image.setAttribute('src', arr[index--])
    if(index < 0){index = 12}
}

function next(){
    image.setAttribute('src', arr[index++])
    if(index > 12){index = 0}
}

document.addEventListener('keydown', (event) => {
    const key = event.keyCode;
    const left = key == '37';
    const right = key == '39';
    return left ? previous() 
         : right ? next()
         : '';
  });




