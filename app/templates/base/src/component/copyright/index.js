import './style.css'

function createCopyright() {
  const app = document.querySelector('#app')
  const p = document.createElement('p')
  p.innerHTML = 'copyright@galen'
  p.classList.add('copyright')
  app.appendChild(p)
}
export default createCopyright
