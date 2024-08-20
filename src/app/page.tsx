import Header from "./compornents/Header";
import Menu from "./compornents/Menu";

export default function Home() {
  return (
    <>
    <header>
      <Header />
    </header>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div> */}

      <section className="text-gray-700">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center">
        <main className="text-2xl sm:text-6xl font-semibold md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
        これからの
        <br />
        資産形成について</main>
        <div className="md:w-1/2 lg:max-w-lg"><img src="./img/main.jpeg" /></div>
        </div>
        <p className="text-center text-3xl font-bold">今すぐにでも始めるべきNISA制度</p>
        <p className="text-center text-xl mt-5">初心でも始めやすいNISAを活用した資産形成とは</p>
      </section>
    <Menu />
      
    {/* </main> */}
    </>
  );
}
