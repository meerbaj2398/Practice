import { Children, createContext, useContext } from "react"

export const BioContext = createContext();

export const BioProvider=({children})=>{
    const myName = 'meer';
    const age = 23;
    console.log(children);

return (
    <BioContext.Provider value={{myName: myName, age: age}}>
        <children/>

    </BioContext.Provider>
);
};

export const useBioContext = ()=>{
    const context = useContext(BioContext);
    return context;
}
