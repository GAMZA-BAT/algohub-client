import { auth } from "@/auth";
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header session={session} />
        <QueryProvider>
          <SessionProvider session={session}>
              {children}
          </SessionProvider>
        </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
