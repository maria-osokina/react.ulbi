import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'AppLink',
};

export const Secondary = Template.bind({});
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'AppLink',
};

export const Red = Template.bind({});
Red.args = {
    theme: AppLinkTheme.RED,
    children: 'AppLink',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'AppLink',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'AppLink',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    theme: AppLinkTheme.RED,
    children: 'AppLink',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];