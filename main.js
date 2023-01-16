const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const message = document.querySelector(".message")
const biscuit = document.querySelector("#img1")
const button = document.querySelector("button")

const textMessages = [
  'Procure acender uma vela ao invés de amaldiçoar a escuridão', 'Você é do tamanho do seu sonho.', 'A maior barreira para o sucesso é o medo do fracasso.', 'Motivação não é sinónimo de transformação, mas um passo em sua direção.', 'A vida trará coisas boas se tiver paciência.', 'A maior de todas as torres começa no solo.'
]

biscuit.addEventListener('click', newMessage);
button.addEventListener('click', toggleScreen);
document.addEventListener('keydown', function(e) {
  if(e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen()
  }
})

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function newMessage() {
  random = getRandom()
  message.innerText = textMessages[random]
  toggleScreen()
}

function getRandom () {
 return Math.round(Math.random() * 5)
}