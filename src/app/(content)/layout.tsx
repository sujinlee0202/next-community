import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <main className="font-pretendard">
      <Header />
      <section>content layout {children}</section>
    </main>
  );
}
