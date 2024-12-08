import React from 'react';
import css from './App.module.css';
import { Header } from './Components/Layout/Header/Header';
import { Menu } from './Components/Layout/Menu/Menu';
import { Routing } from './Components/Layout/Routing/Routing';
import NotifyContext from './Context/NotifyContext';
import { Notify } from './Utils/Notify';
import { useSnackbar } from 'notistack';


function App() {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const notify = new Notify(enqueueSnackbar, closeSnackbar);

    return (
        <div className={css.App}>
                <NotifyContext.Provider value={notify}>
                    <aside>
                        <Menu />
                    </aside>
                    <header>
                        <Header />
                    </header>
                    <main>
                        <Routing />
                    </main>
                </NotifyContext.Provider>
        </div>
    );
}

export default App;
