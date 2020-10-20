import App from 'next/app'
import { TinaCMS, TinaProvider } from 'tinacms'
import { GithubClient, TinacmsGithubProvider, GithubMediaStore } from 'react-tinacms-github'

const isProduction = process.env.NODE_ENV === 'production'

export default function Site(props) {
  const github = new GithubClient({
    proxy: '/api/proxy-github',
    authCallbackRoute: '/api/create-github-access-token',
    clientId: process.env.GITHUB_CLIENT_ID,
    baseRepoFullName: process.env.REPO_FULL_NAME,
    authScope: isProduction ? 'repo' : 'public_repo',
  })
 
  const cms = new TinaCMS({
    enabled: props.pageProps.preview,
    apis: {
      github,
    },
    media: new GithubMediaStore(github),
    sidebar: props.pageProps.preview,
    toolbar: props.pageProps.preview,
  })

  const { Component, pageProps } = props

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={onLogout}
        error={pageProps.error}
      >
        <EditLink cms={cms} />
        <Component {...pageProps} />
      </TinacmsGithubProvider>
    </TinaProvider>
  )
}

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()

  if (resp.status == 200) window.location.href = window.location.pathname
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