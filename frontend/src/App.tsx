import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

import { AppRouter } from "routing/AppRouter";
import { persistor, store } from "store";
import { GlobalStyles } from "styles/GlobalStyles";
import { theme } from "styles/theme";

const App: React.VFC = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <PersistGate loading={null} persistor={persistor}>
                            <GlobalStyles />
                            <AppRouter />
                        </PersistGate>
                    </ThemeProvider>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default App;
