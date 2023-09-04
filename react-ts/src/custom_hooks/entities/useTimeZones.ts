import { useQuery } from 'react-query';

export class TimeZone {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function getTimeZones(): Promise<TimeZone[]> {
    const timeZoneList = [
        'America/Edmonton',
        'America/New_York',
    ].map(tzName => new TimeZone(tzName));

    return new Promise<TimeZone[]>(resolve => {
        // simulate slow network traffic for loading state visibility
        console.log("Pretending to fetch...");
        setTimeout(() => {
            resolve(timeZoneList);
            console.log("Finished fetch");
        }, 2000);
    });
}

function useTimeZones() {
    const result = useQuery(
        'time-zone-list',
        getTimeZones,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    );
    return result;
}

export default useTimeZones;
