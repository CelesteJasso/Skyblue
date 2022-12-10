import { Table, Grid, Title, ScrollArea, Center, Header, Paper } from '@mantine/core';
import { useState, useEffect } from 'react';
import zim from './components/zimonterrey.jpg'
import zip from './components/zipesqueria.jpg'
import zis from './components/zisanpedro.jpg'
import ztb from './components/ztbustamante.jpg'
import ztm from './components/ztmonterrey.jpg'
import zts from './components/ztsantacata.jpg'
import zmm from './components/zmmonterrey.jpg'
import zmsp from './components/zmsanpedro.jpg'
import zmsn from './components/zmsannicolas.jpg'
import ppr from './components/Preciosporrecamaras.png'
import ppt from './components/publicacionesportiempo.png'
import { Image } from '@mantine/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heade } from './components/Hdr';

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
  const municipioIndustrial = ['San Nicolás', 'san nicolas', 'Salinas Victoria', 'García', 'garcia', 'Montemorelos', 'Monterrey', 'Pesquería', 'pesqueria', 'apodaca', 'santa catarina']

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
        <Grid.Col span={1}>
          <br />
        </Grid.Col>
        <Grid.Col span={5}>
          <div>
            <Title order={1}>Zona Industrial</Title>
            <Paper shadow="xl" radius="lg" p="md" component="a" href="https://mantine.dev/core/">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d460347.9776983164!2d-100.84060681830245!3d25.655757411671814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szonas%20industriales!5e0!3m2!1ses-419!2smx!4v1670457425029!5m2!1ses-419!2smx" width="390" height="300"></iframe>
            </Paper>
          </div>
        </Grid.Col>
        <Grid.Col span={5}>
          <div>
            <Center>
              <Carousel width={33} >
                <div>
                  <img src={zim} />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={zip} />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={zis} />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </Center>
          </div>
          <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
            <Title order={3} align="center">Nuestras propiedades en esta zonas</Title>
            <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">baños</th>
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
                      <td align="left" >{d.banios}</td>
                      <td align="left" >{d.municipio}</td>
                      <td align="left" >{d.publicado}</td>
                      <td align="left" >{d.sitio}</td>
                    </tr>
                  ))}
              </tbody>
            </ScrollArea>
          </Table>
        </Grid.Col>
        <Grid.Col span={1}>
          <br />
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={1}>
          <br />
        </Grid.Col>
        <Grid.Col span={5}>
          <div>
            <Title order={1}>Zona Turistica</Title>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d230186.01718702106!2d-100.44318486577733!3d25.64952302973048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szona%20turistica%20Nuevo%20Leon%20!5e0!3m2!1ses-419!2smx!4v1670457809474!5m2!1ses-419!2smx" width="200" height="200"></iframe>
          </div>
        </Grid.Col>
        <Grid.Col span={1}>
          <br />
        </Grid.Col>
        <Grid.Col span={5}>
          <div>
            <Center>
              <Carousel width={33}>
                <div>
                  <img src={ztb} />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={ztm} />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={zts} />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
            </Center>
          </div>
          <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
            <Title order={3} align="center">Nuestras propiedades en esta zonas</Title>
            <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">baños</th>
                  <th scope="col">ubicacion</th>
                  <th scope="col">publicado</th>
                  <th scope="col">sitio</th>
                </tr>
              </thead>
              <tbody>
                {
                  responseTurismo.map((d) => (
                    <tr key={d.compra_renta}>
                      <td align="left">{d.compra_renta}</td>
                      <td align="left" >{d.tipo}</td>
                      <td align="left" >{d.precio}</td>
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.banios}</td>
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
        <Grid.Col span={1}>
          <br />
        </Grid.Col>
        <Grid.Col span={5}>
          <div>
            <Title order={1}>Zona Metropolitana</Title>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919504.9352694642!2d-100.8345519951666!3d25.809638665936696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662a377e498af83%3A0xde5ad0f0777ed7c!2sZona%20metropolitana%20de%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1670457932270!5m2!1ses-419!2smx" width="200" height="200"></iframe>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <Center>
              <Carousel width={33}>
                <div>
                  <img src={zmm} />
                  <p className="legend">Monterrey</p>
                </div>
                <div>
                  <img src={zmsn} />
                  <p className="legend">San Nicolas</p>
                </div>
                <div>
                  <img src={zmsp} />
                  <p className="legend">San Pedro</p>
                </div>
              </Carousel>
            </Center>
          </div>
          <Title order={3} align="center">Nuestras propiedades en esta zonas</Title>
          <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
            <ScrollArea style={{ height: 250 }} scrollbarSize={15}>
              <thead>
                <tr>
                  <th scope="col">Compra / Renta</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">precio</th>
                  <th scope="col">recamaras</th>
                  <th scope="col">baños</th>
                  <th scope="col">ubicacion</th>
                  <th scope="col">publicado</th>
                  <th scope="col">sitio</th>
                </tr>
              </thead>
              <tbody>
                {
                  responseMetropol.map((d) => (
                    <tr key={d.compra_renta}>
                      <td align="left">{d.compra_renta}</td>
                      <td align="left" >{d.tipo}</td>
                      <td align="left" >{d.precio}</td>
                      <td align="left" >{d.recamaras}</td>
                      <td align="left" >{d.banios}</td>
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
        <h3> Apartado de Analisis de Datos para All Property </h3>
        <h6> Considero que es positivo para la empresa saber que rangos de precios se manejan en su pagina y a comparacion de otros
          sitios que tan frecuente se utiliza la plataforma.
        </h6>
      </div>
      <Grid>
        <Grid.Col span={3}>
          <div>
            <h3>
              Rango de precios en base al numero de recamaras por propiedad.
            </h3>
            <img src={ppr} />
          </div>
        </Grid.Col>
        <Grid.Col span={7}>
          <Center>
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
                    dataAllProperty.map((d) => (
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

          </Center>
        </Grid.Col>
        <Grid.Col span={6}>
          <div>
            <h3>
              Numero de Publicaciones en los ultimos dias por Sitio.
            </h3>
            <img src={ppt} />
          </div>
        </Grid.Col>

        <Grid.Col span={3}>
          <Center>
            <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
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

                    dataLamudi.map((d) => (
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

          </Center>
        </Grid.Col>

        <Grid.Col span={3}>
          <Center>
            <Table captionSide="top" horizontalSpacing="xl" striped highlightOnHover>
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

          </Center>
        </Grid.Col>
      </Grid>
    </div>

  );
}

export default App
