import axios from 'axios'
import classnames from 'classnames'
import dayjs from 'dayjs'
import _ from 'lodash'
import { useEffect, useRef, useState } from "react"
import { v4 as UUIDV4 } from 'uuid'
import './App.scss'
import avatar from './images/bozai.png'
import avatar2 from './images/img-02.jpg'
import avatar3 from './images/img-03.png'
import avatar1 from './images/img-10.jpg'

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const defaultList = [
  {
    // 评论id
    rpid: 3,
    // 用户信息
    user: {
      uid: '13258165',
      avatar: avatar2,
      uname: '周杰伦',
    },
    // 评论内容
    content: '哎哟，不错哦',
    // 评论时间
    ctime: '10-18 08:15',
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: '36080105',
      avatar: avatar3,
      uname: '许嵩',
    },
    content: '我寻你千百度 日出到迟暮',
    ctime: '11-13 11:29',
    like: 188,
  },
  {
    rpid: 1,
    user: {
      uid: '30009257',
      avatar: avatar1,
      uname: '黑马前端',
    },
    content: '学前端就来黑马',
    ctime: '10-19 09:00',
    like: 66,
  },
]
// 当前登录用户信息
const user = {
  // 用户id
  uid: '30009257',
  // 用户头像
  avatar,
  // 用户昵称
  uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
  { type: 'hot', text: '最热' },
  { type: 'time', text: '最新' },
]

function formatDate(timestamp, formater) {
  const date = new Date();
  date.setTime(parseInt(timestamp));
  formater = (formater != null) ? formater : 'yyyy-MM-dd hh:mm';
  let ptype=Date.prototype;
  ptype.Format = function (fmt) {
    const o = {
      'M+': this.getMonth() + 1, // 月
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    };

    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${this.getFullYear() }`).substr(4 - RegExp.$1.length));
    for (const k in o) {
      if (new RegExp(`(${ k })`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
          (o[k]) : ((`00${ o[k]}`).substr((`${ o[k]}`).length)));
      }
    }
    return fmt;
  };
  return date.Format(formater);
}

// 封装请求数据Hook
function useGetCommentList() {
  const [commentList, setCommentList] = useState([])
  // 页面进入时触发
  useEffect(() => {
    const getCommentList = async () => {
      const res = await axios.get('http://localhost:3004/data')
      res.data.forEach(item => {
        if (item.rpid === 3) {
          item.user.avatar = avatar2
        }
        if (item.rpid === 2) {
          item.user.avatar = avatar3
        }
      })
      setCommentList(res.data)
    }
    getCommentList()
   
  }, [])
  return {  
    commentList,
    setCommentList
  }
}

// 封装子组件
const Item = ({item, onDel}) => {
  return <div className="reply-item">
    {/* 头像 */}
    <div className="root-reply-avatar">
      <div className="bili-avatar">
        <img
          className="bili-avatar-img"
          alt=""
          src={item.user.avatar}
        />
      </div>
    </div>
    <div className="content-wrap">
      <div className="user-info">
        <div className="user-name">{item.user.uname}</div>
      </div>
      {/* 评论内容 */}
      <div className="root-reply">
        <span className="reply-content">{item.content}</span>
        <div className="reply-info">
          {/* 评论时间 */}
          <span className="reply-time">{item.ctime}</span>
          {/* 评论数量 */}
          <span className="reply-time">点赞数:{item.like}</span>
          <span onClick={() => onDel(item.rpid)} className="delete-btn">
            删除
          </span>
        </div>
      </div>
    </div>
  </div>
}


const App = () => {
  // const [commentList, setCommentList] = useState(defaultList)

  const commentInputRef = useRef(null)
  const {commentList, setCommentList} = useGetCommentList();

  useEffect(() => {
    handleTabChange("hot")
    commentInputRef.current.focus()
  }, [])

  // 删除评论
  const handleCommentDelete = (rpId) => {
    setCommentList(commentList.filter(com => com.rpid !== rpId))
  }

  const [type, setType] = useState("hot")
  const handleTabChange = (type_) => {
    setType(type_)
    if (type_ === 'hot') {
      // 按点赞数倒序排序
      setCommentList(_.orderBy(commentList, 'like', 'desc'))
    } else if (type_ === 'time') {
      // 按时间倒序排序
      setCommentList(_.orderBy(commentList, 'ctime', 'desc'))
    }
  }


  // 发布评论
  const [comment, setComment] = useState("");
  const handleCommentPublish = () => {
    
    const newCommentList = [
      ...commentList,
      ...[{
        rpid: UUIDV4() + Reflect.apply(Math.max, null, commentList.map(item => item.rpid)) + 1, // 随机ID
        user: {
          uid: user.uid,
          avatar: user.avatar,
          uname: user.uname,
        },
        content: comment,
        ctime: dayjs(new Date()).format("YYYY-MM-DD hh:mm:ss"),
        like: 0,
      }]
    ]
    console.log("newCommentList => ", newCommentList)
    setCommentList(newCommentList)
    // 清空input
    setComment('')
    // 重新聚焦
    commentInputRef.current.focus()
  }

  return (
    <div className="app">
      {/* 导航 Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            {/* 评论数量 */}
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            {/* 高亮类名： active */}
            {
              tabs.map(item => (
                <span key={item.type} onClick={() => handleTabChange(item.type)}
                  // className={`nav-item ${type === item.type && 'active'}`}
                  className={classnames("nav-item", { active: type === item.type })}
                >{item.text}</span>
              ))
            }
          </li>
        </ul>
      </div>
      <div className="reply-wrap">
        {/* 发表评论 */}
        <div className="box-normal">
          {/* 当前用户头像 */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* 评论框 */}
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
              value={comment}
              ref={commentInputRef}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCommentPublish()
                }
              }}
            />
            {/* 发布按钮 */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handleCommentPublish}>发布</div>
            </div>
          </div>
        </div>
        {/* 评论列表 */}
        <div className="reply-list">
          {
            commentList.map(item => <Item key={item.rpId} item={item} onDel={handleCommentDelete}></Item>)
          }
        </div>
      </div>
    </div>
  )
}

export default App