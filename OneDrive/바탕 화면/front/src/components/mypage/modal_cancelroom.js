import { React, Component } from 'react';
import { Button, Form, Modal, CloseButton, Container, Table } from 'react-bootstrap';
import Constant from "../../util/constant_variables";
import dayjs from 'dayjs';

export default class ModalCancel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: dayjs(new Date()).format('YYYY-MM-DD'),
            id: this.props.room.id,
        }
    }

    changeDate = (e) => {
        this.setState({ roomDate: null, roomUsable: 1 }, () => {
            console.log("지금 선택한 id", this.state.id, "선택된 날짜 : ", e.target.value, " 사용가능? ", this.state.roomUsable);
        });

    };
    // 폼 제출 이벤트 핸들러
    handleSubmit = async (e) => {
        this.props.modalListener();
        e.preventDefault();

        const formData = {
            id: this.state.id,
            // 다른 필요한 데이터 추가
        };

        // this 키워드를 사용하여 클래스 내부의 함수 호출
        await this.sendDataToServer(formData);
        alert("취소 완료되었습니다!");
    };

    async sendDataToServer(data) {
        try {
            const response = await fetch(Constant.serviceURL + '/cancel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Server Response:', responseData);
        } catch (error) {
            console.error('Error sending data to server:', error.message);
        }
    }

    render() {
        const room = this.props.room;
        const formattedRoomDate = dayjs(room.roomDate).format('YYYY-MM-DD');
        return (
            <>
                <div className="wrap w-100 h-100" onClick={this.props.modalListener}></div>
                <div className="modalcontents">
                    <Form onSubmit={this.handleSubmit}>
                        <Modal.Header>
                            <h3>Cancellation</h3>
                            <CloseButton onClick={this.props.modalListener} />
                        </Modal.Header>

                        <div>
                            <Form.Group className="mb-3">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td colSpan={2}>
                                                <img src={room.roomImage} width={"100%"} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><strong>Room</strong></th>
                                            <td>{room.roomName}</td>
                                        </tr>

                                        <tr>
                                            <th><strong>Content</strong></th>
                                            <td>{room.roomText}</td>
                                        </tr>
                                        <tr>
                                            <th><strong>Cost ($)</strong></th>
                                            <td>{room.roomCost}</td>
                                        </tr>
                                        <tr>
                                            <th><strong>Bed type</strong></th>
                                            <td>{room.roomPeople}명</td>
                                        </tr>
                                        <tr>
                                            <th><strong>ReservedDate</strong></th>
                                            {
                                                room.roomDate >= this.state.today ?
                                                    <td><span className="color-safe">{formattedRoomDate} valid</span></td> :
                                                    <td><span className="color-deadline">{formattedRoomDate} invalid</span></td>
                                            }
                                        </tr>
                                    </tbody>
                                </Table>
                            </Form.Group>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <button className="btn cancel-btn" onClick={this.props.modalListener}>
                                Close
                            </button>
                            {
                                room.roomDate > this.state.today &&
                                <button type="submit" className="btn color-btn">Cancel</button>
                            }

                        </div>
                    </Form>
                </div>
            </>

        );
    }

}
