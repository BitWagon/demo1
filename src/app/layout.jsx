import "./globals.css";
import FloatingWhatsApp from "@/components/Floating/WhatsApp"; 

export const metadata = {
  title: "Your Business Solutions",
  description:
    "Business energy, connectivity, water and payment solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <FloatingWhatsApp />
      </body>
      
    </html>
  );
}