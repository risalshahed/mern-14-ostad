import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dynamic Portfolio",
  description: "My Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="bg-[#fafafa]">
        <Navbar />
        {/* Main Content */}
        <main>
          {children}
        </main>
        {/* Footer */}
      </body>
    </html>
  );
}
