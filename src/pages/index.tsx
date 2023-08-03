import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>First Div</div>
      <div>Second Div</div>
    </div>
  );
}
