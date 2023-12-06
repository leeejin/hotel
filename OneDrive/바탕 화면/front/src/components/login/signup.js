import { React, Component } from "react";
import { Container, Card, Button, Form } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
//아메시스트 : #9966CC 밝은 레드오렌지 : #ffb7b3
import image from '../images/design.png';
import Constant from "../../util/constant_variables";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPhone: '',
            userBirth: '',
            userEmail: '',
            userPassword: '',
            passwordCheck: '',

            message: null,
        }
    }


    // 폼 제출 이벤트 핸들러
    handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            userName: this.state.userName,
            userPhone: this.state.userPhone,
            userBirth: this.state.userBirth,
            userEmail: this.state.userEmail,
            userPassword: this.state.userPassword
            // 다른 필요한 데이터 추가
        };

        if (formData.userName != '' && formData.userPhone != '' && formData.userBirth != '' && formData.userEmail != '' && formData.userPassword != '' && this.state.passwordCheck != '' && this.state.message == 0) {
            if (formData.userPassword == this.state.passwordCheck) {
                console.log('Sending to server:', formData);
                await this.sendDataToServer(formData);
                alert('회원가입이 완료되었습니다! 로그인해주세요.');
            }
        }
        else {
            if (this.state.message != 0) {
                alert('중복체크를 해주세요.');
            }
            else
            alert('빈칸채워주세요.');
        }



    }

    // 이메일 중복확인
    emailCheck = (e) => {
        e.preventDefault();
        const formData = {
            userEmail: this.state.userEmail,
        };
        if (formData.userEmail === '') {
            this.setState({ message: -1 });
        }
        else {
            fetch(Constant.serviceURL + '/checkEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((json) => {
                    console.log('이메일 체크중');
                    if (json.tf === true) {
                        this.setState({ message: 0 });
                    } else {
                        this.setState({ message: 1 });
                    }
                });
        }

    }
    async sendDataToServer(data) {
        try {
            const response = await fetch(Constant.serviceURL + '/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorResponseData = await response.json();
                console.error('Server Error Response:', errorResponseData);
                throw new Error('Server Error');
            }

            const responseData = await response.json();
            console.log('Server Response:', responseData);
        } catch (error) {
            console.error('Error sending data to server:', error.message);
        }
    }
    render() {

        return (
            <Container className="component">
                <div className="w-50 m-auto mb-5">
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="010-0000-0000"
                                onChange={(e) => { this.setState({ userPhone: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Birth</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="2000-01-01"
                                onChange={(e) => { this.setState({ userBirth: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <button
                                className="btn color-btn"
                                onClick={(e) => {this.emailCheck(e) }}>중복체크</button>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                onChange={(e) => {
                                    this.setState({ userEmail: e.target.value, message: -1 }); // 추가된 부분
                                }}
                            />
                            {
                                this.state.message === 0 ?
                                    <p className="color-safe">사용 가능한 아이디입니다.</p>
                                    : this.state.message === -1 ?
                                        <p className="color-deadline">아이디를 입력해주세요.</p> :
                                        this.state.message === 1 &&
                                        <p className="color-deadline">다른 ID를 입력해주세요</p>

                            }

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => { this.setState({ userPassword: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password Check</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => { this.setState({ passwordCheck: e.target.value }) }}
                            />
                            {
                                this.state.userPassword != this.state.passwordCheck ? <p className="color-deadline">비밀번호가 다릅니다</p> : null
                            }
                        </Form.Group>

                        <div className="text-center">
                            <button className="btn color-btn" type="submit" >Signup</button>
                        </div>
                    </Form>
                </div>
            </Container>

        );
    }
}