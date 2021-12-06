import React from 'react';
import DataColumns from './DataColumns';

const TableComponent = ({
  data,
  sortByDate,
  sortByCity,
  sortByState,
  sortByCountry,
  sortByShape,
  sortByDuration,
}) => {
  return (
    <main>
      <table>
        <tr>
          <th onClick={sortByDate}>Date &uarr;</th>
          <th onClick={sortByCity}>City &uarr;</th>
          <th onClick={sortByState}>State &uarr; </th>
          <th onClick={sortByCountry}>Country &uarr;</th>
          <th onClick={sortByShape}>Shape &uarr;</th>
          <th onClick={sortByDuration}>Duration &uarr;</th>
          <th>Comments</th>
        </tr>
        {data.map((col) => (
          <DataColumns
            date={col.datetime}
            city={col.city}
            state={col.state}
            country={col.country}
            shape={col.shape}
            duration={col.durationMinutes}
            comments={col.comments}
          />
        ))}
        <DataColumns />
      </table>
    </main>
  );
};

export default TableComponent;
