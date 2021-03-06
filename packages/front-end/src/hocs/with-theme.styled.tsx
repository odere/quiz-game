import { createGlobalStyle } from 'styled-components'

import { primary } from '../constants/colors.constants'

export const GlobalStyle = createGlobalStyle`
    body {

        background: ${primary};
        margin: 0;
        color: white;
        font-size: 1.25rem;
        overflow: hidden;
    }

    #root {
        display: flex;
        min-height: 100vh;
    }
`
GlobalStyle.displayName = 'GlobalStyle'
