import React from "react";

import { LifeLineProps } from './life-line.types'
import { StyledLifeLine } from './life-line.styled'
import Life from '../life'

const LifeLine: React.FC<LifeLineProps> = (props) => {
    const {
        fiftyFifty = true,
        plusTenSec = true,
    } = props;

    return (
        <StyledLifeLine>
            <Life hasLife={fiftyFifty} />
            <Life hasLife={plusTenSec} />
        </StyledLifeLine>
    )
};

export default LifeLine;
