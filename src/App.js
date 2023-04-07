import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function App() {
  const [data, setData] = useState(generateData());

  function generateData() {
    var data = [];
    var rows = 10;
    var columns = 10;
    for (var i = 0; i < rows; i++) {
      var row = [1000, 5, 10, 100, 2, 1];
      for (var j = 0; j < columns; j++) {
        row.push(Math.random());
      }
      data.push(row);
    }
    return data;
  }

  return (
    <div>
      <Plot
        data={[
          {
            z: data,
            type: 'surface',
          },
        ]}
        layout={{ width: 500, height: 500, title: 'Surface Plot' }}
      />
    </div>
  );
}

export default App;