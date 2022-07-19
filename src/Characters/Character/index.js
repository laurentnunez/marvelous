import { PropTypes } from 'prop-types';


function Character({
  name,
  description,
  id,
  
}) {

  return (
   
    <div className='card' id='card' key={id}>
        <div className='card__content'>
          <h3 className='card__title'>{name}</h3>
          <p>{description}</p>
        </div>   
      </div>
      
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Character;