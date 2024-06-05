import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
    {key: 'all', text: 'Tất cả', value: 'all'}
]

export default function EmployeesFilter() {
    return (
        <Dropdown
            fluid
            search
            multiple
            selection
            options={options}
        />
    );
}
