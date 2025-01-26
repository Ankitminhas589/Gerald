import { createContext } from 'react';

type ContextValues = {
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
};
export const DrawerProgressContext = createContext<ContextValues>({
  setDrawerState: () => {},
});
