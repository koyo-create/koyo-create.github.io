'use client'
import Link from "next/link";
import Header from "../compornents/Header";

export default function InvestmentTrust() {
  return (
    <>
      <Header />
      <section>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-medium mt-20 mb-10">
              投資信託について
            </h1>
            <p className="mb-4 text-xl">
              初心者にも始めやすい投資信託とは
              <br />
              投資家から得たお金を投資の専門家がそれらの資産をまとめ投資する仕組みとなっています。
            </p>
            <p className="my-10 text-xl">
              投資先は投資の専門家が考え、一つの銘柄だけでなく様々な銘柄に投資します。
              <br />
              様々な銘柄に投資することで分散投資にもなり安定した資産運用ができます。
            </p>
            <div className="container mx-auto max-w-lg ">
              <img src="./img/投資信託について.avif" />
              <p className="mt-4">
                <Link href="https://www.nikkei.com/article/DGXZQOUB17A4Y0X10C23A4000000/">
                  引用元: 日本経済新聞
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-medium mt-20 mb-10">
              みんなが購入している投資信託
            </h1>
            <p className="mb-4 text-xl">
              どの投資信託を購入しているか迷っている人は
              <br />
              証券会社が公表している投資信託の購入ランキングを見てみましょう！
            </p>
            <p className="my-10 text-xl">
              1位と3位は「S&P500」と呼ばれるアメリカの主要500社に投資しており
              <br />
              2位は「オールカントリー」全世界の株式に投資ができる投資信託となっています。
            </p>
            <div className="container mx-auto max-w-3xl ">
              <img src="./img/投資信託ランキング.png" />
              <p className="mt-4">
                <Link href="https://www.rakuten-sec.co.jp/web/fund/find/ranking/ranking.html?term=m&target=all&age=all&x=71&y=12&type=500034&freqid=3&tget=1&group=all">
                  引用元: 楽天証券
                </Link>
              </p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium mt-20 mb-10">
              S&P500の主要な投資先
            </h2>
            <p className="my-10 text-xl">
              みなさんが普段使っている製品やサービスを提供している会社が上位を占めています。
              <br/>
              今後もアメリカの企業が伸びていくと思う人向けの投資信託です。
            </p>
            <div className="container mx-auto max-w-3xl ">
              <img src="./img/S&P500構成銘柄.png" />
              <p className="mt-4">
                <Link href="https://www.am.mufg.jp/pdf/koumokuromi/253266/253266_20240725.pdf?_gl=1*9b237i*_gcl_au*ODA2ODM2MTkxLjE3MTk4NDA3NTE.*_ga*MjExOTIyOTEzNC4xNzE5ODQwNzUx*_ga_3ZNV996Y9H*MTcyMzAzMzI1OC4zLjEuMTcyMzAzMzI4Ni4zMi4wLjA.&_fsi=jzWXfSEh">
                  引用元: 三菱UFJアセットマネジメント
                </Link>
              </p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-medium mt-20 mb-10">
              オールカントリーの主要な投資先
            </h2>
            <p className="my-10 text-xl">
              アメリカ・日本・イギリスなどの先進国の他、新興国などの企業に分散した投資信託となっています。
              <br/>
              アメリカだけでなく日本などの先進国にも分散投資したい人向けの投資信託です。
            </p>
            <div className="container mx-auto max-w-2xl ">
              <img src="./img/全世界株式投資比率.png" />
              <p className="mt-4">
                <Link href="https://www.am.mufg.jp/pdf/koumokuromi/253425/253425_20240725.pdf?_gl=1*66mhtr*_gcl_au*ODA2ODM2MTkxLjE3MTk4NDA3NTE.*_ga*MjExOTIyOTEzNC4xNzE5ODQwNzUx*_ga_3ZNV996Y9H*MTcyMzA2NjQxOC40LjEuMTcyMzA2NjQ0OC4zMC4wLjA.&_fsi=jzWXfSEh">
                  引用元: 三菱UFJアセットマネジメント
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-medium mt-20 mb-10">
              知っておきたい『複利』
            </h1>
            <p className="mb-4 text-xl">
              投資をする上で『複利』を学ぶことは重要なことです。
              <br/>
              運用で得た利益を元本にプラスして再投資し、その合計金額をもとに利益を得ることを言います。
            </p>
            <p className="my-10 text-xl">
               S&P500は年平均リターンは約１０％・オールカントリーは年平均リターン約７％となっております。
               </p>

               <p className="my-10 text-xl">
              また、「７２の法則」　（72÷金利（％）＝投資期間）を用いることで
              <br/>
              元本が２倍になるまでの期間を求めることができます。
              </p>

              <p className="my-10 text-xl">
              <br/>
              オールカントリーで考えた場合、約１０年で２倍となり、
              <br/>
              ２０年で４倍、３０年で８倍、４０年で１６倍となります。
            </p>
            <div className="container mx-auto max-w-xl ">
              <img src="./img/複利計算.png" />
              <p className="mt-4">
                <Link href="https://www.am-one.co.jp/shisankeisei/simulation.html">
                  引用元:資産運用かんたんシミュレーション
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
