import Layout from "../components/layout";
import Head from "next/head";

export default function Dasima() {
    return <div>
        <Layout/>
        <Head>
            <title> Daşıma şərtləri</title>
        </Head>
        <div className="pt-16">
            <h3 className="font-medium text-center p-2">Daşıma şərtləri</h3>
            <h3 className="px-4 mb-20">Məlumat üçün Sifarişçinin diqqətinə çatdırılır ki, verilən sifariş dəyəri ay ərzində
                300 ABŞ dolları dəyərinədək olduğu təqdirdə, heç bir gömrük rüsumuna CƏLB OLUNMUR. Sifarişin ümumi
                dəyəri ay ərzində müddətində 300 ABŞ dolları dəyərindən ARTIQ OLDUQDA isə, Sifarişçinin sifariş keçdiyi
                məhsulun ümümi dəyərinin 36% (otuz altı faiz) miqdarında Azərbaycanın gömrük orqanlarına gömrük rüsumu
                ödəməyi lazım gələcəkdir.

                Sifariş verilən məhsullar Daşıyıcı şirkəti tərəfindən sığortalanmır və zərər görmüş məhsullara görə heç
                bir məsuliyyət daşımır lakin, Sifarişçinin istəyinə görə, əlavə ödəniş etmək şərti ilə məhsulların
                sığortalanmasını həyata keçirtmək mümkündür.

                Sifariş olunmuş bağlamanın, daşıyıcının anbarına daxil olması barədə məlumat Sifarişçiyə veriləcəkdir.
                Məlumat verildiyi gündən etibarən 14 (on dörd) təqvim günü ərzində Sifarişçi bağlamanı təhvil almalıdır.
                Əks təqdirdə hər gün üçün əlavə olaraq 0,5 DOLLAR saxlamaq haqqı ödənməlidir. Bütün ödəmələr
                tamamlandıqdan sonra Sifarişçi bağlamanı təhvil ala biləcəkdir.

                Bağlamaların, Daşıyıcıdan asılı olmayan səbəblərdən gecikməsinə görə (Gömrük yoxlaması və.s) Daşıyıcı
                şirkət heç bir məsuliyyət daşımır və belə yaranan vəziyyət sifarişdən imtina üçün səbəb sayıla bilməz.
                Təhvil alınan bağlamaların, təhvil alınan yerdə yoxlanması məsləhət görülür. Əks halda, sonradan ortaya
                çıxan hər hansı bir çatışmamazlığa görə Daşıyıcı məsuliyyət daşımır.

                Bağlamadan narazı qaldığınız təqdirdə (material,ölçü və.s), dəyişdirmə Daşıyıcı tərəfindən həyata
                keçirilmir. Sifariş olunan məhsulun online səhivəsində dəyişmə və ya geri qayıtma şərtləri ilə tanış
                olub, sifarişi qəbzi ilə bərabər (əlavə ödənişlə) bizim Türkiyədə ki, anbarımıza göndərilməsi
                Sifarişçinin məsuliyyəti altındadır.</h3>
        </div>
    </div>
}