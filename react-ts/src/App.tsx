import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Menu, { MenuItem } from '@components/Menu';
import UseQueryAsStore from '@demos/UseQueryAsStore';
import ShoppingCart from '@demos/ShoppingCart';

function App() {
  const queryClient = new QueryClient();

  const views: MenuItem<() => JSX.Element>[] = [
    { description: 'Use Query As Store Demo', value: UseQueryAsStore },
    { description: 'Shopping Cart', value: ShoppingCart },
  ]

  const [view, setView] = useState(-1);

  const CurrentView = views[view]?.value;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1>React Playground</h1>

        <Menu onClick={setView} items={views} selected={view} />

        {CurrentView && (<CurrentView />)}
      </QueryClientProvider>
    </>
  )
}

export default App;
