import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ url, name, filteredPokemons }) {
  const [urldata, seturldata] = useState([])
  // fetch({url}).then((res) => res.json())
  // .then((data) => {
  //   seturldata(data);
  // });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seturldata(data);
      });
  }, [filteredPokemons]);
  
  let abilities = urldata.abilities;
  //console.log(abilities[0].ability.name)
  // console.log(abilities)
  //console.log(abilities && abilities.map((a) => a.ability.name))
  return (
    <Card >
      <Card.Img style={{width: "100px"}} src={urldata.sprites?.front_default} />
      <Card.Body>
        <Card.Title>{urldata.name}</Card.Title>
        <Card.Text as='div'><ul>{abilities && abilities.map((a, index) =>  <li key={index}>{a.ability.name}</li>)}</ul></Card.Text>

      </Card.Body>

    </Card>
  );
}

export { PokemonCard };
