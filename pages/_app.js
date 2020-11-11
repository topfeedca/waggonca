import Head from 'next/head'
import App from 'next/app'
import { TinaCMS, TinaProvider } from 'tinacms'
import {
  GithubClient,
  TinacmsGithubProvider,
} from 'react-tinacms-github'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const isProduction = process.env.NODE_ENV === 'production'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }  

 * {
   box-sizing: border-box;
 }
  
  body {
    width: 100vw;
    overflow-x: hidden;

    font-family: 'Roboto';
  }

  * {
    font-family: 'Roboto';
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .edit-link-wrapper {
    position: relative;
  }

  .edit-link-btn {
    position: absolute;
    top: 0;
    right: 0;
  }

  .edit-link-btn button {
    background: none;
    border-bottom: 1px solid transparent;
    border-left: 1px solid transparent;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    padding: 10px 18px;
    font-size: 12px;
    color: lightgray;
    border-radius: 4px;
    margin: 8px;
    font-weight: bold;
    transition: 0.2s;

    &:active,
    &:focus,
    &:hover {
      background: #ff4c49;
      border-bottom: 1px solid lightgray;
      border-left: 1px solid lightgray;
      border-top: 2px solid white;
      border-right: 2px solid white;
      color: #fefefe;
      box-shadow: 10px 10px 28px -8px rgba(0,0,0,0.74);
      outline: none;
    }

    &:active {
      background: #ed3434;
    }
  }
`

const theme = {
  colors: {
    primary: '#3dace4',
  },
}

export default class Site extends App {
  constructor(props) {
    super(props)

    const github = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME,
      authScope: 'public_repo'
    })

    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      apis: {
        github,
      },
      sidebar: props.pageProps.preview,
      toolbar: props.pageProps.preview,
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <TinaProvider cms={this.cms}>
            <TinacmsGithubProvider
              onLogin={onLogin}
              onLogout={onLogout}
              error={pageProps.error}
            >
              {!isProduction && (
                <div className="edit-link-wrapper">
                  <div className="edit-link-btn">
                  {/* <EditLink cms={this.cms} /> */}
                  </div>
                </div>
              )}
              <Component {...pageProps} />
            </TinacmsGithubProvider>
          </TinaProvider>
        </ThemeProvider>
      </>
    )
  }
}

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()
  
  if (resp.status == 200) {
    window.location.href = window.location.pathname
  }
  else throw new Error(data.message)
}

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}

export const EditLink = ({ cms }) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
    </button>
  )
}