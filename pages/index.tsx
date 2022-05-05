import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import clsx from "clsx";

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
        style={{ backgroundImage: "url('bg-min.png')" }}
        className={clsx(
          "flex",
          "bg-cover",
          "bg-center",
          "flex-grow",
          "border-2",
          // "bg-[url('bg-min.png')]",
          "bg-no-repeat",
          // "bg-profile",
        )}
      >
        <div
          style={{ maxWidth: "50%" }}
          className={clsx(
            "flex",
            "items-center",
            "justify-center",
            // "max-w-[50%]",
          )}
        >
          <div className={clsx("px-7")}>
            <h1
              style={{ fontSize: "3rem" }}
              className={clsx(
                "font-bold",
                "capitalize",
                // "text-[3rem]",
                "leading-tight",
                "text-sky-600",
                "mb-8",
              )}
            >
              I'm web developer, Khalid Moussaid
            </h1>
            <p
              style={{ fontSize: "16px" }}
              className={clsx(
                "mb-9",
                // "text-[16px]",
                "leading-8",
                "font-normal",
              )}
            >
              jhorem rfpsum golor sidt amet, consectetur adipiscing elit,
              eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida.
            </p>

            <div className={clsx("flex", "justify-around")}>
              <div className="flex items-center">
                <div className="rounded transition hover:bg-sky-600 bg-sky-500 py-2 px-3 text-white capitalize font-medium ">
                  <Link href="#contact">Hire me</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
