"use client"

import { ReactNode, createContext, useState } from "react"

export const Tabcontext = createContext({
    tab: 'rec',
    setTab:(value: 'rec'|'fol') => {},
});

type Props = {children: ReactNode};

export default function TabProvider( {children} : Props){
    const[tab, setTab] = useState('rec');

    return (
        <Tabcontext.Provider value = {{tab, setTab}}>
            {children}
        </Tabcontext.Provider>
    )
}