import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Carl Serquiña',
  description: 'Full Stack Software Engineer Portfolio',
  icons: {
    icon: '/faviconprofile.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
