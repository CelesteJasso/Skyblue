import { Table, Grid, Space, Button, Title, TextInput, ScrollArea, Center } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useReactTable } from '@tanstack/react-table'

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

  let dataVivanuncios = posts.filter(e => e.sitio == 'Vivanuncios')
  let dataFlat = posts.filter(e => e.sitio == 'Flat')
  let dataAllProperty = posts.filter(e => e.sitio == 'AllProperty')

  return (
    <div>
      <Grid>
        <Grid.Col span={4}>
          <Title order={1} align='left'>
            Datos
          </Title>
        </Grid.Col>
        <Grid.Col span={3} offset={3}>
        </Grid.Col>
      </Grid>

      <Space h="xl"></Space>
      <Center>
        <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
          <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
            <thead>
              <tr>
                <th scope="col">Compra / Renta</th>
                <th scope="col">tipo</th>
                <th scope="col">precio</th>
                <th scope="col">superficie</th>
                <th scope="col">ubicacion</th>
              </tr>
            </thead>
            <tbody>
              {
                dataVivanuncios.map((d) => (
                  <tr key={d.compra_renta}>
                    <td align="left">{d.compra_renta}</td>
                    <td align="left" >{d.tipo}</td>
                    <td align="left" >{d.precio}</td>
                    <td align="left" >{d.superficie}</td>
                    <td align="left" >{d.municipio}</td>
                  </tr>
                ))}
            </tbody>
          </ScrollArea>
        </Table>

      </Center>
      <Center>
        <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
          <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
            <thead>
              <tr>
                <th scope="col">Compra / Renta</th>
                <th scope="col">tipo</th>
                <th scope="col">precio</th>
                <th scope="col">superficie</th>
                <th scope="col">ubicacion</th>
              </tr>
            </thead>
            <tbody>
              {
                dataFlat.map((d) => (
                  <tr key={d.compra_renta}>
                    <td align="left">{d.compra_renta}</td>
                    <td align="left" >{d.tipo}</td>
                    <td align="left" >{d.precio}</td>
                    <td align="left" >{d.superficie}</td>
                    <td align="left" >{d.municipio}</td>
                    <td align="left" >{d.sitio}</td>
                  </tr>
                ))}
            </tbody>
          </ScrollArea>
        </Table>

      </Center>

      <Center>
        <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
          <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
            <thead>
              <tr>
                <th scope="col">Compra / Renta</th>
                <th scope="col">tipo</th>
                <th scope="col">precio</th>
                <th scope="col">superficie</th>
                <th scope="col">ubicacion</th>
                <th scope="col">sitio</th>
              </tr>
            </thead>
            <tbody>
              {
                dataAllProperty.map((d) => (
                  <tr key={d.compra_renta}>
                    <td align="left">{d.compra_renta}</td>
                    <td align="left" >{d.tipo}</td>
                    <td align="left" >{d.precio}</td>
                    <td align="left" >{d.superficie}</td>
                    <td align="left" >{d.municipio}</td>
                    <td align="left" >{d.sitio}</td>
                  </tr>
                ))}
            </tbody>
          </ScrollArea>
        </Table>

      </Center>


    </div>
  );
}

export default App
