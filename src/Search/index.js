import { useState } from 'react';
import './search.scss';

function Search({search}) {

  const [text, setText]= useState('');
  const onSearch=(q)=>{
    setText(q)
    search(q)
  }

  return (
    <form className='search'>
      <input type='text' 
      className='search_field' 
      placeholder='Entrer votre personnage' 
      autoFocus 
      value={text}
      onChange={(element)=>onSearch(element.target.value)}
      />
    </form>
  )
}
 export default Search;