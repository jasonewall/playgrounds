import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import TimeZoneSelect from './components/TimeZoneSelect'
import { useState } from 'react';

function App() {

  const queryClient = new QueryClient();

  const [timeZone, setTimeZone] = useState('');

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>React Playground</h1>

        <TimeZoneSelect onChange={setTimeZone} value={timeZone}/>
        <TimeZoneSelect onChange={setTimeZone} value={timeZone}/>

        <p>Selected TimeZone:</p>
        <p>{timeZone}</p>
      </QueryClientProvider>
    </>
  )
}

export default App;
