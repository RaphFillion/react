import React from 'react';

const agePersonne = (props) => {
  let date = new Date().getFullYear();
  return <div>Âge: {props.age} - ({date - props.age})</div>
}

export default agePersonne;
