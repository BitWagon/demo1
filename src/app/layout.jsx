import "./globals.css";

export const metadata = {
  title: "Your Business Solutions",
  description:
    "Business energy, connectivity, water and payment solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}