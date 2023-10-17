"use client";
import { createContext, useCallback, useContext, useState } from "react";

const NavBarHeightContext = createContext(0);

export function NavBarHeightProvider({ children }) {
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [mobileNavBarHeight, setMobileNavBarHeight] = useState(0);

  // Define a function to update navBarHeight
  const updateNavBarHeight = useCallback((newHeight) => {
    setNavBarHeight(newHeight);
  }, []);

  const updateMobileNavBarHeight = useCallback((newHeight) => {
    setMobileNavBarHeight(newHeight);
  }, []);

  return (
    <NavBarHeightContext.Provider
      value={{
        navBarHeight,
        updateNavBarHeight,
        mobileNavBarHeight,
        updateMobileNavBarHeight,
      }}
    >
      {children}
    </NavBarHeightContext.Provider>
  );
}

export function useNavBarHeight() {
  return useContext(NavBarHeightContext).navBarHeight;
}

export function useUpdateNavBarHeight() {
  return useContext(NavBarHeightContext).updateNavBarHeight;
}
export function useMobileNavBarHeight() {
  return useContext(NavBarHeightContext).mobileNavBarHeight;
}

export function useUpdateMobileNavBarHeight() {
  return useContext(NavBarHeightContext).updateMobileNavBarHeight;
}
