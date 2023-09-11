import { useState } from 'react';
import TimeZoneSelect from '@components/TimeZoneSelect'
import useTimeZones from '@entities/useTimeZones';

function UseQueryAsStore() {
    const [timeZone, setTimeZone] = useState('');

    const { state } = useTimeZones();

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
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                {stattrs.map(attr => (
                    <tr key={attr}>
                        <td>{attr}</td>
                        <td>{state[attr].toString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default UseQueryAsStore;
