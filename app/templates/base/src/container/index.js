import copyright from '../component/copyright'
import '../css/reset.css'
import '../css/app.css'

function init() {
  const app = document.querySelector('#app')
  const hello = document.createElement('h2')
  hello.innerHTML = 'hello world!'
  const img = document.createElement('img')
  app.appendChild(hello)
  app.appendChild(img)
  copyright()
}

export default init
