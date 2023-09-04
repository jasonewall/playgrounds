import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Menu, { MenuItem } from './components/Menu';
import UseQueryAsStore from './demos/UseQueryAsStore';

function App() {
  const queryClient = new QueryClient();

  const views: MenuItem<() => JSX.Element>[] = [
    {
      description: 'Use Query As Store Demo',
      value: UseQueryAsStore,
    }
  ]

  const [view, setView] = useState(-1);

  const CurrentView = views[view]?.value;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>React Playground</h1>

        <Menu onClick={setView} items={views} />

        {CurrentView && (<CurrentView />)}
      </QueryClientProvider>
    </>
  )
}

export default App;
