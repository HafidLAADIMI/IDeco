"use client"
import React, { createContext, useContext, useState } from "react";

interface FormData {
  language: string;
  userInformation: {
    nomPrenom: string;
    phoneNumber: string ;
    ville: string;
    addresse: string;
  };
  espace: string;
  color: string;
  customizedColor: string;
  style: string;
  format: string;
  hauteur: number ;
  largeur: number ;
  formatGeneratedByAi: string;
  cadre: string;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    language: "",
    userInformation: {
      nomPrenom: "",
      phoneNumber:"",
      ville: "",
      addresse: "",
    },
    espace: "",
    color: "",
    customizedColor: "",
    style: "",
    format: "",
    hauteur: 0,
    largeur: 0,
    formatGeneratedByAi: "",
    cadre: "",
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
