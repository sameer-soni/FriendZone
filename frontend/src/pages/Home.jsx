// Define the Home component using a functional component
export default function Home() {
  return (
    <>
      {/* Main content area */}
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
        {/* Start main area*/}
        {/* An absolute positioned div that takes up the entire space */}
        {/* It creates a placeholder for the main content */}
        <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          {/* A div with a dashed red border, creating a placeholder */}
          {/* This is useful for previewing the layout or as a placeholder for actual content */}
          <div className="h-full rounded-lg border-2 border-dashed border-red-200" />
        </div>
        {/* End main area */}
      </main>
    </>
  );
}
