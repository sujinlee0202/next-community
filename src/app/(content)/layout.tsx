import Header from "../components/Header";
import Popular from "../components/Popular";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Readonly<Props>) {
  return (
    <main className="h-full font-pretendard">
      <Header />
      <div className="mx-auto flex h-full max-w-5xl">
        <section className="w-full px-2">{children}</section>
        <Popular />
      </div>
    </main>
  );
}
