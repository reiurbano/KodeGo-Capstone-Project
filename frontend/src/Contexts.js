import { createContext } from "react"

export const endpoint = "http://localhost/library-of-ruina/backend/";

export const SessionContext = createContext(null);
export const EndpointContext = createContext(null);
export const ListContext = createContext(null);
export const DeckContext = createContext(null);