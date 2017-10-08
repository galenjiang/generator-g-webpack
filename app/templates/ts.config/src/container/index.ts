import copyright from '../components/copyright'
import '../css/reset.css'
import '../css/app.css'

function init() {
  const app = document.querySelector('#app') as HTMLElement
  const hello = document.createElement('h2')
  hello.innerHTML = 'hello world!'
  const img = document.createElement('img')
  app.appendChild(hello)
  app.appendChild(img)
  copyright()
}

export default init
