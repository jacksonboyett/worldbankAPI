import React, { useState } from 'react';

interface DataProviderType {
  children: any;
}

const DataContext = React.createContext<any>(null);

let initialState = false;

const DataProvider = (props: DataProviderType) => {
  const [state, setState] = useState(initialState);

  return (
    <DataContext.Provider value={[state, setState]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
