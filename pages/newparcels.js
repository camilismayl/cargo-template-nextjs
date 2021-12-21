import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Beyanet() {
    return (
        <div>
            <Head>
                <title> Bəyan et </title>
            </Head>
            <Layout>
            </Layout>
            <div>
                <div className="px-4 pt-16">
                    <h3 className='px-7 pt-7 pb-4 font-medium text-lg text-center'>Beyan et </h3>

                    <div className="pt-3">
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Ölkə
  </span>
                            <input
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Mağaza
  </span>
                            <input
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>


                        <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Məhsulun tipi
  </span>
                            <select
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                <option>Paltar, geyim - Palto</option>
                                <option value="{&quot;1_3&quot;:&quot;Paltar, geyim-Yar\u0131mpalto&quot;}" data-select2-id="select2-data-15-axgl">Paltar, geyim - Yarımpalto</option>
                                <option value="{&quot;1_4&quot;:&quot;Paltar, geyim-B\u00fcr\u00fcnc\u0259k&quot;}" data-select2-id="select2-data-16-6qds">Paltar, geyim - Bürüncək</option>
                                <option value="{&quot;1_5&quot;:&quot;Paltar, geyim-Pla\u015f&quot;}" data-select2-id="select2-data-17-54ix">Paltar, geyim - Plaş</option>
                                <option value="{&quot;1_6&quot;:&quot;Paltar, geyim-G\u00f6d\u0259k\u00e7\u0259&quot;}" data-select2-id="select2-data-18-4pmi">Paltar, geyim - Gödəkçə</option>
                                <option value="{&quot;1_7&quot;:&quot;Paltar, geyim-K\u00fcl\u0259k\u00e7\u0259&quot;}" data-select2-id="select2-data-19-7hgc">Paltar, geyim - Küləkçə</option>
                                <option value="{&quot;1_8&quot;:&quot;Paltar, geyim-F\u0131rt\u0131nal\u0131q&quot;}" data-select2-id="select2-data-20-frnd">Paltar, geyim - Fırtınalıq</option>
                                <option value="{&quot;1_9&quot;:&quot;Paltar, geyim-Kostyum&quot;}" data-select2-id="select2-data-21-r95x">Paltar, geyim - Kostyum</option>
                                <option value="{&quot;1_10&quot;:&quot;Paltar, geyim-\u015ealvar&quot;}" data-select2-id="select2-data-22-w2xj">Paltar, geyim - Şalvar</option>
                                <option value="{&quot;1_11&quot;:&quot;Paltar, geyim-Kombinezon&quot;}" data-select2-id="select2-data-23-i02h">Paltar, geyim - Kombinezon</option>
                                <option value="{&quot;1_12&quot;:&quot;Paltar, geyim-Brici&quot;}" data-select2-id="select2-data-24-k0pc">Paltar, geyim - Brici</option>
                                <option value="{&quot;1_13&quot;:&quot;Paltar, geyim-\u015eort&quot;}" data-select2-id="select2-data-25-l0ae">Paltar, geyim - Şort</option>
                                <option value="{&quot;1_14&quot;:&quot;Paltar, geyim-Jaket&quot;}" data-select2-id="select2-data-26-97h2">Paltar, geyim - Jaket</option>
                                <option value="{&quot;1_15&quot;:&quot;Paltar, geyim-Penc\u0259k&quot;}" data-select2-id="select2-data-27-neae">Paltar, geyim - Pencək</option>
                                <option value="{&quot;1_16&quot;:&quot;Paltar, geyim-Blazer&quot;}" data-select2-id="select2-data-28-1cnr">Paltar, geyim - Blazer</option>
                                <option value="{&quot;1_17&quot;:&quot;Paltar, geyim-K\u00f6yn\u0259k&quot;}" data-select2-id="select2-data-29-j892">Paltar, geyim - Köynək</option>
                                <option value="{&quot;1_18&quot;:&quot;Paltar, geyim-Bluz&quot;}" data-select2-id="select2-data-30-2vlj">Paltar, geyim - Bluz</option>
                                <option value="{&quot;1_19&quot;:&quot;Paltar, geyim-Mayka&quot;}" data-select2-id="select2-data-31-bonn">Paltar, geyim - Mayka</option>
                                <option value="{&quot;1_20&quot;:&quot;Paltar, geyim-Alt fufayka&quot;}" data-select2-id="select2-data-32-xn3t">Paltar, geyim - Alt fufayka</option>
                                <option value="{&quot;1_21&quot;:&quot;Paltar, geyim-Kalson&quot;}" data-select2-id="select2-data-33-i0eb">Paltar, geyim - Kalson</option>
                                <option value="{&quot;1_22&quot;:&quot;Paltar, geyim-Tuman&quot;}" data-select2-id="select2-data-34-ah7v">Paltar, geyim - Tuman</option>
                                <option value="{&quot;1_23&quot;:&quot;Paltar, geyim-Gec\u0259 k\u00f6yn\u0259yi&quot;}" data-select2-id="select2-data-35-g0cf">Paltar, geyim - Gecə köynəyi</option>
                                <option value="{&quot;1_24&quot;:&quot;Paltar, geyim-Pijama&quot;}" data-select2-id="select2-data-36-6ccm">Paltar, geyim - Pijama</option>
                                <option value="{&quot;1_25&quot;:&quot;Paltar, geyim-Hamam x\u0259l\u0259ti&quot;}" data-select2-id="select2-data-37-ql4t">Paltar, geyim - Hamam xələti</option>
                                <option value="{&quot;1_26&quot;:&quot;Paltar, geyim-Ev x\u0259l\u0259ti&quot;}" data-select2-id="select2-data-38-12nl">Paltar, geyim - Ev xələti</option>
                                <option value="{&quot;1_27&quot;:&quot;Paltar, geyim-\u00c7im\u0259rlik kostyumlar\u0131&quot;}" data-select2-id="select2-data-39-gbhx">Paltar, geyim - Çimərlik kostyumları</option>
                                <option value="{&quot;1_28&quot;:&quot;Paltar, geyim-Xiz\u0259k kostyumlar\u0131&quot;}" data-select2-id="select2-data-40-8t83">Paltar, geyim - Xizək kostyumları</option>
                                <option value="{&quot;1_29&quot;:&quot;Paltar, geyim-\u0130stehsalat v\u0259 pe\u015f\u0259 geyimi&quot;}" data-select2-id="select2-data-41-6u9m">Paltar, geyim - İstehsalat və peşə geyimi</option>
                                <option value="{&quot;1_30&quot;:&quot;Paltar, geyim-B\u00fcstqalter&quot;}" data-select2-id="select2-data-42-fmmz">Paltar, geyim - Büstqalter</option>
                                <option value="{&quot;1_31&quot;:&quot;Paltar, geyim-Korset&quot;}" data-select2-id="select2-data-43-v7tt">Paltar, geyim - Korset</option>
                                <option value="{&quot;1_32&quot;:&quot;Paltar, geyim-\u00c7iyinba\u011f\u0131&quot;}" data-select2-id="select2-data-44-b11n">Paltar, geyim - Çiyinbağı</option>
                                <option value="{&quot;1_33&quot;:&quot;Paltar, geyim-Yayl\u0131q&quot;}" data-select2-id="select2-data-45-qwwm">Paltar, geyim - Yaylıq</option>
                                <option value="{&quot;1_34&quot;:&quot;Paltar, geyim-\u015e\u0259rf&quot;}" data-select2-id="select2-data-46-gy2f">Paltar, geyim - Şərf</option>
                                <option value="{&quot;1_35&quot;:&quot;Paltar, geyim-Qalstuk&quot;}" data-select2-id="select2-data-47-4keb">Paltar, geyim - Qalstuk</option>
                                <option value="{&quot;1_36&quot;:&quot;Paltar, geyim-\u018flc\u0259k v\u0259 yar\u0131m\u0259lc\u0259k&quot;}" data-select2-id="select2-data-48-5y6a">Paltar, geyim - Əlcək və yarıməlcək</option>
                                <option value="{&quot;1_37&quot;:&quot;Paltar, geyim-\u0130dman kostyumlar\u0131&quot;}" data-select2-id="select2-data-49-qh6w">Paltar, geyim - İdman kostyumları</option>
                                <option value="{&quot;1_38&quot;:&quot;Paltar, geyim-\u00d6nl\u00fck&quot;}" data-select2-id="select2-data-50-cc8b">Paltar, geyim - Önlük</option>
                                <option value="{&quot;1_471&quot;:&quot;Paltar, geyim-Dig\u0259r&quot;}" data-select2-id="select2-data-51-ujj9">Paltar, geyim - Digər</option>
                                <option value="{&quot;1_542&quot;:&quot;Paltar, geyim-Don&quot;}" data-select2-id="select2-data-52-jubt">Paltar, geyim - Don</option>
                                <option value="{&quot;1_543&quot;:&quot;Paltar, geyim-\u018ft\u0259k&quot;}" data-select2-id="select2-data-53-undv">Paltar, geyim - Ətək</option>
                                <option value="{&quot;1_544&quot;:&quot;Paltar, geyim-Corab&quot;}" data-select2-id="select2-data-54-qk5x">Paltar, geyim - Corab</option>
                                <option value="{&quot;1_545&quot;:&quot;Paltar, geyim-Kolqotlar&quot;}" data-select2-id="select2-data-55-k2nq">Paltar, geyim - Kolqotlar</option>

                                <option value="{&quot;39_40&quot;:&quot;Ayaqqab\u0131-Xiz\u0259k \u00fc\u00e7\u00fcn \u00e7\u0259km\u0259&quot;}" data-select2-id="select2-data-56-y2xs">Ayaqqabı - Xizək üçün çəkmə</option>
                                <option value="{&quot;39_41&quot;:&quot;Ayaqqab\u0131-Snoubord \u00fc\u00e7\u00fcn \u00e7\u0259km\u0259&quot;}" data-select2-id="select2-data-57-wp1k">Ayaqqabı - Snoubord üçün çəkmə</option>
                                <option value="{&quot;39_42&quot;:&quot;Ayaqqab\u0131-Klassik&quot;}" data-select2-id="select2-data-58-lln7">Ayaqqabı - Klassik</option>
                                <option value="{&quot;39_43&quot;:&quot;Ayaqqab\u0131-Derbi&quot;}" data-select2-id="select2-data-59-80qu">Ayaqqabı - Derbi</option>
                                <option value="{&quot;39_44&quot;:&quot;Ayaqqab\u0131-Lofer&quot;}" data-select2-id="select2-data-60-2qcq">Ayaqqabı - Lofer</option>
                                <option value="{&quot;39_45&quot;:&quot;Ayaqqab\u0131-Oksford&quot;}" data-select2-id="select2-data-61-oawd">Ayaqqabı - Oksford</option>
                                <option value="{&quot;39_46&quot;:&quot;Ayaqqab\u0131-Yar\u0131mbo\u011faz ayaqqab\u0131&quot;}" data-select2-id="select2-data-62-2twq">Ayaqqabı - Yarımboğaz ayaqqabı</option>
                                <option value="{&quot;39_47&quot;:&quot;Ayaqqab\u0131-Krassovka&quot;}" data-select2-id="select2-data-63-0egb">Ayaqqabı - Krassovka</option>
                                <option value="{&quot;39_48&quot;:&quot;Ayaqqab\u0131-Mokasin&quot;}" data-select2-id="select2-data-64-9xi0">Ayaqqabı - Mokasin</option>
                                <option value="{&quot;39_49&quot;:&quot;Ayaqqab\u0131-Espadril&quot;}" data-select2-id="select2-data-65-rz2w">Ayaqqabı - Espadril</option>
                                <option value="{&quot;39_50&quot;:&quot;Ayaqqab\u0131-S\u0259nd\u0259l&quot;}" data-select2-id="select2-data-66-ckjx">Ayaqqabı - Səndəl</option>
                                <option value="{&quot;39_51&quot;:&quot;Ayaqqab\u0131-Ev t\u0259rliyi&quot;}" data-select2-id="select2-data-67-jdo0">Ayaqqabı - Ev tərliyi</option>
                                <option value="{&quot;39_56&quot;:&quot;Ayaqqab\u0131-Slip-on&quot;}" data-select2-id="select2-data-68-8e5i">Ayaqqabı - Slip-on</option>
                                <option value="{&quot;39_58&quot;:&quot;Ayaqqab\u0131-Uzunbo\u011faz \u00e7\u0259km\u0259&quot;}" data-select2-id="select2-data-69-elp9">Ayaqqabı - Uzunboğaz çəkmə</option>
                                <option value="{&quot;39_59&quot;:&quot;Ayaqqab\u0131-Yar\u0131mbo\u011faz \u00e7\u0259km\u0259&quot;}" data-select2-id="select2-data-70-he8k">Ayaqqabı - Yarımboğaz çəkmə</option>
                                <option value="{&quot;39_60&quot;:&quot;Ayaqqab\u0131-H\u00fcndurdaban&quot;}" data-select2-id="select2-data-71-vf8t">Ayaqqabı - Hündurdaban</option>
                                <option value="{&quot;39_62&quot;:&quot;Ayaqqab\u0131-Baletka&quot;}" data-select2-id="select2-data-72-cxsf">Ayaqqabı - Baletka</option>
                                <option value="{&quot;39_472&quot;:&quot;Ayaqqab\u0131-Dig\u0259r&quot;}" data-select2-id="select2-data-73-a5gc">Ayaqqabı - Digər</option>

                                <option value="{&quot;52_53&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Xiz\u0259k \u00fc\u00e7\u00fcn \u00e7\u0259km\u0259&quot;}" data-select2-id="select2-data-74-xczx">Ayaqqabı qadın üçün - Xizək üçün çəkmə</option>
                                <option value="{&quot;52_54&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Snoubord \u00fc\u00e7\u00fcn \u00e7\u0259km\u0259&quot;}" data-select2-id="select2-data-75-2k3g">Ayaqqabı qadın üçün - Snoubord üçün çəkmə</option>
                                <option value="{&quot;52_55&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Derbi&quot;}" data-select2-id="select2-data-76-olu5">Ayaqqabı qadın üçün - Derbi</option>
                                <option value="{&quot;52_57&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Lofer&quot;}" data-select2-id="select2-data-77-wylz">Ayaqqabı qadın üçün - Lofer</option>
                                <option value="{&quot;52_61&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Espadril&quot;}" data-select2-id="select2-data-78-yfbp">Ayaqqabı qadın üçün - Espadril</option>
                                <option value="{&quot;52_63&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-S\u0259nd\u0259l&quot;}" data-select2-id="select2-data-79-w5gx">Ayaqqabı qadın üçün - Səndəl</option>
                                <option value="{&quot;52_64&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Krassovka&quot;}" data-select2-id="select2-data-80-n3j0">Ayaqqabı qadın üçün - Krassovka</option>
                                <option value="{&quot;52_65&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Ev t\u0259rliyi&quot;}" data-select2-id="select2-data-81-7bpv">Ayaqqabı qadın üçün - Ev tərliyi</option>
                                <option value="{&quot;52_473&quot;:&quot;Ayaqqab\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Dig\u0259r&quot;}" data-select2-id="select2-data-82-f4fo">Ayaqqabı qadın üçün - Digər</option>

                                <option value="{&quot;66_67&quot;:&quot;Geyim aksesuarlar\u0131-Qay\u0131\u015f&quot;}" data-select2-id="select2-data-83-im2x">Geyim aksesuarları - Qayış</option>
                                <option value="{&quot;66_68&quot;:&quot;Geyim aksesuarlar\u0131-\u015e\u0259rf&quot;}" data-select2-id="select2-data-84-53so">Geyim aksesuarları - Şərf</option>
                                <option value="{&quot;66_69&quot;:&quot;Geyim aksesuarlar\u0131-\u018flc\u0259k&quot;}" data-select2-id="select2-data-85-anb6">Geyim aksesuarları - Əlcək</option>
                                <option value="{&quot;66_70&quot;:&quot;Geyim aksesuarlar\u0131-Bijuteriya&quot;}" data-select2-id="select2-data-86-bqjo">Geyim aksesuarları - Bijuteriya</option>
                                <option value="{&quot;66_71&quot;:&quot;Geyim aksesuarlar\u0131-Portmone&quot;}" data-select2-id="select2-data-87-jc0p">Geyim aksesuarları - Portmone</option>
                                <option value="{&quot;66_72&quot;:&quot;Geyim aksesuarlar\u0131-Papaq&quot;}" data-select2-id="select2-data-88-ff0k">Geyim aksesuarları - Papaq</option>
                                <option value="{&quot;66_73&quot;:&quot;Geyim aksesuarlar\u0131-Qalstuk&quot;}" data-select2-id="select2-data-89-f4pr">Geyim aksesuarları - Qalstuk</option>
                                <option value="{&quot;66_74&quot;:&quot;Geyim aksesuarlar\u0131-\u00c7anta&quot;}" data-select2-id="select2-data-90-f5yd">Geyim aksesuarları - Çanta</option>
                                <option value="{&quot;66_75&quot;:&quot;Geyim aksesuarlar\u0131-Eyn\u0259k&quot;}" data-select2-id="select2-data-91-1uks">Geyim aksesuarları - Eynək</option>
                                <option value="{&quot;66_76&quot;:&quot;Geyim aksesuarlar\u0131-\u00c7\u0259tir&quot;}" data-select2-id="select2-data-92-n1fo">Geyim aksesuarları - Çətir</option>
                                <option value="{&quot;66_77&quot;:&quot;Geyim aksesuarlar\u0131-Saat&quot;}" data-select2-id="select2-data-93-qh5t">Geyim aksesuarları - Saat</option>
                                <option value="{&quot;66_79&quot;:&quot;Geyim aksesuarlar\u0131-Makiyaj \u00e7antalar\u0131&quot;}" data-select2-id="select2-data-94-nk1q">Geyim aksesuarları - Makiyaj çantaları</option>
                                <option value="{&quot;66_91&quot;:&quot;Geyim aksesuarlar\u0131-Sa\u00e7 aksesuarlar\u0131&quot;}" data-select2-id="select2-data-95-zmug">Geyim aksesuarları - Saç aksesuarları</option>
                                <option value="{&quot;66_474&quot;:&quot;Geyim aksesuarlar\u0131-Dig\u0259r&quot;}" data-select2-id="select2-data-96-0nzj">Geyim aksesuarları - Digər</option>

                                <option value="{&quot;78_80&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Qay\u0131\u015f&quot;}" data-select2-id="select2-data-97-xi6n">Geyim aksesuarları qadın üçün - Qayış</option>
                                <option value="{&quot;78_81&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-\u018flc\u0259k&quot;}" data-select2-id="select2-data-98-4ph1">Geyim aksesuarları qadın üçün - Əlcək</option>
                                <option value="{&quot;78_82&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-\u00c7\u0259tir&quot;}" data-select2-id="select2-data-99-dy4s">Geyim aksesuarları qadın üçün - Çətir</option>
                                <option value="{&quot;78_83&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Portmone&quot;}" data-select2-id="select2-data-100-uwde">Geyim aksesuarları qadın üçün - Portmone</option>
                                <option value="{&quot;78_84&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Eyn\u0259k&quot;}" data-select2-id="select2-data-101-q5w5">Geyim aksesuarları qadın üçün - Eynək</option>
                                <option value="{&quot;78_85&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-\u015e\u0259rf&quot;}" data-select2-id="select2-data-102-ubry">Geyim aksesuarları qadın üçün - Şərf</option>
                                <option value="{&quot;78_86&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Papaq&quot;}" data-select2-id="select2-data-103-u353">Geyim aksesuarları qadın üçün - Papaq</option>
                                <option value="{&quot;78_87&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Bijuteriya&quot;}" data-select2-id="select2-data-104-0r82">Geyim aksesuarları qadın üçün - Bijuteriya</option>
                                <option value="{&quot;78_88&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-\u00c7anta&quot;}" data-select2-id="select2-data-105-irc6">Geyim aksesuarları qadın üçün - Çanta</option>
                                <option value="{&quot;78_89&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Saat &quot;}" data-select2-id="select2-data-106-uldd">Geyim aksesuarları qadın üçün - Saat </option>
                                <option value="{&quot;78_90&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-\u00c7\u0259tir&quot;}" data-select2-id="select2-data-107-s3gm">Geyim aksesuarları qadın üçün - Çətir</option>
                                <option value="{&quot;78_478&quot;:&quot;Geyim aksesuarlar\u0131 qad\u0131n \u00fc\u00e7\u00fcn-Dig\u0259r&quot;}" data-select2-id="select2-data-108-fjgq">Geyim aksesuarları qadın üçün - Digər</option>

                                <option value="{&quot;92_93&quot;:&quot;Komp\u00fcter-Noutbuk&quot;}" data-select2-id="select2-data-109-1yln">Kompüter - Noutbuk</option>
                                <option value="{&quot;92_94&quot;:&quot;Komp\u00fcter-Netbuk&quot;}" data-select2-id="select2-data-110-enhp">Kompüter - Netbuk</option>
                                <option value="{&quot;92_95&quot;:&quot;Komp\u00fcter-Masa\u00fcst\u00fc komputer&quot;}" data-select2-id="select2-data-111-98lb">Kompüter - Masaüstü komputer</option>
                                <option value="{&quot;92_96&quot;:&quot;Komp\u00fcter-Monoblok&quot;}" data-select2-id="select2-data-112-sfbc">Kompüter - Monoblok</option>
                                <option value="{&quot;92_97&quot;:&quot;Komp\u00fcter-Oyun komp\u00fcteri&quot;}" data-select2-id="select2-data-113-sjak">Kompüter - Oyun kompüteri</option>
                                <option value="{&quot;92_98&quot;:&quot;Komp\u00fcter-Monitor&quot;}" data-select2-id="select2-data-114-na4v">Kompüter - Monitor</option>
                                <option value="{&quot;92_99&quot;:&quot;Komp\u00fcter-Printer&quot;}" data-select2-id="select2-data-115-n2ye">Kompüter - Printer</option>
                                <option value="{&quot;92_100&quot;:&quot;Komp\u00fcter-Xarici toplay\u0131c\u0131 diskl\u0259r HDD &quot;}" data-select2-id="select2-data-116-x7gh">Kompüter - Xarici toplayıcı disklər HDD </option>
                                <option value="{&quot;92_101&quot;:&quot;Komp\u00fcter-Kartric&quot;}" data-select2-id="select2-data-117-9et2">Kompüter - Kartric</option>
                                <option value="{&quot;92_102&quot;:&quot;Komp\u00fcter-Proyektor&quot;}" data-select2-id="select2-data-118-keud">Kompüter - Proyektor</option>
                                <option value="{&quot;92_103&quot;:&quot;Komp\u00fcter-Si\u00e7an&quot;}" data-select2-id="select2-data-119-fvo0">Kompüter - Siçan</option>
                                <option value="{&quot;92_104&quot;:&quot;Komp\u00fcter-Prezentasiya \u00fc\u00e7\u00fcn pult&quot;}" data-select2-id="select2-data-120-5386">Kompüter - Prezentasiya üçün pult</option>
                                <option value="{&quot;92_105&quot;:&quot;Komp\u00fcter-Noutbuk \u00fc\u00e7\u00fcn \u00e7anta&quot;}" data-select2-id="select2-data-121-9igx">Kompüter - Noutbuk üçün çanta</option>
                                <option value="{&quot;92_106&quot;:&quot;Komp\u00fcter-Noutbuk \u00fc\u00e7\u00fcn altl\u0131q&quot;}" data-select2-id="select2-data-122-jn6q">Kompüter - Noutbuk üçün altlıq</option>
                                <option value="{&quot;92_107&quot;:&quot;Komp\u00fcter-Fle\u015f toplay\u0131c\u0131&quot;}" data-select2-id="select2-data-123-qkr4">Kompüter - Fleş toplayıcı</option>
                                <option value="{&quot;92_108&quot;:&quot;Komp\u00fcter-Modem&quot;}" data-select2-id="select2-data-124-oecm">Kompüter - Modem</option>
                                <option value="{&quot;92_109&quot;:&quot;Komp\u00fcter-Xarici toplay\u0131c\u0131 diskl\u0259r SSD&quot;}" data-select2-id="select2-data-125-qf53">Kompüter - Xarici toplayıcı disklər SSD</option>
                                <option value="{&quot;92_460&quot;:&quot;Komp\u00fcter-Dig\u0259r&quot;}" data-select2-id="select2-data-126-czzo">Kompüter - Digər</option>
                                <option value="{&quot;92_479&quot;:&quot;Komp\u00fcter-Klaviatura&quot;}" data-select2-id="select2-data-127-nwud">Kompüter - Klaviatura</option>
                                <option value="{&quot;92_480&quot;:&quot;Komp\u00fcter-Ana kart&quot;}" data-select2-id="select2-data-128-1jma">Kompüter - Ana kart</option>
                                <option value="{&quot;92_481&quot;:&quot;Komp\u00fcter-Komp\u00fcterl\u0259rin dig\u0259r hiss\u0259l\u0259ri v\u0259 aksesuarlar\u0131 (kordonlar v\u0259 ya m\u0259ftill\u0259r deyil)&quot;}" data-select2-id="select2-data-129-hjep">Kompüter - Kompüterlərin digər hissələri və aksesuarları (kordonlar və ya məftillər deyil)</option>

                                <option value="{&quot;110_111&quot;:&quot;Oyun konsollar\u0131-Playstation&quot;}" data-select2-id="select2-data-130-zvuo">Oyun konsolları - Playstation</option>
                                <option value="{&quot;110_112&quot;:&quot;Oyun konsollar\u0131-Xbox&quot;}" data-select2-id="select2-data-131-dorp">Oyun konsolları - Xbox</option>
                                <option value="{&quot;110_113&quot;:&quot;Oyun konsollar\u0131-DVD &quot;}" data-select2-id="select2-data-132-utks">Oyun konsolları - DVD </option>
                                <option value="{&quot;110_114&quot;:&quot;Oyun konsollar\u0131-DVD v\u0259 CD diskl\u0259r&quot;}" data-select2-id="select2-data-133-5839">Oyun konsolları - DVD və CD disklər</option>
                                <option value="{&quot;110_115&quot;:&quot;Oyun konsollar\u0131-Nintendo&quot;}" data-select2-id="select2-data-134-3bmk">Oyun konsolları - Nintendo</option>
                                <option value="{&quot;110_459&quot;:&quot;Oyun konsollar\u0131-Dig\u0259r&quot;}" data-select2-id="select2-data-135-y12g">Oyun konsolları - Digər</option>
                                <option value="{&quot;110_482&quot;:&quot;Oyun konsollar\u0131-Oyun kontolerl\u0259ri&quot;}" data-select2-id="select2-data-136-ilw1">Oyun konsolları - Oyun kontolerləri</option>

                                <option value="{&quot;116_117&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Kir\u015fan&quot;}" data-select2-id="select2-data-137-qv2k">Kosmetik vasitələr - Kirşan</option>
                                <option value="{&quot;116_118&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Tonal krem&quot;}" data-select2-id="select2-data-138-66at">Kosmetik vasitələr - Tonal krem</option>
                                <option value="{&quot;116_119&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Konsiler&quot;}" data-select2-id="select2-data-139-2joi">Kosmetik vasitələr - Konsiler</option>
                                <option value="{&quot;116_120&quot;:&quot;Kosmetik vasit\u0259l\u0259r-\u018fnlik&quot;}" data-select2-id="select2-data-140-j40m">Kosmetik vasitələr - Ənlik</option>
                                <option value="{&quot;116_121&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Tu\u015f&quot;}" data-select2-id="select2-data-141-syj8">Kosmetik vasitələr - Tuş</option>
                                <option value="{&quot;116_122&quot;:&quot;Kosmetik vasit\u0259l\u0259r-G\u00f6z k\u00f6lg\u0259si&quot;}" data-select2-id="select2-data-142-kwlx">Kosmetik vasitələr - Göz kölgəsi</option>
                                <option value="{&quot;116_123&quot;:&quot;Kosmetik vasit\u0259l\u0259r-G\u00f6z q\u0259l\u0259mi&quot;}" data-select2-id="select2-data-143-r6mf">Kosmetik vasitələr - Göz qələmi</option>
                                <option value="{&quot;116_124&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Dodaq boyas\u0131&quot;}" data-select2-id="select2-data-144-mpzw">Kosmetik vasitələr - Dodaq boyası</option>
                                <option value="{&quot;116_125&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Bronzer&quot;}" data-select2-id="select2-data-145-pqs0">Kosmetik vasitələr - Bronzer</option>
                                <option value="{&quot;116_126&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Korrektor&quot;}" data-select2-id="select2-data-146-eq37">Kosmetik vasitələr - Korrektor</option>
                                <option value="{&quot;116_127&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Layner&quot;}" data-select2-id="select2-data-147-co19">Kosmetik vasitələr - Layner</option>
                                <option value="{&quot;116_128&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Praymer&quot;}" data-select2-id="select2-data-148-1fww">Kosmetik vasitələr - Praymer</option>
                                <option value="{&quot;116_129&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Haylayter&quot;}" data-select2-id="select2-data-149-mz6o">Kosmetik vasitələr - Haylayter</option>
                                <option value="{&quot;116_130&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Qa\u015f q\u0259l\u0259mi&quot;}" data-select2-id="select2-data-150-7f59">Kosmetik vasitələr - Qaş qələmi</option>
                                <option value="{&quot;116_131&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Qa\u015f kir\u015fan\u0131&quot;}" data-select2-id="select2-data-151-t89g">Kosmetik vasitələr - Qaş kirşanı</option>
                                <option value="{&quot;116_132&quot;:&quot;Kosmetik vasit\u0259l\u0259r-D\u0131rnaq lak\u0131&quot;}" data-select2-id="select2-data-152-6ndn">Kosmetik vasitələr - Dırnaq lakı</option>
                                <option value="{&quot;116_461&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Dig\u0259r&quot;}" data-select2-id="select2-data-153-dpmh">Kosmetik vasitələr - Digər</option>
                                <option value="{&quot;116_486&quot;:&quot;Kosmetik vasit\u0259l\u0259r-\u00dcz \u00fc\u00e7\u00fcn tozlar (Kir\u015fan, Tonal krem v\u0259 s.)&quot;}" data-select2-id="select2-data-154-13xn">Kosmetik vasitələr - Üz üçün tozlar (Kirşan, Tonal krem və s.)</option>
                                <option value="{&quot;116_487&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Tu\u015f, g\u00f6z k\u00f6lg\u0259l\u0259ri, g\u00f6z layneri, g\u00f6z qa\u015f m\u0259hsullar\u0131&quot;}" data-select2-id="select2-data-155-z4c8">Kosmetik vasitələr - Tuş, göz kölgələri, göz layneri, göz qaş məhsulları</option>
                                <option value="{&quot;116_488&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Dodaq boyas\u0131( Pomada), dodaq par\u0131ldad\u0131c\u0131s\u0131 v\u0259 dig\u0259r dodaq makiyaj\u0131&quot;}" data-select2-id="select2-data-156-oyzz">Kosmetik vasitələr - Dodaq boyası( Pomada), dodaq parıldadıcısı və digər dodaq makiyajı</option>
                                <option value="{&quot;116_489&quot;:&quot;Kosmetik vasit\u0259l\u0259r-D\u0131rnaq lak\u0131, manik\u00fcr v\u0259 pedik\u00fcr haz\u0131rl\u0131qlar\u0131 (m\u0259s\u0259l\u0259n, s\u00fcni d\u0131rnaqlar) v\u0259 kutik\u00fcl m\u0259hsullar\u0131&quot;}" data-select2-id="select2-data-157-srp9">Kosmetik vasitələr - Dırnaq lakı, manikür və pedikür hazırlıqları (məsələn, süni dırnaqlar) və kutikül məhsulları</option>
                                <option value="{&quot;116_490&quot;:&quot;Kosmetik vasit\u0259l\u0259r-\u018ftirl\u0259r, tualet suyu - m\u0259hsullar&quot;}" data-select2-id="select2-data-158-phf2">Kosmetik vasitələr - Ətirlər, tualet suyu - məhsullar</option>
                                <option value="{&quot;116_491&quot;:&quot;Kosmetik vasit\u0259l\u0259r-N\u0259ml\u0259ndiricil\u0259r v\u0259 dig\u0259r d\u0259ri m\u0259hsullar\u0131, g\u00fcn\u0259\u015fd\u0259n qoruyucu v\u0259 \u00f6z\u00fcn\u0259 qaralma preparatlar\u0131&quot;}" data-select2-id="select2-data-159-wj16">Kosmetik vasitələr - Nəmləndiricilər və digər dəri məhsulları, günəşdən qoruyucu və özünə qaralma preparatları</option>
                                <option value="{&quot;116_492&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Dezodorantlar v\u0259 antiperspirantlar&quot;}" data-select2-id="select2-data-160-xbbg">Kosmetik vasitələr - Dezodorantlar və antiperspirantlar</option>
                                <option value="{&quot;116_493&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Vanna ya\u011flar\u0131, hamam duzlar\u0131 v\u0259 dig\u0259r hamam haz\u0131rl\u0131qlar\u0131&quot;}" data-select2-id="select2-data-161-4lgy">Kosmetik vasitələr - Vanna yağları, hamam duzları və digər hamam hazırlıqları</option>
                                <option value="{&quot;116_494&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Du\u015f geli&quot;}" data-select2-id="select2-data-162-ywar">Kosmetik vasitələr - Duş geli</option>
                                <option value="{&quot;116_495&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Di\u015f ipi&quot;}" data-select2-id="select2-data-163-35ja">Kosmetik vasitələr - Diş ipi</option>
                                <option value="{&quot;116_496&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Di\u015f f\u0131r\u00e7alar\u0131&quot;}" data-select2-id="select2-data-164-dq89">Kosmetik vasitələr - Diş fırçaları</option>
                                <option value="{&quot;116_497&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Di\u015f pastas\u0131 v\u0259 a\u011f\u0131z yuyucusu&quot;}" data-select2-id="select2-data-165-ewog">Kosmetik vasitələr - Diş pastası və ağız yuyucusu</option>
                                <option value="{&quot;116_498&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Di\u015f a\u011fartma m\u0259hsullar\u0131&quot;}" data-select2-id="select2-data-166-ipke">Kosmetik vasitələr - Diş ağartma məhsulları</option>
                                <option value="{&quot;116_499&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Sa\u00e7 \u00fcslubu m\u0259hsullar\u0131, sa\u00e7 boyas\u0131 v\u0259 dig\u0259r sa\u00e7 m\u0259hsullar\u0131&quot;}" data-select2-id="select2-data-167-hcdf">Kosmetik vasitələr - Saç üslubu məhsulları, saç boyası və digər saç məhsulları</option>
                                <option value="{&quot;116_500&quot;:&quot;Kosmetik vasit\u0259l\u0259r-\u015eampunlar, kondisionerl\u0259r v\u0259 sa\u00e7 ya\u011flar\u0131&quot;}" data-select2-id="select2-data-168-usjt">Kosmetik vasitələr - Şampunlar, kondisionerlər və saç yağları</option>
                                <option value="{&quot;116_501&quot;:&quot;Kosmetik vasit\u0259l\u0259r-Peruklar v\u0259 insan sa\u00e7lar\u0131ndan haz\u0131rlanm\u0131\u015f dig\u0259r sa\u00e7 d\u00fcz\u0259ltm\u0259l\u0259ri&quot;}" data-select2-id="select2-data-169-uyxx">Kosmetik vasitələr - Peruklar və insan saçlarından hazırlanmış digər saç düzəltmələri</option>
                                <option value="{&quot;116_502&quot;:&quot;Kosmetik vasit\u0259l\u0259r-F\u0131r\u00e7alar, sa\u00e7 f\u0131r\u00e7alar\u0131 v\u0259 t\u0259ra\u015f f\u0131r\u00e7alar\u0131&quot;}" data-select2-id="select2-data-170-a0ln">Kosmetik vasitələr - Fırçalar, saç fırçaları və təraş fırçaları</option>

                                <option value="{&quot;133_134&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Mobil telefon&quot;}" data-select2-id="select2-data-171-2lyg">Telefon və telefon üçün aksesuarlar - Mobil telefon</option>
                                <option value="{&quot;133_135&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Ev v\u0259 ofis telefonu&quot;}" data-select2-id="select2-data-172-m3aq">Telefon və telefon üçün aksesuarlar - Ev və ofis telefonu</option>
                                <option value="{&quot;133_136&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Smart saatlar&quot;}" data-select2-id="select2-data-173-k9l9">Telefon və telefon üçün aksesuarlar - Smart saatlar</option>
                                <option value="{&quot;133_138&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Qulaql\u0131qlar&quot;}" data-select2-id="select2-data-174-p0i8">Telefon və telefon üçün aksesuarlar - Qulaqlıqlar</option>
                                <option value="{&quot;133_139&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Ekran qoruyucular\u0131&quot;}" data-select2-id="select2-data-175-mm1m">Telefon və telefon üçün aksesuarlar - Ekran qoruyucuları</option>
                                <option value="{&quot;133_141&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Portativ akkumlyator&quot;}" data-select2-id="select2-data-176-thos">Telefon və telefon üçün aksesuarlar - Portativ akkumlyator</option>
                                <option value="{&quot;133_142&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Adapter&quot;}" data-select2-id="select2-data-177-av7l">Telefon və telefon üçün aksesuarlar - Adapter</option>
                                <option value="{&quot;133_143&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Yadda\u015f qur\u011fular\u0131&quot;}" data-select2-id="select2-data-178-setz">Telefon və telefon üçün aksesuarlar - Yaddaş qurğuları</option>
                                <option value="{&quot;133_144&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-USB v\u0259 AUX kabell\u0259ri&quot;}" data-select2-id="select2-data-179-9v2m">Telefon və telefon üçün aksesuarlar - USB və AUX kabelləri</option>
                                <option value="{&quot;133_145&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Selfi \u00e7ubuqlar\u0131&quot;}" data-select2-id="select2-data-180-1inv">Telefon və telefon üçün aksesuarlar - Selfi çubuqları</option>
                                <option value="{&quot;133_439&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Telefon ehtiyat hiss\u0259l\u0259ri&quot;}" data-select2-id="select2-data-181-hf9w">Telefon və telefon üçün aksesuarlar - Telefon ehtiyat hissələri</option>
                                <option value="{&quot;133_462&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Dig\u0259r&quot;}" data-select2-id="select2-data-182-v23a">Telefon və telefon üçün aksesuarlar - Digər</option>
                                <option value="{&quot;133_557&quot;:&quot;Telefon v\u0259 telefon \u00fc\u00e7\u00fcn aksesuarlar-Tablet&quot;}" data-select2-id="select2-data-183-nh3n">Telefon və telefon üçün aksesuarlar - Tablet</option>

                                <option value="{&quot;137_140&quot;:&quot;Telefon (telefon \u00fc\u00e7\u00fcn aksesuarlar)-Keysl\u0259r&quot;}" data-select2-id="select2-data-184-mgvd">Telefon (telefon üçün aksesuarlar) - Keyslər</option>
                                <option value="{&quot;137_457&quot;:&quot;Telefon (telefon \u00fc\u00e7\u00fcn aksesuarlar)-Dig\u0259r&quot;}" data-select2-id="select2-data-185-dzi7">Telefon (telefon üçün aksesuarlar) - Digər</option>

                                <option value="{&quot;146_147&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Soyuducu&quot;}" data-select2-id="select2-data-186-i1ub">Məişət avadanlıqları (böyük məişət texnikası) - Soyuducu</option>
                                <option value="{&quot;146_148&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Dondurucu kamera&quot;}" data-select2-id="select2-data-187-avxc">Məişət avadanlıqları (böyük məişət texnikası) - Dondurucu kamera</option>
                                <option value="{&quot;146_149&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Paltaryuyan ma\u015f\u0131n&quot;}" data-select2-id="select2-data-188-5y50">Məişət avadanlıqları (böyük məişət texnikası) - Paltaryuyan maşın</option>
                                <option value="{&quot;146_150&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Quruducu ma\u015f\u0131n&quot;}" data-select2-id="select2-data-189-8ksw">Məişət avadanlıqları (böyük məişət texnikası) - Quruducu maşın</option>
                                <option value="{&quot;146_151&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Buxar dolab\u0131&quot;}" data-select2-id="select2-data-190-ujhr">Məişət avadanlıqları (böyük məişət texnikası) - Buxar dolabı</option>
                                <option value="{&quot;146_152&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Qabyuyan ma\u015f\u0131n&quot;}" data-select2-id="select2-data-191-omhj">Məişət avadanlıqları (böyük məişət texnikası) - Qabyuyan maşın</option>
                                <option value="{&quot;146_153&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Televizor&quot;}" data-select2-id="select2-data-192-5z2k">Məişət avadanlıqları (böyük məişət texnikası) - Televizor</option>
                                <option value="{&quot;146_154&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Kondisioner&quot;}" data-select2-id="select2-data-193-ioa4">Məişət avadanlıqları (böyük məişət texnikası) - Kondisioner</option>
                                <option value="{&quot;146_155&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Aspirator&quot;}" data-select2-id="select2-data-194-nsym">Məişət avadanlıqları (böyük məişət texnikası) - Aspirator</option>
                                <option value="{&quot;146_156&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Bi\u015firm\u0259 paneli&quot;}" data-select2-id="select2-data-195-adlp">Məişət avadanlıqları (böyük məişət texnikası) - Bişirmə paneli</option>
                                <option value="{&quot;146_157&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Soba&quot;}" data-select2-id="select2-data-196-93vc">Məişət avadanlıqları (böyük məişət texnikası) - Soba</option>
                                <option value="{&quot;146_158&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Plit\u0259&quot;}" data-select2-id="select2-data-197-onc1">Məişət avadanlıqları (böyük məişət texnikası) - Plitə</option>
                                <option value="{&quot;146_458&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (b\u00f6y\u00fck m\u0259i\u015f\u0259t texnikas\u0131)-Dig\u0259r&quot;}" data-select2-id="select2-data-198-fw8b">Məişət avadanlıqları (böyük məişət texnikası) - Digər</option>

                                <option value="{&quot;159_160&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Blender&quot;}" data-select2-id="select2-data-199-92f4">Məişət avadanlıqları (kiçik məişət texnikası) - Blender</option>
                                <option value="{&quot;159_161&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-M\u0259tb\u0259x t\u0259r\u0259zisi&quot;}" data-select2-id="select2-data-200-ykvj">Məişət avadanlıqları (kiçik məişət texnikası) - Mətbəx tərəzisi</option>
                                <option value="{&quot;159_162&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-M\u0259tb\u0259x kombayn\u0131&quot;}" data-select2-id="select2-data-201-ynvj">Məişət avadanlıqları (kiçik məişət texnikası) - Mətbəx kombaynı</option>
                                <option value="{&quot;159_163&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Mikser&quot;}" data-select2-id="select2-data-202-89pi">Məişət avadanlıqları (kiçik məişət texnikası) - Mikser</option>
                                <option value="{&quot;159_164&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-\u018ft\u00e7\u0259k\u0259n ma\u015f\u0131n&quot;}" data-select2-id="select2-data-203-6hdf">Məişət avadanlıqları (kiçik məişət texnikası) - Ətçəkən maşın</option>
                                <option value="{&quot;159_165&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Multibi\u015firicil\u0259r&quot;}" data-select2-id="select2-data-204-m1pv">Məişət avadanlıqları (kiçik məişət texnikası) - Multibişiricilər</option>
                                <option value="{&quot;159_166&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Mikrodal\u011fal\u0131 soba&quot;}" data-select2-id="select2-data-205-aghw">Məişət avadanlıqları (kiçik məişət texnikası) - Mikrodalğalı soba</option>
                                <option value="{&quot;159_167&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-\u00c7\u00f6r\u0259k bi\u015fr\u0259n&quot;}" data-select2-id="select2-data-206-x6sh">Məişət avadanlıqları (kiçik məişət texnikası) - Çörək bişrən</option>
                                <option value="{&quot;159_168&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Elektrik sobas\u0131&quot;}" data-select2-id="select2-data-207-b1nf">Məişət avadanlıqları (kiçik məişət texnikası) - Elektrik sobası</option>
                                <option value="{&quot;159_169&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Toster&quot;}" data-select2-id="select2-data-208-h9mi">Məişət avadanlıqları (kiçik məişət texnikası) - Toster</option>
                                <option value="{&quot;159_170&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Buxarl\u0131 bi\u015firici&quot;}" data-select2-id="select2-data-209-7kl6">Məişət avadanlıqları (kiçik məişət texnikası) - Buxarlı bişirici</option>
                                <option value="{&quot;159_171&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Fen&quot;}" data-select2-id="select2-data-210-jvi7">Məişət avadanlıqları (kiçik məişət texnikası) - Fen</option>
                                <option value="{&quot;159_172&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Fritoz&quot;}" data-select2-id="select2-data-211-67kq">Məişət avadanlıqları (kiçik məişət texnikası) - Fritoz</option>
                                <option value="{&quot;159_173&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Elektrik \u00e7aydan&quot;}" data-select2-id="select2-data-212-yg0a">Məişət avadanlıqları (kiçik məişət texnikası) - Elektrik çaydan</option>
                                <option value="{&quot;159_174&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Q\u0259hv\u0259 d\u0259ml\u0259y\u0259n&quot;}" data-select2-id="select2-data-213-gstz">Məişət avadanlıqları (kiçik məişət texnikası) - Qəhvə dəmləyən</option>
                                <option value="{&quot;159_175&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Q\u0259hv\u0259 \u00fcy\u00fcd\u0259n&quot;}" data-select2-id="select2-data-214-gy7k">Məişət avadanlıqları (kiçik məişət texnikası) - Qəhvə üyüdən</option>
                                <option value="{&quot;159_176&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-\u015eir\u0259\u00e7\u0259k\u0259n&quot;}" data-select2-id="select2-data-215-nbhw">Məişət avadanlıqları (kiçik məişət texnikası) - Şirəçəkən</option>
                                <option value="{&quot;159_177&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-\u00dct\u00fc&quot;}" data-select2-id="select2-data-216-b378">Məişət avadanlıqları (kiçik məişət texnikası) - Ütü</option>
                                <option value="{&quot;159_178&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Tozsoran&quot;}" data-select2-id="select2-data-217-wwkl">Məişət avadanlıqları (kiçik məişət texnikası) - Tozsoran</option>
                                <option value="{&quot;159_179&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Buxarl\u0131 t\u0259mizl\u0259yici&quot;}" data-select2-id="select2-data-218-u96i">Məişət avadanlıqları (kiçik məişət texnikası) - Buxarlı təmizləyici</option>
                                <option value="{&quot;159_469&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-Dig\u0259r&quot;}" data-select2-id="select2-data-219-dm92">Məişət avadanlıqları (kiçik məişət texnikası) - Digər</option>
                                <option value="{&quot;159_503&quot;:&quot;M\u0259i\u015f\u0259t avadanl\u0131qlar\u0131 (ki\u00e7ik m\u0259i\u015f\u0259t texnikas\u0131)-\u00dczq\u0131rxanlar, sa\u00e7 k\u0259sm\u0259 ma\u015f\u0131nlar\u0131 v\u0259 epilyasiya cihazlar\u0131 (elektrikli)&quot;}" data-select2-id="select2-data-220-2liv">Məişət avadanlıqları (kiçik məişət texnikası) - Üzqırxanlar, saç kəsmə maşınları və epilyasiya cihazları (elektrikli)</option>

                                <option value="{&quot;180_181&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-M\u00fch\u0259rrik hiss\u0259l\u0259ri&quot;}" data-select2-id="select2-data-221-cs1i">Maşın ehtiyat hissələri - Mühərrik hissələri</option>
                                <option value="{&quot;180_182&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Kuzov(\u0259sas) hiss\u0259l\u0259ri&quot;}" data-select2-id="select2-data-222-bckm">Maşın ehtiyat hissələri - Kuzov(əsas) hissələri</option>
                                <option value="{&quot;180_183&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Fara&quot;}" data-select2-id="select2-data-223-anh9">Maşın ehtiyat hissələri - Fara</option>
                                <option value="{&quot;180_184&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Amp\u00fcl&quot;}" data-select2-id="select2-data-224-29kj">Maşın ehtiyat hissələri - Ampül</option>
                                <option value="{&quot;180_185&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-G\u00fccl\u0259ndirici \u00e7eviricil\u0259r&quot;}" data-select2-id="select2-data-225-xgrw">Maşın ehtiyat hissələri - Gücləndirici çeviricilər</option>
                                <option value="{&quot;180_186&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-\u018fsas kordonlar&quot;}" data-select2-id="select2-data-226-p4jz">Maşın ehtiyat hissələri - Əsas kordonlar</option>
                                <option value="{&quot;180_187&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-M\u0259ftill\u0259r&quot;}" data-select2-id="select2-data-227-jmqo">Maşın ehtiyat hissələri - Məftillər</option>
                                <option value="{&quot;180_188&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Ba\u011flay\u0131c\u0131lar&quot;}" data-select2-id="select2-data-228-ylne">Maşın ehtiyat hissələri - Bağlayıcılar</option>
                                <option value="{&quot;180_189&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Qura\u015fd\u0131rma avadanl\u0131\u011f\u0131&quot;}" data-select2-id="select2-data-229-xu6l">Maşın ehtiyat hissələri - Quraşdırma avadanlığı</option>
                                <option value="{&quot;180_190&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Rezind\u0259n avtomobil d\u00f6\u015f\u0259k\u00e7\u0259l\u0259ri&quot;}" data-select2-id="select2-data-230-bsd4">Maşın ehtiyat hissələri - Rezindən avtomobil döşəkçələri</option>
                                <option value="{&quot;180_191&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-S\u00fcni toxuculuq materiallar\u0131ndan haz\u0131rlanm\u0131\u015f avtomobil d\u00f6\u015f\u0259k\u00e7\u0259l\u0259ri&quot;}" data-select2-id="select2-data-231-iw92">Maşın ehtiyat hissələri - Süni toxuculuq materiallarından hazırlanmış avtomobil döşəkçələri</option>
                                <option value="{&quot;180_192&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-G\u00fczg\u00fcl\u0259r&quot;}" data-select2-id="select2-data-232-1zx8">Maşın ehtiyat hissələri - Güzgülər</option>
                                <option value="{&quot;180_193&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Nasoslar v\u0259 Filtrl\u0259r&quot;}" data-select2-id="select2-data-233-n0fa">Maşın ehtiyat hissələri - Nasoslar və Filtrlər</option>
                                <option value="{&quot;180_194&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Hava filtrl\u0259ri&quot;}" data-select2-id="select2-data-234-w79q">Maşın ehtiyat hissələri - Hava filtrləri</option>
                                <option value="{&quot;180_195&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Ya\u011f v\u0259 benzin filtrl\u0259ri&quot;}" data-select2-id="select2-data-235-acwo">Maşın ehtiyat hissələri - Yağ və benzin filtrləri</option>
                                <option value="{&quot;180_475&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Dig\u0259r&quot;}" data-select2-id="select2-data-236-235z">Maşın ehtiyat hissələri - Digər</option>
                                <option value="{&quot;180_541&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-Motosikll\u0259r \u00fc\u00e7\u00fcn s\u0259sbo\u011fucular v\u0259 tullant\u0131 borular\u0131&quot;}" data-select2-id="select2-data-237-ra29">Maşın ehtiyat hissələri - Motosikllər üçün səsboğucular və tullantı boruları</option>
                                <option value="{&quot;180_574&quot;:&quot;Ma\u015f\u0131n ehtiyat hiss\u0259l\u0259ri-T\u0259k\u0259rl\u0259r&quot;}" data-select2-id="select2-data-238-1svq">Maşın ehtiyat hissələri - Təkərlər</option>

                                <option value="{&quot;196_197&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-Z\u00fclal tozu&quot;}" data-select2-id="select2-data-239-6dd4">Qida əlavələri, dərman - Zülal tozu</option>
                                <option value="{&quot;196_198&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-\u0130\u00e7kil\u0259r&quot;}" data-select2-id="select2-data-240-fu6p">Qida əlavələri, dərman - İçkilər</option>
                                <option value="{&quot;196_199&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-I\u00e7ki tozlar\u0131&quot;}" data-select2-id="select2-data-241-fiu3">Qida əlavələri, dərman - Içki tozları</option>
                                <option value="{&quot;196_200&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-T\u0259rkibind\u0259 kakao olan m\u0259hsullar&quot;}" data-select2-id="select2-data-242-03kf">Qida əlavələri, dərman - Tərkibində kakao olan məhsullar</option>
                                <option value="{&quot;196_201&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-Z\u0259rdab&quot;}" data-select2-id="select2-data-243-dx8s">Qida əlavələri, dərman - Zərdab</option>
                                <option value="{&quot;196_440&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-D\u0259rman&quot;}" data-select2-id="select2-data-244-gsb9">Qida əlavələri, dərman - Dərman</option>
                                <option value="{&quot;196_476&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-Dig\u0259r&quot;}" data-select2-id="select2-data-245-0yz8">Qida əlavələri, dərman - Digər</option>
                                <option value="{&quot;196_504&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-\u00c7ay&quot;}" data-select2-id="select2-data-246-i58r">Qida əlavələri, dərman - Çay</option>
                                <option value="{&quot;196_505&quot;:&quot;Qida \u0259lav\u0259l\u0259ri, d\u0259rman-Q\u0259hv\u0259&quot;}" data-select2-id="select2-data-247-r7xk">Qida əlavələri, dərman - Qəhvə</option>

                                <option value="{&quot;202_203&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-G\u00fczg\u00fc&quot;}" data-select2-id="select2-data-248-2tad">Ev aksesuarları (mebel, dekor və digər) - Güzgü</option>
                                <option value="{&quot;202_204&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Yataq mebeli&quot;}" data-select2-id="select2-data-249-ur0n">Ev aksesuarları (mebel, dekor və digər) - Yataq mebeli</option>
                                <option value="{&quot;202_205&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Qonaq mebeli&quot;}" data-select2-id="select2-data-250-66yq">Ev aksesuarları (mebel, dekor və digər) - Qonaq mebeli</option>
                                <option value="{&quot;202_206&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-M\u0259tb\u0259x mebeli&quot;}" data-select2-id="select2-data-251-8dq8">Ev aksesuarları (mebel, dekor və digər) - Mətbəx mebeli</option>
                                <option value="{&quot;202_207&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Hamam akseusarlar\u0131&quot;}" data-select2-id="select2-data-252-x8mp">Ev aksesuarları (mebel, dekor və digər) - Hamam akseusarları</option>
                                <option value="{&quot;202_208&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Divar ka\u011f\u0131z\u0131&quot;}" data-select2-id="select2-data-253-9hqb">Ev aksesuarları (mebel, dekor və digər) - Divar kağızı</option>
                                <option value="{&quot;202_209&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Saatlar&quot;}" data-select2-id="select2-data-254-y0kj">Ev aksesuarları (mebel, dekor və digər) - Saatlar</option>
                                <option value="{&quot;202_210&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Divar \u00fc\u00e7\u00fcn tablo &quot;}" data-select2-id="select2-data-255-i2h0">Ev aksesuarları (mebel, dekor və digər) - Divar üçün tablo </option>
                                <option value="{&quot;202_211&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Plastik m\u0259tb\u0259x \u0259\u015fyalar\u0131&quot;}" data-select2-id="select2-data-256-zcxi">Ev aksesuarları (mebel, dekor və digər) - Plastik mətbəx əşyaları</option>
                                <option value="{&quot;202_212&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Metaldan m\u0259tb\u0259x \u0259\u015fyalar\u0131&quot;}" data-select2-id="select2-data-257-xlh6">Ev aksesuarları (mebel, dekor və digər) - Metaldan mətbəx əşyaları</option>
                                <option value="{&quot;202_213&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-\u015e\u00fc\u015f\u0259d\u0259n m\u0259tb\u0259x \u0259\u015fyalar\u0131&quot;}" data-select2-id="select2-data-258-rjhq">Ev aksesuarları (mebel, dekor və digər) - Şüşədən mətbəx əşyaları</option>
                                <option value="{&quot;202_463&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-Dig\u0259r&quot;}" data-select2-id="select2-data-259-gc87">Ev aksesuarları (mebel, dekor və digər) - Digər</option>
                                <option value="{&quot;202_573&quot;:&quot;Ev aksesuarlar\u0131 (mebel, dekor v\u0259 dig\u0259r)-R\u0259sm \u0259s\u0259ri (\u0259l il\u0259 \u00e7\u0259kil\u0259n)&quot;}" data-select2-id="select2-data-260-4ilw">Ev aksesuarları (mebel, dekor və digər) - Rəsm əsəri (əl ilə çəkilən)</option>

                                <option value="{&quot;214_215&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Trenajor al\u0259tl\u0259r&quot;}" data-select2-id="select2-data-261-i8lb">İdman alətləri - Trenajor alətlər</option>
                                <option value="{&quot;214_216&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Toplar (futbol,voleybol, tennis,qolf v\u0259 s. \u00fc\u00e7\u00fcn)&quot;}" data-select2-id="select2-data-262-kym8">İdman alətləri - Toplar (futbol,voleybol, tennis,qolf və s. üçün)</option>
                                <option value="{&quot;214_217&quot;:&quot;\u0130dman al\u0259tl\u0259ri-\u00c7antalar&quot;}" data-select2-id="select2-data-263-kn3x">İdman alətləri - Çantalar</option>
                                <option value="{&quot;214_218&quot;:&quot;\u0130dman al\u0259tl\u0259ri-\u0130dmanda istifad\u0259 olunan yast\u0131qc\u0131qlar (dirs\u0259k, diz, sin\u0259, qollar, ayaqlar \u00fc\u00e7\u00fcn  v\u0259 s.)&quot;}" data-select2-id="select2-data-264-a8ul">İdman alətləri - İdmanda istifadə olunan yastıqcıqlar (dirsək, diz, sinə, qollar, ayaqlar üçün  və s.)</option>
                                <option value="{&quot;214_219&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Ba\u015f-\u00fcz \u00fc\u00e7\u00fcn qoruyucular (kaska, d\u0259bilq\u0259, ba\u015fl\u0131q  v\u0259 s.)&quot;}" data-select2-id="select2-data-265-qnap">İdman alətləri - Baş-üz üçün qoruyucular (kaska, dəbilqə, başlıq  və s.)</option>
                                <option value="{&quot;214_220&quot;:&quot;\u0130dman al\u0259tl\u0259ri-\u018flc\u0259kl\u0259r &quot;}" data-select2-id="select2-data-266-xerl">İdman alətləri - Əlcəklər </option>
                                <option value="{&quot;214_221&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Qoruyucu sar\u011f\u0131lar (\u0259l,ayaq,bil\u0259k, qol, diz v\u0259 s)&quot;}" data-select2-id="select2-data-267-hf4b">İdman alətləri - Qoruyucu sarğılar (əl,ayaq,bilək, qol, diz və s)</option>
                                <option value="{&quot;214_222&quot;:&quot;\u0130dman al\u0259tl\u0259ri-\u00c7ubuqlar (qolf, xokkey v\u0259 s.)&quot;}" data-select2-id="select2-data-268-6t1p">İdman alətləri - Çubuqlar (qolf, xokkey və s.)</option>
                                <option value="{&quot;214_223&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Raketka (tennis,badminton v\u0259 s.)&quot;}" data-select2-id="select2-data-269-e75o">İdman alətləri - Raketka (tennis,badminton və s.)</option>
                                <option value="{&quot;214_224&quot;:&quot;\u0130dman al\u0259tl\u0259ri-\u0130dman \u00fc\u00e7\u00fcn silahlar (paint ball, at\u0131c\u0131l\u0131q v\u0259 s )&quot;}" data-select2-id="select2-data-270-asq9">İdman alətləri - İdman üçün silahlar (paint ball, atıcılıq və s )</option>
                                <option value="{&quot;214_225&quot;:&quot;\u0130dman al\u0259tl\u0259ri-\u0130dman silahlar\u0131 \u00fc\u00e7\u00fcn toplar-g\u00fcll\u0259l\u0259r (paint ball, at\u0131c\u0131l\u0131q v\u0259 s )&quot;}" data-select2-id="select2-data-271-idtl">İdman alətləri - İdman silahları üçün toplar-güllələr (paint ball, atıcılıq və s )</option>
                                <option value="{&quot;214_226&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Seqveyl\u0259r v\u0259 elektrik skuterl\u0259r&quot;}" data-select2-id="select2-data-272-38t3">İdman alətləri - Seqveylər və elektrik skuterlər</option>
                                <option value="{&quot;214_227&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Diyirc\u0259kli konki, xiz\u0259k,skateboard,snowboard v\u0259 s&quot;}" data-select2-id="select2-data-273-0i1f">İdman alətləri - Diyircəkli konki, xizək,skateboard,snowboard və s</option>
                                <option value="{&quot;214_228&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Ox\u00e7uluq \u00fc\u00e7\u00fcn l\u0259vazimatlar&quot;}" data-select2-id="select2-data-274-lyo7">İdman alətləri - Oxçuluq üçün ləvazimatlar</option>
                                <option value="{&quot;214_229&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Gimnastika al\u0259tl\u0259ri&quot;}" data-select2-id="select2-data-275-5czx">İdman alətləri - Gimnastika alətləri</option>
                                <option value="{&quot;214_477&quot;:&quot;\u0130dman al\u0259tl\u0259ri-Dig\u0259r&quot;}" data-select2-id="select2-data-276-y2nh">İdman alətləri - Digər</option>

                                <option value="{&quot;230_231&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Avtomobill\u0259r \u00fc\u00e7\u00fcn kamera d\u0259stl\u0259ri (kamera, monitor)&quot;}" data-select2-id="select2-data-277-eynq">Kamera və hissələri - Avtomobillər üçün kamera dəstləri (kamera, monitor)</option>
                                <option value="{&quot;230_232&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Video registratorlar&quot;}" data-select2-id="select2-data-278-hjz0">Kamera və hissələri - Video registratorlar</option>
                                <option value="{&quot;230_233&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Video kameralar&quot;}" data-select2-id="select2-data-279-r0mk">Kamera və hissələri - Video kameralar</option>
                                <option value="{&quot;230_234&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Video n\u0259zar\u0259t kameralar\u0131&quot;}" data-select2-id="select2-data-280-b35f">Kamera və hissələri - Video nəzarət kameraları</option>
                                <option value="{&quot;230_235&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-DVR&quot;}" data-select2-id="select2-data-281-mgoh">Kamera və hissələri - DVR</option>
                                <option value="{&quot;230_236&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-R\u0259q\u0259msal kameralar (foto aparatlar) &quot;}" data-select2-id="select2-data-282-5v18">Kamera və hissələri - Rəqəmsal kameralar (foto aparatlar) </option>
                                <option value="{&quot;230_237&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Veb kameralar&quot;}" data-select2-id="select2-data-283-xrdh">Kamera və hissələri - Veb kameralar</option>
                                <option value="{&quot;230_238&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Obyektiv linzalar &quot;}" data-select2-id="select2-data-284-a72c">Kamera və hissələri - Obyektiv linzalar </option>
                                <option value="{&quot;230_239&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Selfie \u00e7ubuqlar\u0131, monopodlar, bipodlar, tripodlar&quot;}" data-select2-id="select2-data-285-kkpg">Kamera və hissələri - Selfie çubuqları, monopodlar, bipodlar, tripodlar</option>
                                <option value="{&quot;230_430&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Kameralar \u00fc\u00e7\u00fcn yadda\u015f kartlar\u0131 v\u0259 flash kartlar &quot;}" data-select2-id="select2-data-286-01fl">Kamera və hissələri - Kameralar üçün yaddaş kartları və flash kartlar </option>
                                <option value="{&quot;230_464&quot;:&quot;Kamera v\u0259 hiss\u0259l\u0259ri-Dig\u0259r&quot;}" data-select2-id="select2-data-287-v70g">Kamera və hissələri - Digər</option>

                                <option value="Kitablar" data-select2-id="select2-data-288-3f5x">Kitablar</option>
                                <option value="Kitab" data-select2-id="select2-data-289-y3jc">Kitab</option>
                                <option value="Jurnal" data-select2-id="select2-data-290-yl3r">Jurnal</option>
                                <option value="Elektron kitab" data-select2-id="select2-data-291-yqeg">Elektron kitab</option>
                                <option value="Audio kitab" data-select2-id="select2-data-292-jhd5">Audio kitab</option>
                                <option value="Film və musiqi diski" data-select2-id="select2-data-293-rj17">Film və musiqi diski</option>
                                <option value="Səsyazıları toplusu" data-select2-id="select2-data-294-rio6">Səsyazıları toplusu</option>
                                <option value="Elektron kitab oxuyucu" data-select2-id="select2-data-295-zloy">Elektron kitab oxuyucu</option>
                                <option value="Kimyəvi təmizləyici vasitələr" data-select2-id="select2-data-296-wzjk">Kimyəvi təmizləyici vasitələr</option>
                                <option value="Qabyuma vasitələri" data-select2-id="select2-data-297-zrts">Qabyuma vasitələri</option>
                                <option value="Paltaryuma vasitələri" data-select2-id="select2-data-298-g5wr">Paltaryuma vasitələri</option>
                                <option value="Avtomobil təmizləmə vasitələri" data-select2-id="select2-data-299-hd8o">Avtomobil təmizləmə vasitələri</option>
                                <option value="Mebel təmizləmə vasitələri" data-select2-id="select2-data-300-tvt9">Mebel təmizləmə vasitələri</option>
                                <option value="Digər vasitələr" data-select2-id="select2-data-301-w3rx">Digər vasitələr</option>
                                <option value="Suvinir və oyuncaqlar" data-select2-id="select2-data-302-b12k">Suvinir və oyuncaqlar</option>
                                <option value="Suvinirlər" data-select2-id="select2-data-303-xq82">Suvinirlər</option>
                                <option value="Oyuncaqlar" data-select2-id="select2-data-304-ghka">Oyuncaqlar</option>
                                <option value="Təmir-tikinti alətləri" data-select2-id="select2-data-305-usm3">Təmir-tikinti alətləri</option>
                                <option value="Əl alətləri, alət dəstləri" data-select2-id="select2-data-306-b8tb">Əl alətləri, alət dəstləri</option>
                                <option value="Elektrikli əl alətləri" data-select2-id="select2-data-307-p1kv">Elektrikli əl alətləri</option>
                                <option value="Digər" data-select2-id="select2-data-308-cqrg">Digər</option>
                                <option value="Ovçuluq ləvazimatları" data-select2-id="select2-data-309-wyxz">Ovçuluq ləvazimatları</option>
                                <option value="Balıqtutma vasitələri" data-select2-id="select2-data-310-c59b">Balıqtutma vasitələri</option>
                                <option value="Digər" data-select2-id="select2-data-311-93d9">Digər</option>
                                <option value="Digər" data-select2-id="select2-data-312-g6pd">Digər</option>
                                <option value="Digər" data-select2-id="select2-data-313-rdvj">Digər</option>
                                <option value="Digər" data-select2-id="select2-data-314-b2fv">Digər</option>
                                <option value="Digər" data-select2-id="select2-data-315-0628">Digər</option>
                                <option value="Soket dəstləri" data-select2-id="select2-data-316-01ez">Soket dəstləri</option>
                                <option value="Çadırlar" data-select2-id="select2-data-317-3xrr">Çadırlar</option>
                                <option value="Yuxu çantaları" data-select2-id="select2-data-318-3hrg">Yuxu çantaları</option>
                                <option value="Ov tüfənglərinin və tüfənglərin hissələri" data-select2-id="select2-data-319-pspq">Ov tüfənglərinin və tüfənglərin hissələri</option>
                                <option value="Ampullər, lampalar" data-select2-id="select2-data-320-8p5e">Ampullər, lampalar</option>
                                <option value="Tavan, divar, standart və masa lampaları" data-select2-id="select2-data-321-ztnd">Tavan, divar, standart və masa lampaları</option>
                                <option value="LED lampalar (parıltı lampalarını əvəz edir) və LED lampalar" data-select2-id="select2-data-322-w8bf">LED lampalar (parıltı lampalarını əvəz edir) və LED lampalar</option>
                                <option value="Nəqliyyat vasitələri üçün lampalar (parıltı filamenti)" data-select2-id="select2-data-323-v7v2">Nəqliyyat vasitələri üçün lampalar (parıltı filamenti)</option>
                                <option value="Nəqliyyat vasitələri üçün lampalar (Volfram halogen) H1, H4, H7" data-select2-id="select2-data-324-qz2b">Nəqliyyat vasitələri üçün lampalar (Volfram halogen) H1, H4, H7</option>
                                <option value="Nəqliyyat vasitələri üçün lampalar (xenon)" data-select2-id="select2-data-325-2x07">Nəqliyyat vasitələri üçün lampalar (xenon)</option>
                                <option value="Ofis ləvazimatları və kağız məhsulları" data-select2-id="select2-data-326-pbuj">Ofis ləvazimatları və kağız məhsulları</option>
                                <option value="Kartpostallar çap edilmişdir" data-select2-id="select2-data-327-rj58">Kartpostallar çap edilmişdir</option>
                                <option value="Təqvimlər" data-select2-id="select2-data-328-k2yv">Təqvimlər</option>
                                <option value="Qələm, marker, karandaş və rəsm boyaları" data-select2-id="select2-data-329-ihpu">Qələm, marker, karandaş və rəsm boyaları</option>
                                <option value="Qayçı" data-select2-id="select2-data-330-h7t7">Qayçı</option>
                                <option value="Heyvan təchizatı" data-select2-id="select2-data-331-2b5c">Heyvan təchizatı</option>
                                <option value="Heyvan ləvazimatları (qurğuşun və qoşqu, it paltoları, cilovlar, at xalçaları, yəhərlər və yəhər parçalar və digər at ləvazimatları)" data-select2-id="select2-data-332-secw">Heyvan ləvazimatları (qurğuşun və qoşqu, it paltoları, cilovlar, at xalçaları, yəhərlər və yəhər parçalar və digər at ləvazimatları)</option>
                                <option value="İtlər üçün naviqasiya yaxası" data-select2-id="select2-data-333-9dxi">İtlər üçün naviqasiya yaxası</option>
                                <option value="Heyvan oyuncaqları, rezin" data-select2-id="select2-data-334-szva">Heyvan oyuncaqları, rezin</option>
                                <option value="Simli və ipli heyvan oyuncaqları və pişik ağacları" data-select2-id="select2-data-335-5aom">Simli və ipli heyvan oyuncaqları və pişik ağacları</option>
                                <option value="Süfrə və mətbəx əşyaları" data-select2-id="select2-data-336-q56l">Süfrə və mətbəx əşyaları</option>
                                <option value="Plastik süfrə və mətbəx əşyaları da birdəfəlik" data-select2-id="select2-data-337-ojeh">Plastik süfrə və mətbəx əşyaları da birdəfəlik</option>
                                <option value="Taxta süfrə və ya mətbəx əşyaları" data-select2-id="select2-data-338-0djw">Taxta süfrə və ya mətbəx əşyaları</option>
                                <option value="Adi dulusçuluq qabları və mətbəx əşyaları" data-select2-id="select2-data-339-hamf">Adi dulusçuluq qabları və mətbəx əşyaları</option>
                                <option value="Seramik süfrə və ya mətbəx ləvazimatları" data-select2-id="select2-data-340-a6e6">Seramik süfrə və ya mətbəx ləvazimatları</option>
                                <option value="Porselen və ya çini süfrə və ya ev əşyaları" data-select2-id="select2-data-341-014h">Porselen və ya çini süfrə və ya ev əşyaları</option>
                                <option value="Masa və ya mətbəx üçün istifadə olunan şüşə qablar" data-select2-id="select2-data-342-2unk">Masa və ya mətbəx üçün istifadə olunan şüşə qablar</option>
                                <option value="Masa örtükləri və peçetələr" data-select2-id="select2-data-343-lok9">Masa örtükləri və peçetələr</option>
                                <option value="Mətbəx bıçaqları, masa  bıçaqları" data-select2-id="select2-data-344-m60a">Mətbəx bıçaqları, masa  bıçaqları</option>
                                <option value="Qazan, tava" data-select2-id="select2-data-345-qohw">Qazan, tava</option>
                                <option value="Tibbi ləvazimatlar və avadanlıqları" data-select2-id="select2-data-346-nm12">Tibbi ləvazimatlar və avadanlıqları</option>
                                <option value="Digər" data-select2-id="select2-data-347-w8jc">Digər</option>
                                <option value="Digər" data-select2-id="select2-data-348-zhc4">Digər</option>
                                <option value="Arduino" data-select2-id="select2-data-349-1hcz">Arduino</option>
                                <option value="Prototipləşdirmə lövhələri" data-select2-id="select2-data-350-q2gt">Prototipləşdirmə lövhələri</option>
                                <option value="DC motolar" data-select2-id="select2-data-351-dubs">DC motolar</option>
                                <option value="İzalyatorlar" data-select2-id="select2-data-352-difx">İzalyatorlar</option>
                                <option value="Kondensatorlar" data-select2-id="select2-data-353-hdc3">Kondensatorlar</option>
                                <option value="Rezistorlar" data-select2-id="select2-data-354-az6f">Rezistorlar</option>
                                <option value="Tranzistorlar" data-select2-id="select2-data-355-cjlf">Tranzistorlar</option>
                                <option value="Konnektorlar" data-select2-id="select2-data-356-vdhh">Konnektorlar</option>
                                <option value="Lehim dəstləri" data-select2-id="select2-data-357-ijbz">Lehim dəstləri</option>
                                <option value="Ölçü cihazları" data-select2-id="select2-data-358-if6i">Ölçü cihazları</option>
                                <option value="Enerji tənzimləyiciləri" data-select2-id="select2-data-359-ugm1">Enerji tənzimləyiciləri</option>
                                <option value="Modullar" data-select2-id="select2-data-360-gt8s">Modullar</option>
                                <option value="Simsiz rabitə dəstləri" data-select2-id="select2-data-361-9vsr">Simsiz rabitə dəstləri</option>
                                <option value="Digər" data-select2-id="select2-data-362-a4wq">Digər</option>
                                <option value="Musiqi alətləri; onların hissələri və ləvazimatlarımusiqi alətləri; onların hissələri və ləvazimatları" data-select2-id="select2-data-363-g8wl">Musiqi alətləri; onların hissələri və ləvazimatlarımusiqi alətləri; onların hissələri və ləvazimatları</option>
                                <option value="Simli musiqi alətlər" data-select2-id="select2-data-364-v0uo">Simli musiqi alətlər</option>
                                <option value="Klavişli musiqi alətləri" data-select2-id="select2-data-365-wgy5">Klavişli musiqi alətləri</option>
                                <option value="Nəfəsli musiqi alətləri" data-select2-id="select2-data-366-beaf">Nəfəsli musiqi alətləri</option>
                                <option value="Zərb musiqi alətləri" data-select2-id="select2-data-367-625c">Zərb musiqi alətləri</option>
                                <option value="Musiqi sandıqçaları" data-select2-id="select2-data-368-ddvg">Musiqi sandıqçaları</option>
                                <option value="Musiqi alətlərin hissələri və ləvazimatları" data-select2-id="select2-data-369-y46x">Musiqi alətlərin hissələri və ləvazimatları</option>
                                <option value="Bitki və bitki toxumları" data-select2-id="select2-data-370-1m57">Bitki və bitki toxumları</option>
                                <option value="Çiçəklər üçün bitki toxumları" data-select2-id="select2-data-371-8xyx">Çiçəklər üçün bitki toxumları</option>
                                <option value="Digərləri" data-select2-id="select2-data-372-4pbu">Digərləri</option>
                                <option value="Elektronika" data-select2-id="select2-data-373-k9h3">Elektronika</option>

                            </select>
                            <input type="checkbox" className="mt-3 ml-1"/>
                            <span className="text-gray-500 ml-2">Tərkibində maye var</span>
                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Miqdar
  </span>
                            <input
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Mehsulun qiyməti (TL)
  </span>
                            <input
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Sənəd
  </span>
                            <div className="relative">
                                <div className="absolute top-2 right-3">
                                    <Image src="/image/clip.png" width="24" height="24"/>
                                </div>
                                <input className="w-2/3 mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                       placeholder="Fayl seçilməyib">

                                </input>
                            </div>
                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Sipariş numarası
  </span>
                            <div className="grid col-2">
                                <input className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                >

                                </input>
                            </div>
                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
Qeyd  </span>
                            <textarea className="resize rounded-md mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">

                            </textarea>
                            <input type="checkbox" className="mt-3 ml-1"/>
                            <Link href="terms"><a><span className="text-blue-800 ml-2 text-sm">Dasinma sertlerini </span></a></Link><span className="text-sm">qebul edirem </span>
                        </label>

                        <button className=" mb-24 w-full bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                            Bəyan et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}