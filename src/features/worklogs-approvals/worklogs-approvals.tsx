import React from 'react';
import Employees, { PropsType as EmployeesPropsType } from './employees/employees';
import EmployeesFilter from './employees-filters/employees-filters';
import Worklogs from './worklogs/worklogs';
import styles from './stylesheets.module.scss';

const employeesProps: EmployeesPropsType = {
    employees: [{
        id: '1',
        uuid: '11',
        name: 'Ai Ten Gi',
        title: 'Chuyen vien gi'
    },
    {
        id: '2',
        uuid: '12',
        name: 'Ai Ten Gi',
        title: 'Chuyen vien gi'
    }]
};

export default function WorklogsApprovals() {
    return (
        <div className={styles['container']}>
            <div className={styles['employees']}>
                <EmployeesFilter />
                <Employees {...employeesProps} />
            </div>
            <div className={styles['worklogs-approvals']}>
                <Worklogs />
            </div>
        </div>
    )
}
