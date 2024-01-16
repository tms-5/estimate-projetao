import '../ui/global.scss';
import '../ui/utils.scss'; 

export const metadata = {
  title: "EstiMate Dev",
  description: "A place to estimate dev efforts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="../../public/logomarca.png"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
