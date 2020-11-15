import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import List from './list.jsx'
import Menu from './menu.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        if(this.users.length % 3 == 0) this.end = parseInt(this.users.length / 3) // 페이지 수가 딱 떨어지는 경우
        else this.end = parseInt(this.users.length / 3) + 1 // 나머지가 있는 경우
    }

    render() {
        return (
            <BrowserRouter>
                <Link to="/list/1"><button>목록 보기</button></Link>
                <Route path="/list/:page" render={(props) => { // component가 아닌 render로 하면 재생성 막음
                    return <List
                        users={this.users}
                        page={props.match.params.page}
                        end={this.end}
                    />
                }}>
                </Route>
                <Route path="/list/:page" render={(props) => { // menu 출력
                    return <Menu
                        page={props.match.params.page}
                        end={this.end}
                        url={props.match.url}
                        history={props.history}
                    />
                }}>         
                </Route>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

// 해당되지 않지만 나중에 쓰일 수 있는 것들

// <Switch> // 위에 것이 해당하면 밑에 것들 실행하지 않고 종료
//     <Route path="/list/:page" component={List}></Route>
//     <Route path="/list/:page" component={Menu}></Route>
//     <Route path="/list/:page" render={()=>(<div>1</div>)}></Route> // render에 해당하는 컴포넌트 출력
//     <Route path="/list" render={()=>(<div>2</div>)}></Route>
// </Switch>

// Link to를 확장하여 경로 뿐만 아니라 데이터 보내기
// 넘겨준 state는 props.location.state를 통해 접근 할 수 있다.
// <Link to ={{
//     pathname : '/list/1',
//     state : {
//         data : 'data'
//     }
// }}></Link>