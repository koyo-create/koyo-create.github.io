'use client'
import Header from "../compornents/Header";
import Menu from "../compornents/Menu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  useEffect(() => {
    if (!user && !userSession) {
      router.push("/");
    }
  }, [user, userSession, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth); // サインアウトを待機
      sessionStorage.removeItem("user");
      router.push("/"); // サインアウト後にログイン画面へ遷移
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <div className="container mx-auto flex justify-center">
          <button
            className="bg-gray-300 p-4 rounded-lg"
            onClick={handleLogout} // ログアウト処理を呼び出し
          >
            Log Out
          </button>
        </div>
      </section>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-0">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

        <section className="text-gray-700">
          <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center">
            <main className="text-2xl sm:text-5xl font-semibold md:w-1/2 mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
              これからの
              <br />
              資産形成について
            </main>
            <div className="md:w-1/2 lg:max-w-lg">
              <img src="./img/main.jpeg" />
            </div>
          </div>
          <p className="text-center text-3xl font-bold">今すぐにでも始めるべきNISA制度</p>
          <p className="text-center text-xl mt-5">初心でも始めやすいNISAを活用した資産形成とは</p>
        </section>
        <Menu />
      </main>
    </>
  );
}

