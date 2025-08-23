import Footer from './components/Footer';
import Header from './components/Header';
import WalletPage from './components/wallet-balance';

function App() {
  return (
    <main className="grid min-h-svh grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="p-4">
        <WalletPage />
      </div>
      <Footer />
    </main>
  );
}

export default App;
