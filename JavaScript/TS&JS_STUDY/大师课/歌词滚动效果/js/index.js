/**
 * 解析歌词字符串
 * 得到一个歌词对象的数组
 * 每个歌词对象：{time: 时间，words: 歌词}
 */
function parseLrc() {
    const lrcArr = lrc.split('\n');
    const map = new Map();
    for (let [index, item] of lrcArr.entries()) {
        const [timeStr, words] = item.split(']'); // 解构赋值
        const time = parseTime(timeStr.slice(1));
        map.set(time, { time, words });
    }
    return Array.from(map.values());
}



/**
 * 将一个时间字符串解析为数字（秒）
 * @param {String} timeStr 
 */
function parseTime(timeStr) {
    const [minutesPart, secondsPart] = timeStr.split(':');
    return +minutesPart * 60 + +secondsPart;
}
const parsedData = parseLrc();

// 获取需要的dom
const doms =  {
    audo: document.querySelector('audio'),
    ulDom: document.querySelector('.container ul'),
    container: document.querySelector('.container')
}

/**
 * 计算出在当前播放器播放到第几秒的情况下
 * lrcData数组中，应该高亮显示的歌词下标
 * 如果没有任何一句歌词需要显示，则得到-1
 */
function findIndex(){
    // 播放器当前时间
    const currentTime = doms.audo.currentTime;
    // 遍历歌词数组，找到当前时间应该高亮显示的歌词下标
    for (let [index, item] of parsedData.entries()) {
        if (currentTime < item.time) {
            return index - 1;
        }
    }
    // 找遍了都没找到(说明播放到最后一句)， 
    return parsedData.length - 1;
}


// 界面: 创建歌词元素li
function createLrcItem() {
    const fragment = document.createDocumentFragment();
    for (let [index, item] of parsedData.entries()) {
        const li = document.createElement('li');
        li.textContent = `${item.words}`;
        fragment.appendChild(li);
    }
    doms.ulDom.appendChild(fragment);
}
createLrcItem();

/**容器高度 */
const containerHeight = doms.container.clientHeight;
const liHeight = doms.ulDom.children[0].clientHeight;
// 最大偏移量
const maxOffset = doms.ulDom.clientHeight - containerHeight;

/*
 * 设置ul元素的偏移量
 */
function setOffset() {
    let index = findIndex();
    let offset = liHeight * index + liHeight / 2 - containerHeight / 2;
    if (offset < 0) {
        offset = 0;
    }
    
    doms.ulDom.style.transform = `translateY(-${offset}px)`;
    // 去掉之间的active样式
    let activeLi = doms.ulDom.querySelector('.active');
    if (activeLi) {
        activeLi.classList.remove('active');
    }
    // 高亮显示
    activeLi = doms.ulDom.children[index]
    if (activeLi) {
        activeLi.classList.add('active');
    }
}
// 时间改变事件
doms.audo.ontimeupdate = setOffset;