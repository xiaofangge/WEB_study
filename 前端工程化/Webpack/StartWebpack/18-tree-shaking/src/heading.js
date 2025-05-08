export const Button = () => {
    return document.createElement('button')
    console.log("button 创建了")
}

export const Link = () => {
    return document.createElement('a')
}

export const Heading = h => {
    return document.createElement(h + 'level')
}