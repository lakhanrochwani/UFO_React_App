import React, { useState } from 'react';
import './style.css';
import TableComponent from './TableComponent';
import dataArr from './data';

export default function App() {
  let [data, setData] = useState(dataArr);
  const handleSortByDate = () => {
    let sortedData = dataArr.sort((a, b) => {
      const aDate = new Date(a.datetime);
      const bDate = new Date(b.datetime);
      if (aDate > bDate) {
        return 1;
      }
      if (aDate < bDate) {
        return -1;
      }
      return 0;
    });
    setData([...sortedData]);
  };
  const handleSortByCity = () => {
    let sortedData = dataArr.sort((a, b) => (a.city > b.city ? 1 : -1));
    setData([...sortedData]);
  };
  const handleSortByState = () => {
    let sortedData = dataArr.sort((a, b) => (a.state > b.state ? 1 : -1));
    setData([...sortedData]);
  };
  const handleSortByCountry = () => {
    let sortedData = dataArr.sort((a, b) => (a.country > b.country ? 1 : -1));
    setData([...sortedData]);
  };
  const handleSortByShape = () => {
    let sortedData = dataArr.sort((a, b) => (a.shape > b.shape ? 1 : -1));
    setData([...sortedData]);
  };
  const handleSortByDuration = () => {
    let sortedData = dataArr.sort((a, b) =>
      a.durationMinutes > b.durationMinutes ? 1 : -1
    );
    setData([...sortedData]);
  };
  return (
    <div>
      <h1>UFO Sightings!</h1>
      <p>
        <em>The Truth is Out There</em>
      </p>
      <TableComponent
        sortByDate={handleSortByDate}
        sortByCity={handleSortByCity}
        sortByState={handleSortByState}
        sortByCountry={handleSortByCountry}
        sortByShape={handleSortByShape}
        sortByDuration={handleSortByDuration}
        data={data}
      />
    </div>
  );
}
