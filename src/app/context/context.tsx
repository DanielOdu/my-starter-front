"use client";
import React, { createContext, useContext, useState } from "react";

const Context = createContext("");

interface ContextProviderProps {
  children: React.ReactNode;
  initialValue?: string;
  initialFilters?: string[] | null;
}

interface ContextValueType {
  text: string;
  resetText: () => void;
  setText: (text: string) => void;
  selectedCategories: string[] | null;
  setSelectedCategories: (selectedCategories: string[]) => void;
  resetFilters: () => void;

  // Add any other values you want to pass here
}

export function ContextProvider({
  children,
  initialValue = "",
  initialFilters = [],
}: ContextProviderProps) {
  const [text, setText] = useState<string>(initialValue);
  const [selectedCategories, setSelectedCategories] = useState<any[] | null>(
    initialFilters
  );

  const resetText = () => {
    setText("");
  };
  const resetFilters = () => {
    setSelectedCategories([]);
  };

  const ContextValue: ContextValueType = {
    text,
    resetText,
    setText,
    selectedCategories,
    setSelectedCategories,
    resetFilters,
    // Add any other values you want to pass here
  };

  return (
    <Context.Provider value={ContextValue as any}>{children}</Context.Provider>
  );
}

export function useSearchContext() {
  return useContext(Context);
}
