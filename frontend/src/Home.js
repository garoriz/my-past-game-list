import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <h1 class="display-3">Here is a list of my past games</h1>
                <div class="text-center">
                    <a class="btn btn-primary" href="/games" role="button">List Of Past Games</a>
                </div>
            </Container>
        </div>
    );
}

export default Home;