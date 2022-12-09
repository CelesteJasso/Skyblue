import { Table, Grid, Space, Button, Title, TextInput, ScrollArea, Center } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useReactTable } from '@tanstack/react-table'
import Ima from './components/allp.png'
import mon from './components/zmmonterrey.jpg'
import san from './components/zmsannicolas.jpg'

import { Image } from '@mantine/core';
import Pie from './components/Pie';
import { BD3 } from './components/d3barchart';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Este viene de la appi en @app.get("/getJSON/")
// async def getJSON():
// csvFilePath = r'Ventasvivanuncios.csv'
// jsonFilePath = r'vivanucios.json'
// data = csv_to_json(csvFilePath, jsonFilePath)
// return data

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
  // Cuando quiera leer un py de un sitio en particular se cambia el data por posts

  let dataAllProperty = posts.filter(e => e.sitio == 'AllProperty')
  // let dataVivanuncios = posts.filter(e => e.sitio == 'Vivanuncios')
  let dataFlat = posts.filter(e => e.sitio == 'Flat')
  let dataREMAX = posts.filter(e => e.sitio == 'REMAX')

  return (
    <div>
      <div>
        <br />
        <Center>
          <Image
            width={500}
            height={100}
            src={Ima} />
        </Center>
      </div>

      <Grid>
        <Grid.Col span={6}>
          <div>
            <h1> Zona Industrial</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d460347.9776983164!2d-100.84060681830245!3d25.655757411671814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szonas%20industriales!5e0!3m2!1ses-419!2smx!4v1670457425029!5m2!1ses-419!2smx" width="600" height="450"></iframe>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <Center>
              <Carousel width={333} >
                <div>
                  <img src={san} />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={mon} />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={san} />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </Center>
          </div>
          <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
            <h3>Nuestras propiedades en esta zonas</h3>
            <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">baños</th>
                  <th scope="col">ubicacion</th>
                  <th scope="col">sitio</th>
                </tr>
              </thead>
              <tbody>
                {
                  // dataVivanuncios para mostrar el main
                  // postsVivanuncios para mostrar la appi que se esta ejecutando
                  dataAllProperty.map((d) => (
                    <tr key={d.compra_renta}>
                      <td align="left">{d.compra_renta}</td>
                      <td align="left" >{d.tipo}</td>
                      <td align="left" >{d.precio}</td>
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.banios}</td>
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={6}>
          <div>
            <h1> Zona Turistica</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d230186.01718702106!2d-100.44318486577733!3d25.64952302973048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szona%20turistica%20Nuevo%20Leon%20!5e0!3m2!1ses-419!2smx!4v1670457809474!5m2!1ses-419!2smx" width="600" height="450"></iframe>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <Center>
              <Carousel width={333}>
                <div>
                  <img src={san} />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={mon} />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={san} />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </Center>
          </div>
          <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
            <h3>Nuestras propiedades en esta zonas</h3>
            <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">baños</th>
                  <th scope="col">ubicacion</th>
                  <th scope="col">sitio</th>
                </tr>
              </thead>
              <tbody>
                {
                  dataFlat.map((d) => (
                    <tr key={d.compra_renta}>
                      <td align="left">{d.compra_renta}</td>
                      <td align="left" >{d.tipo}</td>
                      <td align="left" >{d.precio}</td>
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.banios}</td>
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={6}>
          <div>
            <h1> Zona Metropolitana</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919504.9352694642!2d-100.8345519951666!3d25.809638665936696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662a377e498af83%3A0xde5ad0f0777ed7c!2sZona%20metropolitana%20de%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1670457932270!5m2!1ses-419!2smx" width="600" height="450"></iframe>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <Center>
              <Carousel width={333}>
                <div>
                  <img src={san} />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={mon} />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={san} />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </Center>
          </div>
          <h3>Nuestras propiedades en esta zonas</h3>
          <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
            <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">baños</th>
                  <th scope="col">superficie</th>
                  <th scope="col">ubicacion</th>
                  <th scope="col">sitio</th>
                </tr>
              </thead>
              <tbody>
                {
                  dataREMAX.map((d) => (
                    <tr key={d.compra_renta}>
                      <td align="left">{d.compra_renta}</td>
                      <td align="left" >{d.tipo}</td>
                      <td align="left" >{d.precio}</td>
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.banios}</td>
                      <td align="left" >{d.superficie}</td>
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>
        </Grid.Col>
      </Grid>

    </div>

  );
}

export default App
