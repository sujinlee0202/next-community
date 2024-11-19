type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <main className="font-scdream">
      <section>content layout {children}</section>
    </main>
  );
}
