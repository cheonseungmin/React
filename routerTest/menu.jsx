import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    let inputRef = useRef()
    let page = Number(props.page)
    let end = props.end
    let url = props.url
    let down = url.slice(0, url.lastIndexOf('/') + 1) + ((0 < page - 1)?(page - 1):(1))
    let up = url.slice(0, url.lastIndexOf('/') + 1) + ((page + 1 <= end)?(page + 1):(end))

    const pageMove = () => {
        let move = props.url // localhost:8080/list/1
        let p = inputRef.current.value // input 값을 불러옴
        if (p != '') // 비어있으면 실행 안됨
        if (1 <= p && p <= end) // 1과 end 사이의 값만 가능
            move = move.slice(0, move.lastIndexOf('/') + 1) + inputRef.current.value // localhost:8080/list/ + page
        props.history.push(move) // Link to와 같은 의미
    }

    return (
        <div>
            <Link to={down}>{'<'}</Link>
            <span>{`${page} / ${end}`}</span>
            <Link to={up}>{'>'}</Link>
            <div>
                <input ref={inputRef} type="text"></input> {/*input에 inputRef 값이 들어감*/}
                <button onClick={pageMove}>페이지 이동</button>
            </div>
        </div>
    )
}

export default Menu