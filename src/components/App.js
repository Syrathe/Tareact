import React, { Component } from 'react';
import React1 from './React1/index.js';
import React2 from './React2/index';//es lo mismo que la linea anterior con o sin .js
import Tarea from './Tarea/index';

class App extends Component {//la palabra class lo hace stateful, solo debe usarse cuando manejan estado
  render() {
    return (
      <div className="App">
        <Tarea />
      </div>
    );
  }
}

export default App;
