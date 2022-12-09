import { Center, Grid, ScrollArea, Table } from "@mantine/core"
import { useEffect, useState } from "react";

export function TablaAllproperty() {

    function Endpoint() {
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

        let dataAllProperty = posts.filter(e => e.sitio == 'AllProperty')

        return (
            <>
                <Grid>
                    <Grid.Col span={4}>

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


                    <Grid.Col span={4}>2</Grid.Col>
                </Grid>
            </>
        );
    }

