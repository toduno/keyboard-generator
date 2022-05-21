let keyName = document.querySelector('.key-box')
let keyCode = document.querySelector('.key-code')
    

keyName.textContent = 'Press any keyboard key'
document.body.addEventListener('keydown', e => {

    
    let keyMessage = `<div>You pressed <span class='green'>${e.key}</span></div>`
    keyName.innerHTML = keyMessage
    let utterKey = new SpeechSynthesisUtterance(keyMessage)
    speechSynthesis.speak(utterKey)

    keyCode.style.display = 'block'
    keyCode.textContent = `${e.keyCode}`
    let utterKeyCode = new SpeechSynthesisUtterance(e.keyCode)
    speechSynthesis.speak(utterKeyCode)
})