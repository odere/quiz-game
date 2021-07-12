import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Life from './life.view';


const Template: ComponentStory<typeof Life> = (args: any) => <Life {...args} />;

export const Default = Template.bind({});

export const NoLife = Template.bind({});

NoLife.args = {
    hasLife: false,
};

export default {
    title: 'Components/Life',
    component: Life,
} as ComponentMeta<typeof Life>
