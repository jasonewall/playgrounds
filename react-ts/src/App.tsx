import { useState } from 'react';
import Menu, { MenuItem } from '@components/Menu';
import UseQueryAsStore from '@demos/UseQueryAsStore';
import ShoppingCart from '@demos/ShoppingCart';

function App() {

  const views: MenuItem<() => JSX.Element>[] = [
    { description: 'Use Query As Store Demo', value: UseQueryAsStore },
    { description: 'Shopping Cart', value: ShoppingCart },
  ]

  const [view, setView] = useState(-1);

  const CurrentView = views[view]?.value;

  return (
    <>
      <h1>React Playground</h1>

      <Menu onClick={setView} items={views} selected={view} />

      {CurrentView && (<CurrentView />)}
    </>
  )
}

export default App;
