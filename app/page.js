import Image from "next/image";
import VisitorCounter from "./components/VisitorCounter";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <VisitorCounter />
    </main>
    </>
  );
}
