import { React, Component } from "react";
import { Card, Container, Carousel, Form } from 'react-bootstrap';
import ModalInquiry from "./modal_inquiryroom";
import Constant from "../../util/constant_variables";
import Axios from "axios";
import dummy from "../../util/data";

import search from "../images/search.png";
export default class Inquiryroom extends Component {
    constructor(props) {
        super(props);
        this.origin = [];
        this.state = {
            modalVisible: false,
            room: {},
            contents: [],
            title: '',
        }
    }


    componentDidMount() {
        this.callGetRoomListAPI().then((response) => {
            this.origin = response;
            this.setState({ contents: this.origin });
        });
    }

    modalListener = (room) => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            room: room
        });

    }
    search = () => {
        this.setState({ contents: this.dataFiltering(this.state.title) });
    }
    dataFiltering = (title) => {
        let filteredContents = this.origin;

        //가맹점명으로 검색
        filteredContents = filteredContents.filter((room) => {
            //console.log('keyword: ', text)
            if (room.roomName.includes(title))
                return true;
        });

        //정산 또는 미정산 선택시 필터링
        // filteredContents = filteredContents.filter((item) => {
        //     if (settleKind === this.settleKind[0].value)
        //         return true;
        //     else
        //         return item.complete === settleKind;
        // });

        return filteredContents;
    }

    async callGetRoomListAPI() {
        try {
            const response = await Axios.get(Constant.serviceURL + '/inquiry', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // response.data를 배열로 변환
            const dataArray = Array.isArray(response.data) ? response.data : [response.data];

            return dataArray;
        } catch (error) {
            console.error(error);
        }
    }
    render() {

        return (
            <Container className="component">
                 <div>
                    <select>
                        <option>내림차순</option>
                        <option>오름차순</option>
                    </select>
                    <select>
                        <option>가나다순</option>
                        <option>다나가순</option>
                    </select>
                    </div>
                <Form className="search-form" onSubmit={(e) => { e.preventDefault(); this.search(); }}>
                   
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <div className="search-input">
                            <Form.Control
                                type="text"
                                placeholder="Enter the hotel name"
                                onChange={(e) => this.setState({ title: e.target.value })}
                                autoFocus
                            />
                        </div>
                        <div className="search-button">
                            <img src={search} width={40} onClick={(title) => this.search(title)} />
                        </div >
                    </Form.Group>
                </Form>
                {
                    this.state.modalVisible && <ModalInquiry modalListener={this.modalListener} room={this.state.room} />
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
            room.roomUsable !== 0 && <div className="list-item">
                <Card>
                    <Card.Img variant="top" src={room.roomImage} style={{ height: 200 }} />
                    <Card.Body>
                        <Card.Title className="title">{room.roomName}</Card.Title>
                        <Card.Text className="content">{room.roomText}</Card.Text>
                        <Card.Text className="cost">$<span>{room.roomCost}</span></Card.Text>
                        <div style={{ float: 'right' }}>
                            <button className="btn color-btn" onClick={this.modalListener}>Reserve</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}

