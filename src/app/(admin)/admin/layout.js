
import "../../globals.css";


export const metadata = {
  title: "Auth App",
  description: "Oxygen Foundation Signup/Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
