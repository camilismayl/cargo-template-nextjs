import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";

export default function Elaqe() {
    return <div>
        <Layout>

        </Layout>
        <Head>
            <title>Elaqe</title>
        </Head>
        <div className="px-4 mt-20 bo">
            <h3 className="text-center font-medium mb-3 text-red-500 text-xl"> Əlaqə melumatları
            </h3>
            <div className="flex p-2">
                <Image src="/image/placeholder.png" width="24" height="24"/>

                <h3 className="font-medium pl-2"> Nizami rayonu, Qara Qarayev prospekti 125A </h3>
            </div>
            <div className="p-2 flex">
                <Image src="/image/telephone.png" width="24" height="24"/>

                <h3 className="font-medium pl-2">055 876 43 80, 012 370 93 01</h3>
            </div>
            <div className="flex p-2">
                <Image src="/image/clock.png" width="24" height="24"/>

                <h3 className="font-medium pl-2">Həftə Içi / 09:00 - 19:00, Şənbə /09:00-15:00</h3>
            </div>
            <div>
                <h3 className="font-medium p-2 text-center text-red-500 text-xl"> Filiallar və təhvil məntəqələri
                </h3>

            </div>
            <div className="p-2 border-b">
                <h3 className="font-medium pb-3">XALQLAR Dostluğu Filialı
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> Nizami ry. Q.qarayev pr 125 A </h3>
                </div>
                <div className="flex ">

                    <h3 className="font-medium ">+994 12 370 93 01</h3>
                </div>
            </div>
            <div className="p-2 border-b">
                <h3 className="font-medium pb-3">ƏHMƏDLİ Təhvil Məntəqəsi
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> Poppy gallery ilə üzbəüz Kayu inkişaf mərkəzinin daxilində </h3>
                </div>
                <div className="flex ">

                    <h3 className="font-medium ">+994 55 464 33 94</h3>
                </div>
            </div>
            <div className="p-2 border-b">
                <h3 className="font-medium pb-3">GƏNCƏ Təhvil Məntəqəsi
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> GƏNCƏ şəh. Atatürk 251(Univermağın qarşısı VİP telekom içində
                        YENİKARGO təhvil məntəqəsi) </h3>
                </div>

            </div>
            <div className="p-2 border-b">
                <h3 className="font-medium pb-3">MİNGƏCEVİR Təhvil Məntəqəsi
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> Mingəcevir şəh. H.Eliyev pr 226 (Superfon yani, YENİKARGO təhvil
                        məntəqəsi) </h3>
                </div>

            </div>
            <div className="p-2 border-b">
                <h3 className="font-medium pb-3">LƏNKƏRAN Təhvil Məntəqəsi
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> LƏNKƏRAN şəh. Tofiq İsmayılov küç. (Polis idarəsinin qarşısı,
                        YENİKARGO təhvil məntəqəsi) </h3>
                </div>

            </div>
            <div className="p-2 border-b">
                <h3 className="font-medium pb-3">XIRDALAN Təhvil Məntəqəsi
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> XIRDALAN şəh (Nesibe Zeynalova 149a, (Aytac şadlıq evindən bazara
                        gedən yolda, YENİKARGO təhvil məntəqəsi) </h3>
                </div>

            </div>
            <div className="p-2 border-b">
                <h3 className="font-medium pb-3">SUMQAYIT Təhvil Məntəqəsi
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> Sumqayit şəh. H.Eliyev pros. 340a (Ordubad marketin yani,
                        YENİKARGO təhvil məntəqəsi)</h3>
                </div>

            </div>
            <div className="p-2 border-b">
                <h3 className="font-medium pb-3">BALAKƏN Təhvil Məntəqəsi
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> BALAKƏN şəh.Rafiq Səmədov küç.27 (Keçmiş Mono marketin, indiki
                        ARAZ marketin yanı.YENİKARGO təhvil məntəqəsi) </h3>
                </div>

            </div>
            <div className="p-2 border-b mb-16">
                <h3 className="font-medium pb-3">ŞƏKİ Təhvil Məntəqəsi
                </h3>
                <div className="flex pb-3">

                    <h3 className="font-medium "> ŞƏKİ şəh. Sabit Rəhman küç. (Təzə bazardan qalxanda Gəncə
                        mağazasına çatmamış baksel diler dükanı. YENİKARGO təhvil məntəqəsi) </h3>
                </div>

            </div>


        </div>
    </div>
}