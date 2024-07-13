"use client"
import { createContext,useContext } from "react";
import { useState } from "react";
const stepContext=createContext<any>(undefined);
export const StepContextWrapper=({
    children,
  }: {
    children: React.ReactNode;
  }) =>{
    const [step,setStep]=useState<any>(0);
    return(
        <stepContext.Provider value={{step,setStep}}>
            {children}
        </stepContext.Provider>
    )
}
export const useStepContext=()=>useContext(stepContext);