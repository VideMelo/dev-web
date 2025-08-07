    function mostrarMensagem() {
      alert("Olá! Este é um exemplo simples de JavaScript.");
    }

const lebron = document.getElementById('lebronjames')

let len = 200

let ver = true
let hor = true

let x = 0
let y = 0

function move(att, even, pos, sen) {
  let dir = direction(even, pos, sen)
    if (dir) pos = pos + 1
    else pos = pos - 1
    lebron.style[att] = `${pos}px`
    return [pos, dir]
}

function direction(even, pos, sen) {
  let dir = sen
  if (pos == 0) dir = true
  if (pos + len == even) dir = false

  return dir
}

setInterval(() => {
  [x, ver] = move('top', window.innerHeight, x, ver)
}, 0)

setInterval(() => {
  [y, hor] = move('left', window.innerWidth, y, hor)
}, 0)

lebron.addEventListener('mouseover', (event) => {
  ver = !ver
  hor = !hor
})

lebron.addEventListener('mousedown', (event) => {

})