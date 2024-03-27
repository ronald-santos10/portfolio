import { Archivo } from "next/font/google";
import "./globals.scss";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700']
});

export const metadata = {
  title: "Ronald Santos",
  description: "Ronald Santos, um estudante em desenvolvimento Front-End, com um forte interesse em JavaScript, TypeScript, React e React Native",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
