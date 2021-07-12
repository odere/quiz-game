import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button.view';
import { ButtonSize } from './button.types'


const onClick = () => console.log('Click!');

const Template: ComponentStory<typeof Button> = (args: any) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
    label: 'Button',
};

export const Primary = Template.bind({});

Primary.args = {
    label: 'Button',
    onClick,
    primary: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
    label: 'Button',
    onClick,
    primary: false,
};

export const Small = Template.bind({});

Small.args = {
    label: 'Button',
    onClick,
    size: ButtonSize.small,
};

export const Large = Template.bind({});

Large.args = {
    label: 'Button',
    onClick,
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
