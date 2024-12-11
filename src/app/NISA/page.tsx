'use client'
import Link from "next/link";
import Header from "../compornents/Header";
import Image from "next/image";

export default function NISA() {
  return (
    <>
      <Header />
      <section>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-medium mt-20 mb-10">
              NISAとは
            </h1>
            <p className="mb-4 text-xl">
              現在、話題となっているNISAとは
              <br />
              2024年1月から始まった少額投資非課税制度という税制優遇のことです。
            </p>
            <p className="my-10 text-xl">
              通常、投資で得た利益に対して約20％の税金がかかりますが
              <br />
              NISA口座で投資した金融商品から得られる利益は非課税になるため世間で話題となっています。
            </p>
            <div className="container mx-auto max-w-4xl ">
            <Image
                src="/img/運用益非課税画像.jpg"
                alt="運用益非課税画像"
                width={100}
                height={100}
                layout="responsive"
              />
            <p className="mt-4"><Link href="https://www.fsa.go.jp/policy/nisa2/know/index.html">引用元: 金融庁 </Link></p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-32">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium mt-20">
              NISAの仕組みとは
            </h2>
            <p className="my-10 text-xl">NISAには、つみたて投資枠と成長投資枠の２つがあり
              <br/>
              最大１８００万円まで投資することが可能です。</p>
          <div className="container mx-auto max-w-2xl my-10">
            <Image
                src="/img/NISAについて.png"
                alt="NISAについて"
                width={100}
                height={100}
                layout="responsive"
              />
            <p className="mt-4"><Link href="https://www.fsa.go.jp/policy/nisa2/know/index.html">引用元: 金融庁 </Link></p>
            </div>
          </div>
      </section>
      <section>
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-medium mt-20">
            初心者が始めやすい投資信託
          </h3>
          <div>
          <p className="my-10 text-xl">
            NISAについて理解したら実際に投資を初めてみましょう。
            <br/>
            初心者にオススメなのは投資信託です。
            </p>
            <p className="text-xl">
            つみたて投資枠では投資信託というものに投資することができ
            <br/>
            金融機関によっては１００円単位から投資が可能であり
            <br/>
            初心者でもお試し気分で投資を始めることができます。
          </p>
          </div>
          <div className="container mx-auto max-w-2xl my-10">
            <Image
                src="/img/NISA画像.jpg"
                alt="NISAについて"
                width={100}
                height={100}
                layout="responsive"
              />
          </div>
        </div>
      </section>
    </>
  );
}
