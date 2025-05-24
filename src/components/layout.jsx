export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pastry Empire - Delight in every bite</title>
        <meta
          name="description"
          content="Discover the finest handcrafted pastries and cakes made with love and the finest ingredients."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
