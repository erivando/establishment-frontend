import React from 'react'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'ab18n'
import Routes from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <LocaleProvider>
        <Routes />
      </LocaleProvider>
    </Provider>
  );
}

export default App;
