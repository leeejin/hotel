import { React, Component } from "react";
import { Container, Card, Button, Form } from 'react-bootstrap';
import { Navigate, Link } from "react-router-dom";
//아메시스트 : #9966CC 밝은 레드오렌지 : #ffb7b3
import image from '../images/design.png';
import Constant from "../../util/constant_variables";
import Signup from './signup';
import logo from '../images/logo.png';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
        }
    }
    // 폼 제출 이벤트 핸들러
    handleSubmit = async () => {
        const formData = {
            userEmail: '',
            userPassword: '',
            // 다른 필요한 데이터 추가
        };
        if (this.state.userEmail != '' && this.state.userPassword != '') {
            // this 키워드를 사용하여 클래스 내부의 함수 호출
            await this.sendLoginToServer(formData);
        }


    };

    async sendLoginToServer(data) {
        try {
            const response = await fetch(Constant.serviceURL + '/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((json) => {
                    if (json.isLogin === "True") {
                        this.props.setMode("WELCOME");
                        alert("환영합니다!");
                    }else{
                        alert(json.isLogin);
                    }
                })

        } catch (error) {
            console.error('Error sending data to server:', error.message);
        }
    }

    render() {

        return (
            <Container className="component">
                <div className="w-50 m-auto mb-5">
                    <img src={logo} width={'100%'}/>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                onChange={(e) => { this.setState({ userEmail: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                autoFocus
                                onChange={(e) => { this.setState({ userPassword: e.target.value }) }} />
                        </Form.Group>
                        <div className="text-center">
                            <button className="btn color-btn" type="submit" onClick={this.handleSubmit}>Login</button>
                        </div>

                    </Form>
                </div>
                <p>Are you not a member yet ? <Link to='/SignupPage' className="color-btn">Signup</Link></p>

            </Container>

        );
    }
}