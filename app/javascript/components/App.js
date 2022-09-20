import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../redux/store';
import Greeting from './Greeting';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Greeting />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
