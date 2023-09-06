import { useState } from 'react';
import TimeZoneSelect from '@components/TimeZoneSelect'
import useTimeZones from '@entities/useTimeZones';

function UseQueryAsStore() {
    const [timeZone, setTimeZone] = useState('');

    const q = useTimeZones();

    const stattrs = [
        'isSuccess',
        'isStale',
        'isLoading',
        'isFetching',
        'isFetched',
        'isRefetching',
        'isIdle',
        'isPlaceholderData',
    ];

    return (
    <>
        <TimeZoneSelect onChange={setTimeZone} value={timeZone}/>
        <TimeZoneSelect onChange={setTimeZone} value={timeZone}/>

        <p>Selected TimeZone: {timeZone}</p>

        <div>
            State:
            <table>
                <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                </tr>
                {stattrs.map(attr => (
                    <tr>
                        <td>{attr}</td>
                        <td>{q[attr].toString()}</td>
                    </tr>
                ))}
            </table>
        </div>
    </>
    )
}

export default UseQueryAsStore;
