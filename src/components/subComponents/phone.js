import React from 'react';
import { PhoneTwoTone } from '@ant-design/icons';

const Phone = ({ row }) => {

    return (
        <>
            <h1>Phone Event <PhoneTwoTone /></h1>
            <div><b>Record File : </b>{row.RecordFile}</div>
        </>
    )
}

export default Phone;