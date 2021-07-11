import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LifeLine from './life-line.view';


const Template: ComponentStory<typeof LifeLine> = (args: any) => <LifeLine {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    fiftyFifty: true,
    plusTenSec: true,
};

export const HalfLife = Template.bind({});

HalfLife.args = {
    fiftyFifty: false,
    plusTenSec: true,
};

export const NoLife = Template.bind({});

NoLife.args = {
    fiftyFifty: false,
    plusTenSec: false,
};

export default {
    title: 'Components/LifeLine',
    component: LifeLine,
} as ComponentMeta<typeof LifeLine>
