import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
    const summary = useSelector(state => state.tableDataReducer.summary);

    return (
        <>
            {summary &&
                <>
                    <h1>Summary</h1>
                    <div className="margin-center">
                        <div className="align-left">
                            <div><b>Event Count : </b>{summary.eventCount}</div>
                            <div><b>Checked Event Count : </b> {summary.eventCheckedCount}</div>
                            <div><b>Maximum duplication : </b>{`${summary.maximumDuplication.type} ${summary.maximumDuplication.name}`}</div>
                            <div>{`exists ${summary.maximumDuplication.count} times`}</div>
                        </div>
                    </div> </>
            }
        </>
    );
};

export default Summary;