import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <input type="text" placeholder="Buscar contacto..." value={filter} onChange={handleChange} />
  );
};

export default Filter;
