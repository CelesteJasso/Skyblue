import { Center, Grid, ScrollArea, Table, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import zmm from './zmmonterrey.jpg'
import zmsp from './zmsanpedro.jpg'
import zmsn from './zmsannicolas.jpg'


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

export function Metropolitana() {
    return (
        <>
            <Grid>
                <Grid.Col span={1}>
                    <br />
                </Grid.Col>
                <Grid.Col span={5}>
                    <div>
                        <Title order={1}>Zona Metropolitana</Title>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d460347.9776983164!2d-100.84060681830245!3d25.655757411671814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1szonas%20industriales!5e0!3m2!1ses-419!2smx!4v1670457425029!5m2!1ses-419!2smx" width="400" height="330"></iframe>
                        <Carousel width={230} >
                            <div>
                                <img src={zmm} />
                                    // <p className="legend">Monterrey</p>
                            </div>
                            <div>
                                <img src={zmsp} />
                                <p className="legend">San Pedro</p>
                            </div>
                            <div>
                                <img src={zmsn} />
                                <p className="legend">San Nicolas</p>
                            </div>
                        </Carousel>
                    </div>
                </Grid.Col>
            </Grid>
        </>
    )
}