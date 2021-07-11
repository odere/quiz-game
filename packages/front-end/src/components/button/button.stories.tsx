import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button.view';
import { ButtonSize } from './button.types'


const onClick = () => console.log('Click!');

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Button',
    onClick,
    primary: true,
    size: ButtonSize.small,
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'OK',
    onClick,
    primary: false,
    size: ButtonSize.large,
};

export default {
    title: 'Components/Button',
    component: Button,    
    argTypes: {
        size: {
            options: [ButtonSize.small, ButtonSize.large],
            control: { type: 'radio' }
        },
    },
} as ComponentMeta<typeof Button>
