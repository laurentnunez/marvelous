import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { InputGroup, Input, Button } from 'reactstrap';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';


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
  axios.get('https://gateway.marvel.com:443/v1/public/characters?name=wolverine&ts=1&apikey=1ffdef23335e8a0d66472e6377bfefdd&hash=d23c60ea2b610ea755740abc2b502cb1')
.then(response=>{
  setCharacters(response.data.data.results)
  
})
.catch(error=>console.log(error))
},[])

console.log(characters);


  return (
    <div className="App">
      <nav className="navbar bg-light" id="navbar">
        <div className="container-fluid">
          <img className="logo__marvelous" alt="logo-marvelous" src="../../logo-marvelous.png"/>
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Entrer votre personnage' aria-label='Search' />
            <MDBBtn color='danger'>Rechercher</MDBBtn>
          </form>
        </div>
      </nav>

    
    <div className='card-list'>
    {characters.map(character=>(
    <MDBCard style={{ maxWidth: '20rem' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={`${character.thumbnail.path}.${character.thumbnail.extension}`} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{character.name}{character.title}</MDBCardTitle>
        <MDBCardText>
        {character.description}
        </MDBCardText>
        <MDBBtn color='danger' href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    ))}
  </div>
</div>

  );

}

export default App;
