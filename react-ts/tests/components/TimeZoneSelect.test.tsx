import '@testing-library/jest-dom';
import React from 'react';
import TimeZone from '@dtos/TimeZone';
import { describe } from '@jest/globals';
import timeZoneServiceKey, { TimeZoneService } from '@services/TimeZoneService';
import { mock } from 'jest-mock-extended';
import JestMockPromise from 'jest-mock-promise';
import { act, render, screen, waitFor } from '@testing-library/react';
import TimeZoneSelect from '@components/TimeZoneSelect';
import { QueryClient, QueryClientProvider } from 'react-query';
import serviceRegistry from '@services/registery';


describe('TimeZoneSelect', () => {
    it('should say "Loading time zones..." before the load promise is resolved', () => {
        const queryClient = new QueryClient();
        const timeZoneService = mock<TimeZoneService>();
        serviceRegistry.register(timeZoneServiceKey, timeZoneService);

        const promise = new JestMockPromise<TimeZone[]>();
        timeZoneService.getTimeZoneList.mockReturnValue(promise);

        render(<QueryClientProvider client={queryClient}>
            <TimeZoneSelect />
        </QueryClientProvider>);

        const loadingOption = screen.getByText('Loading time zones...');
        expect(loadingOption).toBeInTheDocument();

        act(() => {
            promise.resolve([
                'America/Edmonton',
                'America/New_York',
            ].map(tzName => new TimeZone(tzName)));
        });

        waitFor(() => expect(loadingOption).not.toBeInTheDocument());
    });
});
