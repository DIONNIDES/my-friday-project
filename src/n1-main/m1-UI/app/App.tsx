import React, {FC} from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Header} from '../header/Header';

type AppPropsType = {
  store:any
}
const App:FC<AppPropsType> = ({store}) => {
  return (
    <div className="App">
    <HashRouter>
      <Provider store={store}>
        логинизация
        регистрация
        профайл
        404 (можно застилизовать заранее)
        восстановление пароля
        ввод нового пароля
        тестовая - отобразить/продемонстрировать все SuperКопмоненты
        <Header />
      </Provider>
    </HashRouter>

    </div>
  );
}

export default App;
