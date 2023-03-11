
import React from 'react';
import { MailTwoTone } from '@ant-design/icons';

const Email = ({ row }) => {

    return (
        <>
            <h1>Email Event <MailTwoTone /></h1>
            <div className="margin-center">
                <div className="align-left">
                    <div><b>AttachmentCount : </b>{row.AttachmentCount}</div>
                    <div><b>CC : </b>{row.CC}</div>
                </div>
            </div>
        </>
    )
}

export default Email;