export const UPDATE_JSON_DATA = 'UPDATE_JSON_DATA';
export const UPDATE_SELECTED_ROW = 'UPDATE_SELECTED_ROW';

export const updateJsonData = data => {
    return { type: UPDATE_JSON_DATA, payload: data };
}

export const updateSelectedRow = row => {
    return { type: UPDATE_SELECTED_ROW, payload: row };
}

export const getDurationHoursBetweenDates = (startDate, endDate) => {

    const [startDay, startMonth, startYear, startHour, startMin, startSec] = startDate.split(/[- /.:]/);
    const startDateObj = new Date(startYear, startMonth, startDay, startHour, startMin, startSec);

    const [endDay, endMonth, endYear, endHour, endMin, endSec] = endDate.split(/[- :/.]/);
    const endDateObj = new Date(endYear, endMonth, endDay, endHour, endMin, endSec);

    const diffDates = new Date(endDateObj - startDateObj).toISOString().substr(11, 8);

    return diffDates;
}

export const getAdditionalInformationByRow = row => {
    const HardCodedKeys = ['-ID', 'EventTarget', 'EventType', 'EventName', 'EventFrom', 'EventTo', 'EventChecked', 'key', 'DurationHours'];
    const additionalKeys = Object.keys(row).filter(key => !HardCodedKeys.includes(key));
    return additionalKeys.map(key => `${key}: ${row[key]}`).join(', ');
}