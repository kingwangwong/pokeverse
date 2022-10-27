import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container, Row, Col } from 'react-bootstrap'

const LIMIT = 50;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  useEffect(() => {
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      });
  }, []);
  //console.log(pokemons);

  function onChange(e) {
    const value = e.target.value;
    // console.log(value)
    const regex = new RegExp(value, 'gi');
    // console.log(pokemons)
    const filtered = pokemons.filter((p) => {
      
      return p.name.match(regex)
    });
    console.log(filtered)
    setFilteredPokemons(()=>{
      return filtered
    });

  }
  return (
    <div data-testid="app">
      <Navigation />
      <InputGroup className="mb-3" onChange={onChange}>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"

        />
      </InputGroup>
      <h1>Pokemon should appear here</h1>
      {/* <pre>{JSON.stringify(filteredPokemons,null,2)}</pre> */}
      <Container>
        <Row className='row-auto'>
          <Col className='col-auto'>
            {filteredPokemons.map((p,index) => <PokemonCard filteredPokemons={filteredPokemons} key={index} name={p.name} url={p.url} />)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export { App };
