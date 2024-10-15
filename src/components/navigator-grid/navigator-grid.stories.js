import React from 'react'
import NavigatorGrid from './navigator-grid.component'

export default {
    title: 'Navigator-Grid',
    component: NavigatorGrid,
    argTypes: {
      inputValue: {
        control: {
          type: 'text',
        },
        defaultValue: '1,1 NORTH',
      }
    },
}

const Template = (args) => <NavigatorGrid {...args} />;

export const SuccessNavigation = Template.bind({});
SuccessNavigation.args = {
    inputValue: '1,1 NORTH'
};

export const ErrorNavigation = Template.bind({});
ErrorNavigation.args = {
    inputValue: '1,1 NO'
};

export const ManualNavigation = Template.bind({});
ManualNavigation.args = {};
