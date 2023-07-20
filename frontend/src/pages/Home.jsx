import { DesktopSecondaryColumn } from "../components";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full">
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full rounded-lg border-2 border-dashed border-red-200"></div>
              </div>
              {/* End main area */}
            </main>
            <aside className="relative hidden w-96 flex-shrink-0 overflow-y-auto border-l border-gray-300 xl:flex xl:flex-col">
              <div className="absolute inset-0 ">
                <div className="h-full rounded-lg">
                  <DesktopSecondaryColumn />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
