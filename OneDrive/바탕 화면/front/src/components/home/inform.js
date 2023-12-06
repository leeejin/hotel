import { React, Component } from "react";
import { Container, Card, Button, Form, Table } from 'react-bootstrap';
//아메시스트 : #9966CC 밝은 레드오렌지 : #ffb7b3
import image from '../images/design.png';

export default class InformPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <Container className="component">
                <h5>개발 과정</h5>
                <Table>
                    <tbody>
                        <tr>
                            <th>~2023-11 중순</th>
                            <td>react.js로 웹페이지 디자인</td>
                        </tr>
                        <tr>
                            <th>~2023-12-03</th>
                            <td>MySql이랑 node.js, react 연동 시도</td>
                        </tr>
                        <tr>
                            <th>2023-12-04</th>
                            <td>
                                <p>1.  MySql이랑 node.js, react 연동 성공</p>
                                <p>2. 데이터 부르고 나타내기 GET</p>
                            </td>
                        </tr>
                        <tr>
                            <th>2023-12-05</th>
                            <td>
                                <p>1. 데이터 수정하기 UPDATE, POST,</p>
                                <p>2. 검색창 기능</p>
                            </td>
                        </tr>
                        <tr>
                            <th>2023-12-06</th>
                            <td>회원가입</td>
                        </tr>
                        <tr>
                            <th>예정</th>
                            <td>
                                <p>1. 조건부 dataFiltering만들어야함. 가격순, 가나다순</p>
                                <p>2. 로그인/로그아웃</p>
                                <p>3. 로그인 되면 DB테이블 다시 만들어야함...</p>
                                <p>4. 잡다한거 계속 수정,, 안되는 오류같은거 ex)데이터 없는데 데이터 보내지면 안됨</p>
                                <p>5. 욕심내서 디자인 이런거도 싹다 고치기</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </Container>


        );
    }
}