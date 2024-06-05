import React from 'react';
import { Header, Image, Table } from 'semantic-ui-react';

export type PropsType = {
    employees: {
        id: string,
        uuid: string,
        name: string,
        title: string
    }[]
}

export default function Employees({
    employees
} : PropsType) {
    return (
        <Table celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Nhân viên</Table.HeaderCell>
                    <Table.HeaderCell>Số lượng việc cần duyệt</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {employees.map(employee => (
                    <Table.Row key={employee.uuid}>
                        <Header as='h4' image>
                            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                            <Header.Content>
                                {employee.name}
                                <Header.Subheader>{employee.title}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}
