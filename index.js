let btn = document.getElementById('thumbs')
let count = document.getElementById('count')



btn.addEventListener('click', function handleClick(){
    btn.style.background = 'deeppink'
    btn.style.color = "white"
   
})


btn.addEventListener('click', function likes(){
    for(let num = 0; num < 1; num++ ){
      count.innerHTML = num
    }
})


let text = document.getElementById('fav')

text.addEventListener('click', function change(){
    text.innerHTML = "Added to favourites";
    text.style.background = "blue"
    text.style.color = "white"
})
// change()