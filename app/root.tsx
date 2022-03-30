import reachDialogStyles from '@reach/dialog/styles.css'
import reachMenuStyles from '@reach/menu-button/styles.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { LinksFunction, MetaFunction } from 'remix'

import TopBar from './components/organisms/top-bar'
import baseStyle from './styles/base.css'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: reachDialogStyles },
  { rel: 'stylesheet', href: reachMenuStyles },
  { rel: 'stylesheet', href: baseStyle },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <TopBar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
