import React from 'react'
import { Pagination } from 'react-bootstrap'


export default function GamesPagination({ page, setPage, hasNextPage }) {
return(
    <Pagination>
         <Pagination.Item onClick={() => setPage(0)}>1</Pagination.Item>
    </Pagination>
)
}