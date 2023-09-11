import React from 'react';
import useTimeZones from '@entities/useTimeZones'

function TimeZoneSelect({ onChange, value }: {
    onChange?: React.Dispatch<React.SetStateAction<string>>,
    value?: string,
}) {
    const { state, timeZones }= useTimeZones();
    const { isLoading, isSuccess } = state;

    return (
        <>
        <select disabled={isLoading} value={value} onChange={e => onChange && onChange(e.target.value)}>
        { isLoading && (
            <option>Loading time zones...</option>
        )}

        { isSuccess && (
            <>
            {!value && (
            <option disabled value="">Please select time zone...</option>
            )}
            {timeZones.map((timeZone, index) => (
                <option
                    key={index}
                    value={timeZone.name}>
                        {timeZone.name}
                </option>
            ))}
            </>
        )}
        </select>

        </>
    )
}

export default TimeZoneSelect;
