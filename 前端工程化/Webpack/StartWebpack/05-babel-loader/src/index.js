import createHeading from "./heading.js";
import './main.css'
import icon from './icon.png'

const heading = createHeading()
document.body.appendChild(heading)

const image = new Image()
image.src = icon
image.style = 'width: 100px; height: 100px'
document.body.appendChild(image)