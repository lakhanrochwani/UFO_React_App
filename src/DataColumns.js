import React from 'react';

const DataColumns = ({date,city,state,country,shape,duration,comments}) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{country}</td>
      <td>{shape}</td>
      <td>{duration}</td>
      <td>{comments}</td>
    </tr>
  );
};

export default DataColumns;
