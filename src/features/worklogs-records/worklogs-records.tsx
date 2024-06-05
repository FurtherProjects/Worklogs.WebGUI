import React from 'react';
import { Form, Button, Input, TextArea, Dropdown } from 'semantic-ui-react';
import styles from './stylesheets.module.scss';

const divisions = [
    { key: 'crd', text: 'Trung tâm Nghiên cứu và Phát triển', value: 'crd' },
    { key: 'cipp', text: 'Trung tâm Đổi mới sáng tạo và Sản xuất thực nghiệm', value: 'cipp' }
]

const records = [
    {
        title: 'Phát triển phần mềm báo cáo công việc hằng ngày',
        description: 'Bla bla ...',
        rating: 5,
        comment: ''
    }
]

export default function WorklogsRecords() {
    return (
        <div className={styles['container']}>
            <h2>Ghi lại một công việc đã thực hiện</h2>
            <div className={styles['card-new']}>
                <label>Đơn vị nơi mà công việc được thực hiện</label>
                <Dropdown options={divisions} selection fluid />
                <label>Tên công việc hoặc mô tả vắn tắt về công việc</label>
                <Input />
                <label>Mô tả chi tiết hơn về công việc (nếu có)</label>
                <Form>
                    <TextArea />
                </Form>
                <div className={styles['card-actions']}>
                    <Button positive>Ghi nhận</Button>
                </div>
            </div>
            <h2>Các công việc đã ghi nhận lại</h2>
            {records.map(record => (
               <div className={styles['card']}>
                    <h3>{record.title}</h3>
                    <div className={styles['content']}>
                        {record.description}
                    </div>
                    <div className={styles['card-actions']}>
                        <Button negative onClick={() => alert('-_-')}>Xoa</Button>
                    </div>
                </div> 
            ))}
        </div>
    );
}
