import Header from "../compornents/Header"
import Link from "next/link";


export default function Securitiescompany() {
  return (
    <>
    <Header/>
    <section>
        <div className="container px-5 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-medium mt-20 mb-10">
              証券会社の選び方
            </h1>
            <p className="mb-4 text-xl">
              NISAについて学んだら証券口座を作成しましょう。
              <br />
              NISAにおける証券口座は『楽天証券』と『SBI証券』の２つが人気となっています。
            </p>
            <p className="my-10 text-xl">
              銀行に比べネット証券で開設するメリットがいくつかあります。
              <br />
              各会社により金融商品の取扱が異なり、
              <br/>
              ネット証券の方が多くの商品から選択することが可能です。
              <br />
              また、手数料もネット証券の方が安く、100円から投資することも可能です。
            </p>
            <div className="container mx-auto max-w-3xl ">
            <img src="./img/証券会社　投資信託取扱一覧.png" />
            <p className="mt-4"><Link href="https://www.tsumitatenisa.jp/contents/nn010.html">引用元: 新NISAナビ </Link></p>
            <div  className="my-10 text-xl">
            <p>
            銀行で開設することで対面で相談することができますが、
            <br/>
            ネット操作等ができるのであれば
            </p>
            <p className="my-10 text-3xl">
            『楽天証券』
            <br/>
            『SBI証券』
            </p>
            どちらかでの開設をおすすめします。
            </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}