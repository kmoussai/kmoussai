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
        style={{ backgroundImage: "url('bg.webp')" }}
        className={clsx(
          "flex",
          "flex-grow",
          "bg-cover",
          "bg-center",
          "flex-grow",
          "border-2 p-4",
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

      <div
        className=" flex-grow-0 grid gap-3 md:grid-cols-4 p-5"
        style={
          {
            // gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }
        }
      >
        {Array.from({ length: 20 }, (_, i) => `key ${i}`).map((item) => (
          <div
            key={item}
            className="border rounded-md shadow-md md:hover:shadow-lg transition-all md:hover:scale-105 flex flex-col p-2"
          >
            <div className="flex items-center gap-1">
              <div className="flex-grow">Title</div>
            </div>
            <div>Content index {item}</div>
            <div className="flex justify-end">
              <div
                className="w-[25px] h-[25px] rounded-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('nextjs.png')",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
