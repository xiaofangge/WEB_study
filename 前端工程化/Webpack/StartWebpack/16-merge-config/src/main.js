import createEditor from './editor'
import background from './better.png'
import './global.css'

const editor = createEditor()
document.body.appendChild(editor)

const img = new Image()
img.src = background
document.body.appendChild(img)


// ==== 一下用于处理 HMR，与业务无关 ======
// console.log(createEditor)
if (module.hot) {
    let lastEditor = editor;
    module.hot.accept('./editor.js', () => {
        // console.log("editor 模块更新了，需要在这里手动处理热替换逻辑")
        // console.log(createEditor)
        const editorContent = lastEditor.innerHTML
        document.body.removeChild(lastEditor)
        const newEdit = createEditor()
        newEdit.innerHTML = editorContent
        document.body.appendChild(newEdit)
        lastEditor = newEdit;
    })

    module.hot.accept('./better.png', () => {
        img.src = background;
        console.log(background)
    })
}
