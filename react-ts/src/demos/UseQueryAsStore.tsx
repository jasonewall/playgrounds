import { useState } from 'react';
import TimeZoneSelect from '../components/TimeZoneSelect'

function UseQueryAsStore() {
    const [timeZone, setTimeZone] = useState('');

    return (
    <>
        <TimeZoneSelect onChange={setTimeZone} value={timeZone}/>
        <TimeZoneSelect onChange={setTimeZone} value={timeZone}/>

        <p>Selected TimeZone:</p>
        <p>{timeZone}</p>
    </>
    )
}

export default UseQueryAsStore;
