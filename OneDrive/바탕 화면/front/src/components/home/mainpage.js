import { React, Component } from "react";
import { Container, Card, Button, Form } from 'react-bootstrap';
//아메시스트 : #9966CC 밝은 레드오렌지 : #ffb7b3
import image from '../images/design.png';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    
    render() {

        return (
            <Container className="component">
                 <p>안녕하세요.
                </p>
                <p>
                    USG 클라우드 비즈니스 플랫폼 Level 1 역량평가 과제입니다.
                </p>
                <p>인제대 이수진입니다.
                </p>
                <h5>시나리오</h5>
                <p>1. 사용자는 호텔 객실을 조회하고 원하는 객실을 예약한다.</p>
                <p>2. 사용자가 예약한 객실을 결제한다.</p>
                <p>3. 사용자는 예약일 전에 예약된 객실을 취소할 수 있다.</p>
                <div>
                    <img src={image} width={"50%"} />
                </div>
               
            </Container>


        );
    }
}