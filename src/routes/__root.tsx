import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'All Elite Detailing LLC | Premium Car Detailing in Roseville, MI' },
      { name: 'description', content: 'Roseville, MI premier car detailing service. Expert interior & exterior detailing by Joe and Matt. Book your appointment today!' },
      { name: 'keywords', content: 'car detailing, auto detailing, Roseville MI, Detroit car detailing, All Elite Detailing' },
      { property: 'og:title', content: 'All Elite Detailing LLC | Premium Car Detailing' },
      { property: 'og:description', content: 'Roseville, MI premier car detailing service. Expert interior & exterior detailing.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap' },
    ],
  }),
  notFoundComponent: () => <div>Route not found</div>,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-neutral-950 text-white antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}