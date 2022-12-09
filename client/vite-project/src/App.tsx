import { Table, Grid, Space, Button, Title, TextInput, ScrollArea, Center } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useReactTable } from '@tanstack/react-table'
import Plot from "react-plotly.js";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getJSON/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  // Cuando quiera leer el main se deja lo siguiente let dataVivanuncios = posts.filter(e => e.sitio == 'Vivanuncios')
  // Cuando quiera leer un py de un sitio en particular se cambia el data por posts y no se filtra

  let dataAllProperty = posts.filter(e => e.sitio == 'AllProperty')
  let dataVivanuncios = posts.filter(e => e.sitio == 'Vivanuncios')
  let dataFlat = posts.filter(e => e.sitio == 'Flat')
  let dataREMAX = posts.filter(e => e.sitio == 'REMAX')
  let priceallp = posts.filter(e => e.precio == 'AllProperty')
  let municipioallp = posts.filter(e => e.municipio == 'AllProperty')


  class Barchart1 extends React.Component {
    render() {
      return (
        <>
          <h1> Primer </h1>
          <Plot
            data={[
              {
                x: municipioallp,
                y: priceallp,
                type: 'bar'
              }
            ]}
            layout={{ width: 790, height: 770, title: 'A Fancy Plot' }}
          />
        </>
      );
    }
  }
}

export default App