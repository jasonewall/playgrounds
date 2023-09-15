import TimeZone from "@dtos/TimeZone";
import serviceRegistry from "./registery";

export interface TimeZoneService {
    getTimeZoneList(): Promise<TimeZone[]>;
}

const timeZoneList = [
    'America/Edmonton',
    'America/New_York',
].map(tzName => new TimeZone(tzName));

export class TimeZoneServiceImpl implements TimeZoneService {
    getTimeZoneList(): Promise<TimeZone[]> {
        return new Promise((resolve) => {
            console.log("NETWORK: Fetching time zone list");
            setTimeout(() => {
                resolve(timeZoneList);
                console.log("NETWORK: Timezones fetched.");
            }, 2000);
        });

    }
}

const timeZoneServiceKey = 'timeZoneService';

serviceRegistry.register(timeZoneServiceKey, new TimeZoneServiceImpl());

export default timeZoneServiceKey;
