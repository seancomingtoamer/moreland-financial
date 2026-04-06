import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moreland Financial Services | Credit Repair & Financial Consulting in Atlanta",
  description:
    "Professional credit repair, tax preparation, and financial consulting services in Atlanta, GA. Led by Bishop Alonzo Moreland — trusted community leader, veteran, and financial advocate.",
  keywords: [
    "credit repair Atlanta",
    "financial consulting Atlanta",
    "tax preparation Atlanta",
    "Alonzo Moreland",
    "credit score improvement",
    "Grove Park Atlanta",
  ],
  openGraph: {
    title: "Moreland Financial Services",
    description: "Professional Credit Repair & Financial Consulting in Atlanta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {/* DEMO WATERMARK - Remove this block when client pays */}
        <div style={{position:'fixed',top:0,left:0,width:'100%',zIndex:9999,backgroundColor:'#ff0000',color:'#fff',textAlign:'center',padding:'10px 0',fontSize:'18px',fontWeight:'bold',letterSpacing:'2px'}}>
          DEMO SITE — NOT FOR COMMERCIAL USE
        </div>
        <div style={{position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%) rotate(-35deg)',zIndex:9998,fontSize:'120px',fontWeight:'900',color:'rgba(255,0,0,0.12)',pointerEvents:'none',userSelect:'none',letterSpacing:'20px',whiteSpace:'nowrap'}}>
          DEMO
        </div>
        {/* END DEMO WATERMARK */}
        {children}
      </body>
    </html>
  );
}
