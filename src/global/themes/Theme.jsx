import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
    colors: {

    },
    fonts: [],
    fontSizes: {
        tiny: '12px',
        extraSmall: '14px',
        small: '16px',
        medium: '22px',
        large: '35px',
        extraLarge: '60px',
    },
    fontWeight: {
        thin: '100',
        bold: '500',
        extraBold: '700'
    },
    fontAlign: {
        center: 'center',
        justify: 'justify',
        left: 'left',
    },
    borders: {
    },
    opacity: {
    }

}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)

Theme.propType = {
    children: PropTypes.element
}

export default Theme;
