import React from 'react';

const Item = ({nombre, apellido}) => (
  <li>
    <h3>
      {`${nombre} ${apellido}`}
    </h3>
  </li>
);

export default Item;