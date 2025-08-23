import CurrencySwapPage from './components/currency-swap/currency-swap-page';
import Footer from './components/Footer';
import Header from './components/Header';
import { Input } from './components/ui/input';
import { ThemeProvider } from './lib/theme-provider';

/**
 * ThemeProvider from ShadCN + Vite configuration
 * @refer https://ui.shadcn.com/docs/dark-mode/vite
 */
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main
        className="grid min-h-svh grid-rows-[auto_1fr_auto] bg-primary-foreground"
        style={{
          backgroundImage: 'url(public/background.png)',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <div className="p-4">
          <CurrencySwapPage />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
