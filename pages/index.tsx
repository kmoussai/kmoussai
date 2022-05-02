import Head from "next/head";
import Header from "../components/Header";

export default function Index() {
  return (
    <div
      className="flex flex-col"
      style={{ height: "100vh" }}
    >
      <Head>
        <title>Khalid MOUSSAID</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <div
        style={{ backgroundImage: "url(bg.webp)" }}
        className="flex bg-cover bg-center bg-no-repeat flex-grow border-2"
      >
        <div className="flex items-center justify-center flex-grow max-w-[50%]">
          Content goes Here
        </div>
      </div>
    </div>
  );
}
