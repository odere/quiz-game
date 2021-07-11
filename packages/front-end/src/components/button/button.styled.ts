import styled from 'styled-components'

import { ButtonStyledProps, ButtonSize } from './button.types'

import {
    primary,
    primaryDark,
    secondary,
    secondaryDark,
} from '../../constants/colors';

export const StyledButton = styled.button`
    background: transparent;
    border: none;
    color: inherit;
    font-size: inherit;
    padding: 1em;
`;

export const StyledButtonContainer = styled.div`
    background: ${
        (props: ButtonStyledProps) => props.primary
            ? primaryDark
            : secondary
    };
    border-radius: .5em;
    color: white;
    display: inline-block;
    font-size: ${
        (props: ButtonStyledProps) => props.size === ButtonSize.small
            ? '1em'
            : '3em'
    };
    transition: 200ms;

    &:hover {
        background: ${
            (props: ButtonStyledProps) => props.primary
                ? primary
                : secondaryDark
        };
    }
`;
