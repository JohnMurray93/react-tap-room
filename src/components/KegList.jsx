import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'Space Dust',
    brand: 'Elysian',
    price: 5,
    abv: 8.2,
    pints: 100,
  },
  {
    name: 'Root Beer',
    brand: 'Not Your Fathers',
    price: 4,
    abv: 5.9,
    pints: 110,
  },
  {
    name: 'Hop Hop & Away',
    brand: 'Aeronaut',
    price: 5,
    abv: 4.6,
    pints: 14,
  }
];

function KegList(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          pints={keg.pints}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;