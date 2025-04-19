import "./globals.css";

export const metadata = {
  title: "Carl Serquiña",
  description: "Full Stack Web Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
