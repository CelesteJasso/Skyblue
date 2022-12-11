import { Header, Image, Grid, Paper, Group, Navbar, Center, Title } from "@mantine/core";
import ap from './logo.png'
import { createStyles } from "@mantine/core";

const useStyles = createStyles(theme => ({
    sticky: {
        position: 'fixed',
        top: 0,
        width: 100,
    },
    img: {
        width: 300,
        height: 100,
        radius: 'lg',
    },
}))

export function Heade() {
    const { classes } = useStyles();
    return (
        <>
            <div>
                <Navbar className={classes.sticky} height={50}>
                    <img className={classes.img} src={ap} />
                    <Group position="right" spacing="xs">
                        <a href="#User"><Title order={6} color='teal.3'> Data </Title> </a>
                        <a href="#User"><Title order={6} color='pink'> User </Title> </a>
                    </Group>
                </Navbar>
            </div>
        </>
    )
}