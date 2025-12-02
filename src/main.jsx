import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import '@styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext/ThemeProvider.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <BrowserRouter>
            <ThemeProvider defaultTheme="light" defaultBrand="default">
                <Provider store={store}>
                    <App />
                </Provider>
                <Toaster position="bottom-right" richColors closeButton />
            </ThemeProvider>
        </BrowserRouter>
    // </StrictMode>
);
