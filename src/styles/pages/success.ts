import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$ld',
        fontWeight: 'bold',
        color: '$green500',
        textDecoration: 'none',

        '&:hover': {
            color: '$green300'
        }
    },

})

export const ImageContainer = styled('div', {
    width: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 1000,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    marginLeft: -50,


    img: {
        objectFit: 'cover',
    }
})

export const ImageSectionContainer = styled('section', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 50,
    marginBottom: 48,
    
})