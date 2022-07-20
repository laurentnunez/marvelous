import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './character.scss';

function Character({
  name,
  thumbnail,
  
}) {

  return (
    <Link to={`/character/${name}`}>
        <div className='card__content'>
        <img 
        src={`${thumbnail.path}.${thumbnail.extension}`}  
        alt={name}
        className='card_image'
          
        />
          <h3 className='card__title'>{name}</h3>
        </div>   
    </Link>  
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Character;