const dino = document.querySelector('.dino')
const scenery = document.querySelector('.scenery')
document.addEventListener('keypress', handleKeyUp)
let position = 0
let isJump = false

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    jump()
  }
}
// positionDino()
createCactus()
function jump() {
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval)
      // volta o dino pra posicao inicial
      let downInterval = setInterval(() => {
        if (position == 0) {
          clearInterval(downInterval)
        }
        else {
          position = 0
          dino.style.bottom = position + 'px';
        }
      }, 300)// tempo para ele voltar


    } else {
      // faz o dino pular 
      position += 150;
      dino.style.bottom = position + 'px';
    }
    

  }, 20)//tempo para pular
}
function createCactus() {
  let cactusPosition = 1000 
  let randomTime = Math.random() * 4000
  const cactus = document.createElement('div')
  cactus.classList.add('cactus')
  scenery.appendChild(cactus)

  cactus.style.left = cactusPosition + 'px'

  let rigthToLeft = setInterval(() => {

    if (cactusPosition < -60) {
      clearInterval(rigthToLeft)
      scenery.removeChild(cactus)
    }else if(cactusPosition > 0 && cactusPosition < 60 && position <60) {
      clearInterval(rigthToLeft)
      document.body.innerHTML = `<h1>Game over </h1>`
    }else{
      cactusPosition -= 10
      cactus.style.left = cactusPosition + 'px'
    }
  }, 20)
  setTimeout(createCactus,randomTime)
}
// function positionDino () {
//   let dinoPosition = 50
//   dino.style.left = dinoPosition + 'px'

//   let letToRigth =  setInterval(()=>{
//     dinoPosition +=0.5
//     dino.style.left = dinoPosition + 'px'

//   },30)

// }


