import React from 'react';
import FilaFoco from './FilaFoco'

const Techo = (props) => (
  <div style={styles}>
    <FilaFoco />
    <FilaFoco />
  </div>
);

const styles={
  margin: '100px',
  backgroundColor: 'grey',
  height: '400px',
}

export default Techo;