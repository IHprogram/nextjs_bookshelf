import { createContext, useState } from "react";

export const StateContext = createContext();

export default function StateContextProvider(props) {
  const [selectedBook, setSelectedBook] = useState({
    title: "",
    author: "",
    image: "",
    price: "",
    caption: "",
    itemUrl: ""
  });
  return (
    <StateContext.Provider
      value={{
        selectedBook,
        setSelectedBook
      }}>
      {props.children}
    </StateContext.Provider>
  )
}