'use client'
import { createContext, useState } from "react";

export const DateContext = createContext({
  date: new Date(),
  setDate: (date: Date) => {},
});

export function DateContextProvider({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState(new Date());

  const value = {
    date,
    setDate,
  };

  return (
    <DateContext.Provider value={value}>
      {children}
    </DateContext.Provider>
  );
}