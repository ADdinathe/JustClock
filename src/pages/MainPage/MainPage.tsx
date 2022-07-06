import * as React from 'react';

import './MainPage.module.scss';

const MainPage: React.FC = () => {
  return (
    <div styleName="main">
      <h1 styleName="main__title">Главная</h1>
    </div>
  );
};

export default React.memo(MainPage);
