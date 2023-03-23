let btns = document.querySelectorAll('.btn')
let count = 0
const value = document.getElementById('value')

btns.forEach(function(btn){
btn.addEventListener('click', function(e){
const classNames = e.currentTarget.classList
if(classNames.contains('minus')){
    count--
    value.textContent = count;
}
else if(classNames.contains('plus')){
    count ++
    value.textContent = count
}
else {
    count = 0
}

if(count>0){
    value.style.color = 'green'
}
if(count < 0){
    value.style.color = 'red'
}
value.textContent = count
})
})