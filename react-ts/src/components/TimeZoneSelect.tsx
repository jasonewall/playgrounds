import useTimeZone from '../custom_hooks/entities/useTimeZones'

function TimeZoneSelect() {
    const { data, isLoading, isSuccess }= useTimeZone();

    return (
        <select disabled={isLoading}>
        { isLoading && (
            <option>Loading time zones...</option>
        )}

        { isSuccess &&
        data.map(timeZone =>
            <option value={timeZone.name}>{timeZone.name}</option>
        )}
        </select>
    )
}

export default TimeZoneSelect;
