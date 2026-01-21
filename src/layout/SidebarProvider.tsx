import React, { createContext, useContext, useEffect, useState } from "react";

export interface SidebarContextValue {
  isOpen: boolean;
  isDesktop: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export { SidebarContext };

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getIsDesktop = () => (typeof window !== "undefined" ? window.innerWidth >= 1024 : true); // lg breakpoint

  const [isDesktop, setIsDesktop] = useState<boolean>(getIsDesktop());
  const [isOpen, setIsOpen] = useState<boolean>(getIsDesktop());

  useEffect(() => {
    const handleResize = () => {
      const desktop = getIsDesktop();
      setIsDesktop(desktop);
      // Keep sidebar open on desktop, but do not force open on resize to desktop if user closed it explicitly
      if (desktop) setIsOpen(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

  return (
    <SidebarContext.Provider value={{ isOpen, isDesktop, open, close, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export function useSidebar() { // eslint-disable-line react-refresh/only-export-components
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    // Fallback: allow components to operate (no-op) when provider isn't present
    return {
      isOpen: true,
      isDesktop: true,
      open: () => {},
      close: () => {},
      toggle: () => {},
    } as SidebarContextValue;
  }
  return ctx;
}
