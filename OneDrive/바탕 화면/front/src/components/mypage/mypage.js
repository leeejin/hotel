import { React, Component } from "react";
import { Form, Container, Card, Button } from 'react-bootstrap';
import Constant from "../../util/constant_variables";
import ModalCancel from "./modal_cancelroom";

import Axios from "axios";
import dummy from "../../util/data";

export default class Mypage extends Component {
    constructor(props) {
        super(props);
        this.origin = [];
        this.state = {
            modalVisible: false,
            room: {},
            contents: [],
        }
    }

    componentDidMount() {
        this.callGetRoomMyListAPI();
    }

    modalListener = async (selectedRoom) => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            room: selectedRoom
        });

    }
    async callGetRoomMyListAPI() {
        try {
            const response = await Axios.get(Constant.serviceURL + '/mypage', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('API Response:', response.data);
            // response.data를 배열로 변환
            const dataArray = Array.isArray(response.data) ? response.data : [response.data];

            this.origin = dataArray;
            this.setState({ contents: this.origin });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
    
        return (
            <Container className="component">
                {
                    this.state.modalVisible && <ModalCancel modalListener={this.modalListener} room={this.state.room} />
                }
                {
                    this.state.contents.map((room, i) =>
                        <ListItem room={room} key={room.id} modalListener={(room) => this.modalListener(room)} />
                    )
                }
            </Container>
        );
    }
}

class ListItem extends Component {
    constructor(props) {
        super(props);

    }

    modalListener = () => {
        this.props.modalListener(this.props.room);
    }

    render() {
        const room = this.props.room;
        return (
            <div className="list-item">
                <Card>
                    <Card.Img variant="top" src={room.roomImage} style={{ height: 200 }} />
                    <Card.Body>
                        <Card.Title>{room.roomName}</Card.Title>
                        <Card.Text className="content">{room.roomText}</Card.Text>
                        <button type="submit" className="btn color-btn" style={{ float: 'right' }} onClick={this.modalListener}>Cancel</button>

                    </Card.Body>
                </Card>

            </div>


        );
    }
}


