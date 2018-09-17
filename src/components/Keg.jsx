import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Keg(props){
  return (
    <div>
      <style jsx>{`
          div {
            text-align: center;
          }
        `}</style>
      <h3>{props.name} - {props.brand}</h3>
      <p><em>${props.price}</em></p>
      <p><em>ABV: {props.abv}</em></p>
      <h4>Pints Left: {props.pints}/124</h4>
      <Link to="/editkeg/:id">Edit Keg</Link>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired,
};

export default Keg;