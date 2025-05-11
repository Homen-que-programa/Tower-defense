const canvas = document.getElementById('canvas')

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

window.addEventListener('resize', resizeCanvas)
resizeCanvas()