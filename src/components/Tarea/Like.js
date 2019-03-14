import React from 'react';

const Like = (props) => (
  <div>
    <button 
      onClick={props.incrementar}
      //likes = {this.state.likes}
      //incrementar={this.incrementar}
      >
      Like
    </button>
  </div>
);

export default Like;