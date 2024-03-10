import "../styles/normalize.css"

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* aca podriamos agregar algun navbar o abajo del children algun footer */}
        {children}
      </body>
    </html>
  );
}
