import createHeading from "./heading.js";
import './main.css'
import icon from './icon.png'

const heading = createHeading()
document.body.appendChild(heading)

const image = new Image()
image.src = icon
document.body.appendChild(image)

import footerHtml from './better.html'
document.writeln(footerHtml)