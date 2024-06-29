import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>Hello World</div>
      <div>
        <h2>
          <Link href="/list">List</Link>
        </h2>
      </div>
    </main>
  );
}
