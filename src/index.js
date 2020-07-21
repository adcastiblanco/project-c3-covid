import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redurces';

import App from './routes/App';

const initialState = {
  user: { id: null, username: null, email: null },
  apps: [
    {
      id: '1',
      appname: 'Configuración',
      enabled: true,
      icon: 'https://image.flaticon.com/icons/svg/427/427982.svg',
    },
    {
      id: '2',
      appname: 'Facturación',
      enabled: true,
      icon: 'https://image.flaticon.com/icons/svg/950/950258.svg',
    },
    {
      id: '3',
      appname: 'Compras',
      enabled: true,
      icon: 'https://image.flaticon.com/icons/svg/2036/2036896.svg',
    },
    {
      id: '4',
      appname: 'Producción',
      enabled: true,
      icon: 'https://image.flaticon.com/icons/svg/1839/1839372.svg',
    },
    {
      id: '5',
      appname: 'Inventarios',
      enabled: true,
      icon: 'https://image.flaticon.com/icons/svg/2825/2825621.svg',
    },
    { id: '6', appname: 'Inventarios', enabled: false, icon: '' },
    { id: '7', appname: 'Compras', enabled: false, icon: '' },
  ],
  startapp: {
    id: '1',
    appname: 'Configuración',
    icon: 'https://image.flaticon.com/icons/svg/427/427982.svg',
  },
  menuApp: [
    {
      app_id: '1',
      option1: [
        {
          option1_name: 'Configuración general',
          option1_menu: [{}],
        },
      ],
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
