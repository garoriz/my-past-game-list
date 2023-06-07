import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const GameList = () => {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('http://localhost:8181/api/v1/games')
            .then(response => response.json())
            .then(data => {
                setGames(data);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`http://localhost:8181/api/v1/game/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedGames = [...games].filter(i => i.id !== id);
            setGames(updatedGames);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const gameList = games.map(game => {
        return <tr key={game.id}>
            <td style={{whiteSpace: 'nowrap'}}>{game.title}</td>
            <td> {game.studio || ''} </td>
            <td> {game.year || ''} </td>
            <td> {game.time || ''} </td>
            <td>
                <ButtonGroup>
                    <Button size="sm" onClick={() => remove(game.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <AppNavbar/>
            <tr></tr>
            <Container fluid>
                <div class="text-center">
                    <h3 class="display-3">My Games</h3>
                </div>
                <table class="table table-dark">
                    <thead>
                    <tr>
                        <th width="20%">Title</th>
                        <th width="20%">Studio</th>
                        <th width="20%">Year</th>
                        <th width="20%">Time spent on the passage (in hours)</th>
                        <th width="10%"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {gameList}
                    </tbody>
                </table>
                <div className="text-center" >
                     <Button color="btn btn-primary" tag={Link} to="/games/new">Add Game</Button>
                </div>
            </Container>
        </div>
    );
};

export default GameList;