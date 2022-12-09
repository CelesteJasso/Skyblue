import { Table, Grid, Space, Button, Title, TextInput, ScrollArea, Center } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { useReactTable } from '@tanstack/react-table'

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
    // Cuando quiera leer un py de un sitio en particular se cambia el data por posts y no se filtra

    let dataAllProperty = posts.filter(e => e.sitio == 'AllProperty')
    let dataVivanuncios = posts.filter(e => e.sitio == 'Vivanuncios')
    let dataFlat = posts.filter(e => e.sitio == 'Flat')
    let dataREMAX = posts.filter(e => e.sitio == 'REMAX')

    return (
        <>
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
                                // dataVivanuncios para mostrar el main
                                // postsVivanuncios para mostrar la appi que se esta ejecutando
                                dataVivanuncios.map((d) => (
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
                                dataREMAX.map((d) => (
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

        </>

    );
}

export default App
