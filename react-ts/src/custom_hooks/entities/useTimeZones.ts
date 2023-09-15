import TimeZone from '@dtos/TimeZone';
import timeZoneServiceKey, { TimeZoneService } from '@services/TimeZoneService';
import serviceRegistry from '@services/registery';
import { useQuery } from 'react-query';

function getTimeZones(): Promise<TimeZone[]> {
    return serviceRegistry.get<TimeZoneService>(timeZoneServiceKey).getTimeZoneList();
}

function useTimeZones() {
    const result = useQuery({
        queryKey: 'time-zone-list',
        queryFn: getTimeZones,
        cacheTime: Infinity,
        staleTime: Infinity,
    });
    return {
        state: result,
        timeZones: result.data ?? [],
    };
}

export default useTimeZones;
