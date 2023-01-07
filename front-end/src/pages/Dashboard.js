import React from 'react';
import { Outlet, Route, Routes } from "react-router-dom";
import Menu from '../components/Menu';
import Graph from './Graph';
import Search from './Search';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3}>
                        <Menu/>
                    </Col>
                    <Col xs={12} md={9}>
                        <Routes>
                            <Route path="graph" element={<Graph />} />
                            <Route path="search" element={<Search />} />
                        </Routes>
                        <Outlet/>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Dashboard;