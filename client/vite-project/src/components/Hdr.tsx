import { Header, Image, Grid, Paper } from "@mantine/core";
import ap from './all.png'


export function Heade() {
    return (
        <>
            <div>
                <Header height={100}>
                    <Image
                        width={433}
                        height={90}
                        src={ap} />
                </Header>
            </div>
            <Grid>
                <Grid.Col span={6}>
                    <a href="#usuario">Apartado de mejora de experiencia para el usuario</a>
                </Grid.Col>
                <Grid.Col span={6}>
                    <a href="#DA">Apartado de Analisis de Datos para All Property</a>
                </Grid.Col>
            </Grid>
        </>
    )
}