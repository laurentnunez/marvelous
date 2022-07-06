import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { InputGroup, Input, Button, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

//https://gateway.marvel.com:443/v1/public/characters?apikey=1ffdef23335e8a0d66472e6377bfefdd


//private key : 65863fa7636b95f1cccbbf069badba422143906f
//public key : 1ffdef23335e8a0d66472e6377bfefdd
//ts:1
//165863fa7636b95f1cccbbf069badba422143906f1ffdef23335e8a0d66472e6377bfefdd

//hash:d23c60ea2b610ea755740abc2b502cb1

//tous les perso
//https://gateway.marvel.com:443/v1/public/characters?limit=50&ts=1&apikey=1ffdef23335e8a0d66472e6377bfefdd&hash=d23c60ea2b610ea755740abc2b502cb1


//séries sur thor
//https://gateway.marvel.com:443/v1/public/series?title=thor&ts=1&apikey=1ffdef23335e8a0d66472e6377bfefdd&hash=d23c60ea2b610ea755740abc2b502cb1
//

//tri sur rocket
//https://gateway.marvel.com:443/v1/public/characters?name=rocket%20raccoon&ts=1&apikey=1ffdef23335e8a0d66472e6377bfefdd&hash=d23c60ea2b610ea755740abc2b502cb1

function App() {

const [characters, setCharacters] = useState([]);

useEffect(()=> {
  axios.get('https://gateway.marvel.com:443/v1/public/characters?limit=50&ts=1&apikey=1ffdef23335e8a0d66472e6377bfefdd&hash=d23c60ea2b610ea755740abc2b502cb1')
.then(response=>{
  setCharacters(response.data.data.results)
  
})
.catch(error=>console.log(error))
},[])

console.log(characters);


  return (
    <div className="App">
      

      <nav className="navbar bg-light">
  <div className="container-fluid">
  <h1>MARVELOUS</h1>
  <InputGroup>
    <Input />
    <Button>
      Rechercher
    </Button>
  </InputGroup>
  </div>
</nav>



      <div className="row row-cols-1 row-cols-md-3 g-4">
      
        {characters.map(character=>(

        
      <div className="col"key={character.id}>
      <div className="card" style={{width: "18rem", height:"18rem"}}>
      <p className="card-text">{character.name}</p>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} className="card-img-top" style={{width: "100%", height:"100%"}} alt={character.name}/>
          <div className="card-body">
          
          <p className="card-text">{character.description}</p>
          </div>
      </div>
      </div>
      ))}
    </div>
    
    


<CardGroup>
  {characters.map(character=>(
  <Card>
    <CardImg
      alt="Card image cap"
      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      {character.name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
      {character.description}
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  ))}
</CardGroup>




</div>

  );
}

export default App;
