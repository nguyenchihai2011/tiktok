import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './components/Layout';
import { publicRoutes } from './routes';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if (route.layout === null) Layout = Fragment;
                        else if (route.layout) Layout = route.layout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
