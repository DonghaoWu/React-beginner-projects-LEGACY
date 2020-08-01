import React from 'react';

const List = props => {
  const { animal } = props;
  return (
    <li>
      {animal.name}
      <img src={animal.image} alt="animal" />
    </li>
  );
};

export default List;
