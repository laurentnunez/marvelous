import './characters.scss';
import Character from './Character';

function Characters({characters}) {
  return (
    <div className='card-list'>
      {characters.map(character=>(
        <div className='thecard'>
        <Character
        key={character.id}
        id={character.id}
        name={character.name}
        thumbnail={character.thumbnail}
      />
      </div>
      ))}
    </div>
  )
}
 export default Characters;

