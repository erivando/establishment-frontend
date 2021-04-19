import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
// import './index.css';
import App from './App';
import { ConfigProvider } from 'antd'
import pt_BR from 'antd/lib/locale/pt_BR'
import * as ab18n from 'ab18n'
import locale from './ab18n/locale'

ab18n.config(locale)
ab18n.set('pt-BR')

ReactDOM.render(
  <ConfigProvider locale={pt_BR}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);