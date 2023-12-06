import { React, Component } from 'react';
import { Button, Form, Modal, CloseButton, Container, Table, Dropdown, DropdownButton } from 'react-bootstrap';
import Constant from "../../util/constant_variables";

export default class ModalInquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.room.id,
            roomName: this.props.room.roomName,
            roomDate: this.props.room.roomDate,
            roomUsable: this.props.room.roomUsable,
            roomPeople: this.props.room.roomPeople,
            howMany: Constant.getHowManyBed(),
            userName: "이수진"
        }
    }
    changeDate = (e) => {
        this.setState({ roomDate: e.target.value, roomUsable: 0 }, () => {
            console.log("지금 선택한 id:", this.state.id, "선택된 날짜 : ", e.target.value, " 사용가능? ", this.state.roomUsable);
        });
    };

    changePeople = (e) => {
        this.setState({ roomPeople: e.target.value }, () => {
            console.log("지금 선택한 roomPeople:", this.state.roomPeople);
        })
    };
    // 폼 제출 이벤트 핸들러
    handleSubmit = async (e) => {
        this.props.modalListener();
        e.preventDefault();


        const formData = {
            id: this.state.id,
            roomDate: this.state.roomDate,
            roomUsable: this.state.roomUsable,
            roomPeople: this.state.roomPeople
            // 다른 필요한 데이터 추가
        };

        if (formData.roomPeople === 0 || formData.roomDate === '') {
            console.log('다시 입력해주세요.')
        } else {
            console.log('Sending to server:', formData);
            await this.sendDataToServer(formData);
            alert('예약이 완료되었습니다!');
        }


    }

    async sendDataToServer(data) {
        try {
            const response = await fetch(Constant.serviceURL + '/pay', {
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
        const room = this.props.room;

        return (
            <>
                <div className="wrap w-100 h-100" onClick={this.props.modalListener}></div>
                <div className="modalcontents">
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <Modal.Header>
                            <h3>Reservation</h3>
                            <CloseButton onClick={this.props.modalListener} />
                        </Modal.Header>
                        <div>
                            <Form.Group className="mb-3">
                                <div style={{width:'80%',margin:'auto'}}>
                                    <img src={room.roomImage} width={"100%"} />
                                </div>
                                <div >
                                <Table>
                                    <tbody>
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
                                            <th><strong>User</strong></th>
                                            <td>{this.state.userName}</td>
                                        </tr>
                                        <tr>
                                            <th><strong>BedType</strong></th>
                                            <td>
                                                <select onClick={(e) => { this.changePeople(e) }}>
                                                    {
                                                        this.state.howMany.map((how) =>
                                                            <option
                                                                key={how.key}
                                                                value={how.value} >{how.name}</option>
                                                        )
                                                    }

                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><strong>Date</strong></th>
                                            <td><input
                                                type="date"
                                                onChange={(e) => { this.changeDate(e) }}
                                            /></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </div>
                                
                            </Form.Group>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <button className="btn cancel-btn" onClick={this.props.modalListener}>
                                Close
                            </button>
                            <button type="submit" className="btn color-btn">Pay</button>
                        </div>
                    </Form>
                </div>


            </>




        );
    }

}
