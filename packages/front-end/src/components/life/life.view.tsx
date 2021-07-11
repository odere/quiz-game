import React from "react";

import { StyledLife } from './life.styled'
import { LifeProps } from './life.types'

const Life: React.FC<LifeProps> = (props) => {
    const { hasLife = true } = props;

    return (
        <StyledLife hasLife={hasLife} />
    )
};

export default Life;
