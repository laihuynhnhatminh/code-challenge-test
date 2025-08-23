import viteLogo from '/vite.svg';

function App() {
  return (
    <main className="grid min-h-svh grid-rows-[auto_1fr_auto]">
      <header className="flex items-center gap-4 p-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
      </header>
      <main className="px-4">
        <h1 className="font-bold text-3xl underline">Hello Vite + React!</h1>
      </main>
      <footer className="p-4">
        <p className="text-gray-500 text-xs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </main>
  );
}

export default App;
