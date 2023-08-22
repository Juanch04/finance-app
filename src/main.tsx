import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import router from './router'
import i18n from './i18n'
import './index.css'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={client}>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </ApolloProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
