import React from 'react';
import useTimeZones from '../custom_hooks/entities/useTimeZones'

function TimeZoneSelect({ onChange, value }: {
    onChange: React.Dispatch<React.SetStateAction<string>>,
    value: string,
}) {
    const { data, isLoading, isSuccess }= useTimeZones();

    return (
        <select disabled={isLoading} value={value} onChange={e => onChange(e.target.value)}>
        { isLoading && (
            <option>Loading time zones...</option>
        )}

        { isSuccess && (
            <>
            {!value && (
            <option disabled value="">Please select time zone...</option>
            )}
            {data?.map((timeZone, index) => (
                <option
                    key={index}
                    value={timeZone.name}>
                        {timeZone.name}
                </option>
            ))}
            </>
        )}
        </select>
    )
}

export default TimeZoneSelect;
