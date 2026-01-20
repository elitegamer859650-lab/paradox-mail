export const metadata = {
  title: 'Paradox Mail',
  description: 'Your secure futuristic mail service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
