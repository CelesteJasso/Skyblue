import { Table, Grid, Title, ScrollArea, Center, Header, Paper, Group } from '@mantine/core';
import { useState, useEffect } from 'react';
import ppr from './components/Preciosporrecamaras.png'
import ppt from './components/publicacionesportiempo.png'
import { Image } from '@mantine/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heade } from './components/Hdr';
import './App.css';
import { Indutrial } from './components/IndustrialZone';
import { Turistica } from './components/TouristicZone';
import { Metropolitana } from './components/MetropolitanZone';

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

  // Filtros para tablas en DataAn
  let dataAllProperty = posts.filter(e => e.sitio == 'AllProperty')
  let dataFlat = posts.filter(e => e.sitio == 'Flat')
  let dataLamudi = posts.filter(e => e.sitio == 'Lamudi')

  const municipioTurismo = ['Santa Catarina', 'Monterrey', 'Guadalupe', 'San Pedro']
  const municipioMetropol = ['Monterrey', 'Guadalupe', 'Apodaca', 'San Nicolás', 'san nicolas', 'Escobedo',
    'Santa Catarina', 'Juárez', 'juarez', 'García', 'garcia', 'Pesquería', 'pesqueria', 'San Pedro',
    'Cadereyta', 'Santiago', 'Salinas Victoria']

  var responseTurismo = new Array
  municipioTurismo.map(function (e) {
    var municipio = e
    responseTurismo.push(...posts.filter(e => e.sitio == 'AllProperty' && e.municipio.toUpperCase().includes(municipio.toUpperCase())))
  })

  var responseMetropol = new Array()
  municipioMetropol.map(function (e) {
    var municipio = e
    responseMetropol.push(...posts.filter(e => e.sitio == 'AllProperty' && e.municipio.toUpperCase().includes(municipio.toUpperCase())))
  })

  const municipioIndustrial = ['San Nicolás', 'san nicolas', 'Salinas Victoria', 'García', 'garcia', 'Montemorelos', 'Monterrey', 'Pesquería', 'pesqueria', 'apodaca', 'santa catarina']
  var responseIndustrial = new Array
  municipioIndustrial.map(function (e) {
    var municipio = e
    responseIndustrial.push(...posts.filter(e => e.sitio == 'AllProperty' && e.municipio.toUpperCase().includes(municipio.toUpperCase())))
  })


  interface posts {
    compra_renta: string,
    tipo: string,
    precio: string,
    superficie: string,
    municipio: string,
    sitio: string,
    recamaras: string,
    banios: string
  }

  // Cuando quiera leer el main se deja lo siguiente let dataVivanuncios = posts.filter(e => e.sitio == 'Vivanuncios')
  // Cuando quiera leer un py de un sitio en particular se cambia el data por posts

  return (
    <div>
      <div>
        <br />
        <Heade></Heade>
      </div>
      <br />
      <Grid>
        <Grid.Col span={5}>
          <Indutrial></Indutrial>
        </Grid.Col>
        <Grid.Col span={7}>
          <br />
          <Table horizontalSpacing="sm" striped withBorder>
            <Title order={3} align="left" color="orange.4">Nuestras propiedades en zona industrial</Title>
            <ScrollArea style={{ height: 200 }} scrollbarSize={30}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">ubicacion</th>
                  <th scope="col">publicado</th>
                  <th scope="col">sitio</th>
                </tr>
              </thead>
              <tbody>
                {
                  // dataVivanuncios para mostrar el main
                  // postsVivanuncios para mostrar la appi que se esta ejecutando
                  responseIndustrial.map((d) => (
                    <tr key={d.compra_renta}>
                      <td align="left">{d.compra_renta}</td>
                      <td align="left" >{d.tipo}</td>
                      <td align="left" >{d.precio}</td>
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.publicado}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={5}>
          <Turistica></Turistica>
        </Grid.Col>
        <Grid.Col span={7}>
          <br />
          <Table horizontalSpacing="sm" striped withBorder>
            <Title order={3} align="left" color="orange.4">Nuestras propiedades en zona turistica</Title>
            <ScrollArea style={{ height: 200 }} scrollbarSize={30}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">ubicacion</th>
                  <th scope="col">publicado</th>
                  <th scope="col">sitio</th>
                </tr>
              </thead>
              <tbody>
                {
                  // dataVivanuncios para mostrar el main
                  // postsVivanuncios para mostrar la appi que se esta ejecutando
                  responseTurismo.map((d) => (
                    <tr key={d.compra_renta}>
                      <td align="left">{d.compra_renta}</td>
                      <td align="left" >{d.tipo}</td>
                      <td align="left" >{d.precio}</td>
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.publicado}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={5}>
          <Metropolitana></Metropolitana>
        </Grid.Col>
        <Grid.Col span={7}>
          <br />
          <Table horizontalSpacing="sm" striped withBorder>
            <Title order={3} align="left" color="orange.4">Nuestras propiedades en zona metropolitana</Title>
            <ScrollArea style={{ height: 200 }} scrollbarSize={30}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">ubicacion</th>
                  <th scope="col">publicado</th>
                  <th scope="col">sitio</th>
                </tr>
              </thead>
              <tbody>
                {
                  // dataVivanuncios para mostrar el main
                  // postsVivanuncios para mostrar la appi que se esta ejecutando
                  responseMetropol.map((d) => (
                    <tr key={d.compra_renta}>
                      <td align="left">{d.compra_renta}</td>
                      <td align="left" >{d.tipo}</td>
                      <td align="left" >{d.precio}</td>
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.publicado}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>
        </Grid.Col>
      </Grid>

      <div>
        <a id='Data'> Apartado de Analisis de Datos para All Property </a>
        <h6> Considero que es positivo para la empresa saber que rangos de precios se manejan en su pagina y a comparacion de otros
          sitios que tan frecuente se utiliza la plataforma.
        </h6>
      </div>
      <Title order={2} color='orange.4'>
        Rango de precios en base al numero de recamaras por propiedad.
      </Title>
      <Group position="center">
        <img src={ppr} />
        <Center>
          <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
            <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
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
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.superficie}</td>
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>

        </Center>
      </Group>
      <Title order={2} color='orange.4'>
        Numero de Publicaciones en los ultimos dias por Sitio.
      </Title>
      <Group>
        <img src={ppt} />
      </Group>
      <Center>
        <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
          <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
            <thead>
              <tr>
                <th scope="col">Compra / Renta</th>
                <th scope="col">descripcion</th>
                <th scope="col">precio</th>
                <th scope="col">recamaras</th>
                <th scope="col">ubicacion</th>
                <th scope="col">sitio</th>
              </tr>
            </thead>
            <tbody>
              {
                dataLamudi.map((d) => (
                  <tr key={d.compra_renta}>
                    <td align="left">{d.compra_renta}</td>
                    <td align="left" >{d.tipo}</td>
                    <td align="left" >{d.precio}</td>
                    <td align="left" >{d.recamaras}</td>
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
                <th scope="col">descripcion</th>
                <th scope="col">precio</th>
                <th scope="col">recamaras</th>
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
                    <td align="left" >{d.municipio}</td>
                    <td align="left" >{d.sitio}</td>
                  </tr>
                ))}
            </tbody>
          </ScrollArea>
        </Table>
      </Center>
      <Group>
        <Group>
          <img src={ppt} />
        </Group>
        <Center>
          <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
            <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
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
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>
        </Center>
      </Group>
    </div>

  );
}

export default App
