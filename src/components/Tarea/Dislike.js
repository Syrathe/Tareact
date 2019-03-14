import React from 'react';

const Dislike = (props) => (
  <div>
    <button 
      onClick={props.decrementar}
      //Dislikes = {this.state.Dislikes}
      //incrementar={this.decrementar}
      >
      Dislike
    </button>
  </div>
);

export default Dislike;