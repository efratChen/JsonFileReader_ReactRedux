import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UploadOutlined } from '@ant-design/icons';
import TableData from './TableData';
import Phone from './subComponents/phone';
import Email from './subComponents/email';
import { updateJsonData } from '../redux/actions';
import Summary from './summary';
import MenuNav from '../pages/menuNav'

const componentsByTypeObj = { Phone, "E-Mail": Email, 'SMS': () => <></> };

const TableAndCalculations = () => {
    // useDispatch - update the redux
    const dispatch = useDispatch();
    // useSelector - get data from redux
    const selectedRow = useSelector(state => state.tableDataReducer.selectedRow);
    let RelevantComponent = null;
    selectedRow && (RelevantComponent = componentsByTypeObj[selectedRow.EventType.replace(/\s/g, '')]);

    return (
        <>
            <MenuNav />
            <Summary />
            <Upload accept=".xml,.txt,.json" showUploadList={false}
                beforeUpload={file => {
                    const reader = new FileReader();
                    reader.onload = e => {
                        const results = e.target.result;
                        dispatch(updateJsonData(JSON.parse(results).Events.Event));
                    };
                    reader.readAsText(file);
                    return false;
                }}>
                <Tooltip placement="top" className="pointer" title="Upload file json/xml/txt">
                    <UploadOutlined />
                </Tooltip>
            </Upload>
            <TableData />
            {selectedRow && <RelevantComponent row={selectedRow} />}
        </>
    );
};

export default TableAndCalculations;