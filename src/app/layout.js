import "./globals.css";
import "./calendar-styles.css";
import { Settings } from "luxon";

export default function RootLayout({ children }) {
  Settings.defaultLocale = "ja-JP"; // Set the locale

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
