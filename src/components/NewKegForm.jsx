import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='number'
          id='price'
          placeholder='6'/>
        <input
          type='number'
          id='abv'
          placeholder='7.2'/>
        <input
          type='number'
          id='pints'
          placeholder='124'/>
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

export default NewKegForm;