import React, { createContext } from "react";

const DataContext = createContext({
  folders: [],
  notes: [],
});

export default DataContext;
