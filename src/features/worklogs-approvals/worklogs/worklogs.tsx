import React from 'react'
import { Button, Checkbox, Form, Icon, Input, Rating, Table, TextArea } from 'semantic-ui-react'
import { create } from 'zustand'

create((set, get, api) => ({
    worklogs: {
        byId: {},
        ids: []
    }
}));

export default function Worklogs() {
    
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Mô tả ngắn gọn</Table.HeaderCell>
                    <Table.HeaderCell>Thời gian thực hiện</Table.HeaderCell>
                    <Table.HeaderCell>Tiến độ</Table.HeaderCell>
                    <Table.HeaderCell>Trạng thái</Table.HeaderCell>
                    <Table.HeaderCell>Đánh giá</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Cell>Phat trien phan mem noi bo</Table.Cell>
                <Table.Cell>8</Table.Cell>
                <Table.Cell>Hoan thanh</Table.Cell>
                <Table.Cell>
                    <Button.Group>
                        <Button positive>Duyệt</Button>
                        <Button negative>Không duyệt</Button>
                    </Button.Group>
                </Table.Cell>
                <Table.Cell>
                    <Rating icon='heart' clearable maxRating={10} />
                    <Form>
                        <TextArea />
                    </Form>
                </Table.Cell>
            </Table.Body>
            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Button primary>Duyệt tất cả</Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}
