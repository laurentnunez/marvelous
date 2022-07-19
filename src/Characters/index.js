import './characters.scss';
import Character from './Character';

function Characters({characters}) {
  return (
    <div className='card-list'>
      {characters.map(character=>(
        <div className='card-data'>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}  alt={character.name} className='card_image'></img>
        <Character
        key={character.id}
        id={character.id}
        name={character.name}
        
      />
      </div>
      ))}
    </div>
  )
}
 export default Characters;

