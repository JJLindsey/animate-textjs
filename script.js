const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Coding to Learn, Learning to Code!'

//where in text - index
let idx = 1
let speed = 300 / speedEl.value 

typeText()

function typeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }

    setTimeout(typeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)