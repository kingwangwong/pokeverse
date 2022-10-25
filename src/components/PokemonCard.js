import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ url, name }) {
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
  }, []);
  console.log(urldata)
  let abilities = urldata.abilities;
  return (
    <Card >
      <Card.Img src={urldata.sprites.back_default} />
      <Card.Body>
        <Card.Title>{urldata.name}</Card.Title>
        <Card.Text as='div'><ul>{abilities.map((a) => <li>{a.name}</li>)}</ul></Card.Text>

      </Card.Body>

    </Card>
  );
}

export { PokemonCard };
