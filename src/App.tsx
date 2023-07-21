import '@/styles/global.scss';
import { ConfigProvider } from 'antd';
import en from 'antd/lib/locale/en_US';
import jp from 'antd/lib/locale/ja_JP';
import { Routers } from './config';
import { useAuth, useClient, useTranslation } from './hooks';
import './i18n';

import { ApolloProvider } from '@apollo/client';
import { LANGUAGE } from './types';

function App() {
  const { i18n } = useTranslation();
  const client = useClient();
  useAuth();

  return (
    <ApolloProvider client={client}>
      <ConfigProvider locale={i18n.language.includes(LANGUAGE.en) ? en : jp}>
        <Routers />
      </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
