"use client";
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext("");

interface SearchProviderProps {
  children: React.ReactNode;
  initialValue?: string;
}

interface SearchContextValueType {
  text: string;
  resetText: () => void;
  setText: (text: string) => void;
  // Add any other values you want to pass here
}

export function SearchProvider({
  children,
  initialValue = "",
}: SearchProviderProps) {
  const [text, setText] = useState<string>(initialValue);

  const resetText = () => {
    setText("");
  };

  const SearchContextValue: SearchContextValueType = {
    text,
    resetText,
    setText,
    // Add any other values you want to pass here
  };

  return (
    <SearchContext.Provider value={SearchContextValue as any}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}
