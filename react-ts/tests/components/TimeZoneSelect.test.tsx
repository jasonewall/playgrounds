import { describe } from '@jest/globals';
import { mock } from 'jest-mock-extended';
import JestMockPromise from 'jest-mock-promise';

class TimeZone {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

interface TimeZoneService {
    getTimeZoneList(): Promise<TimeZone[]>;
}

describe('TimeZoneSelect', () => {
    it('should say "Loading time zones..." before the load promise is resolved', () => {
        const timeZoneService = mock<TimeZoneService>();

        const promise = new JestMockPromise<TimeZone[]>();
        timeZoneService.getTimeZoneList.mockReturnValue(promise);
    });
});
