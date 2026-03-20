import { ReactNode } from "react";
import BottomNav from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto relative">
      <main className="px-4 pt-4 pb-24">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
