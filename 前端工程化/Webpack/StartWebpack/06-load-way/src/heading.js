import './heading.css'

export default () => {
    const element = document.createElement('h2')

    element.textContent = 'Hello World'
    element.classList.add('heading')
    element.addEventListener('click', () => {
        alert("Hello webpack")
    })
    return element;
}