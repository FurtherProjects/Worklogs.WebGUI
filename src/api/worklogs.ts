import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Worklog {
    uuid: string,
    title: string,
    description: string,
    department: {
        uuid: string,
        name: string
    },
    reviews: {
        by: {
            uuid: string,
            firstName: string,
            lastName: string
            title: string
        },
        rating: number,
        comment: string
    }[]
}

interface GetWorklogsResponse {
    data: Worklog[],
    pagination: {
        offset: number,
        limit: number
    }
}

interface GetWorklogsRequest {
    employeeUuid: string,
    pagination: {
        offset: number,
        limit: number
    }
}

interface CreateWorklogResponse {

}

interface CreateWorklogRequest {
    employeeUuid: string
}

