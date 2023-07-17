import { useState } from "react";
import { Header, MobileMenu, Sidebar } from "../components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <div className="flex flex-1 flex-col overflow-hidden bg-gray-900">
          <Header setMobileMenuOpen={setMobileMenuOpen} />
          <div className="flex flex-1 items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <section
                aria-labelledby="primary-heading"
                className="flex h-full min-w-0 flex-1 flex-col lg:order-last"
              >
                <Outlet />
              </section>
            </main>
            <aside className="hidden w-96 overflow-y-auto border-l-2 border-gray-800 bg-gray-900 lg:block">
              {/* Your content */}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
