document.querySelector('#company').innerHTML='Chewys bed and breakfast'
document.querySelector('#slogan').innerHTML = 'from a galaxy far far away'

const userName = prompt('enter name')
console.log(userName)

function myFunc (userName) {
   return alert(`hello ${userName}`)
}

window.onload = myFunc(userName)