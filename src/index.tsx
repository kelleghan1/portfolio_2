import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

const apolloCLient = new ApolloClient<NormalizedCacheObject>({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloCLient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
