import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import Constant from "../util/constant_variables";
import logo from "../components/images/logo.png";

//아메시스트 : #9966CC 밝은 레드오렌지 : #ffb7b3
export default class Menubar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectList: Constant.getSideMenus(),
        }
    }
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"><img src={logo} width={50} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            {
                                this.state.selectList.map((menu, i) =>
                                    <NavLink key={menu.key} to={menu.href} className={["nav-link", ({ isActive }) => isActive && "checked"].join(" ")}>{menu.name}</NavLink>
                                )
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }

}



