import { createStyles } from "@mantine/core";


const useStyles = createStyles(theme => ({
    wrapper: {
        minHeight: 900,
        backgroundSize: 'cover',
        backgroundImage:
            'url(/src/img/sportsman.jpg)',
    },
    form: {
        opacity: 0.9,
        margin: 200,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },
    form1: {
        opacity: 0.6,
        margin: 100,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },
    footer: {
        marginTop: 10,
    },
}))