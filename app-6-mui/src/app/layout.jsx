import Header from "@/components/header/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
