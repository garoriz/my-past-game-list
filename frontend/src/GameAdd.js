import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const GameAdd = () => {
    const initialFormState = {
        title: '',
        studio: '',
        year: '',
        time: ''
    };
    const [game, setGame] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (event) => {
        const { name, value } = event.target

        setGame({ ...game, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch(`http://localhost:8181/api/v1/game`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        });
        setGame(initialFormState);
        navigate('/games');
    }

    const title = <h2>Add Game</h2>;

    return (<div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title"
                               onChange={handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="studio">Studio</Label>
                        <Input type="text" name="studio" id="studio"
                               onChange={handleChange} autoComplete="address-level1"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="studio">Year</Label>
                        <Input type="text" name="year" id="year"
                               onChange={handleChange} autoComplete="address-level1"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="time">Time spent on the passage (in hours)</Label>
                        <Input type="text" name="time" id="time"
                               onChange={handleChange} autoComplete="address-level1"/>
                        </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/games">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
};

export default GameAdd;