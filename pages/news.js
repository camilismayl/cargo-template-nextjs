import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function News() {
    return <div>
        <Layout>

        </Layout>
        <Head>
            <title>Xəbərlər</title>
        </Head>
        <div className="mt-16 p-4 mb-4">
            <h3 className="text-center font-medium pb-4"> Xəbərlər</h3>
            <div className="border-b mt-4">
                <Link href="../news/newslar/xeber1"><a>
                    <div>
                        <Image src="/image/resizer.jpeg" height="400" width="400"/>
                        <h3 className="font-medium ">Trendyolun möhtəşəm "Efsane Günler" endirimləri Başladı!</h3>
                    </div>
                    <div className="flex py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <h3 className="font-normal text-gray-500 pl-3 mb-5">23.11.2021
                        </h3>
                    </div>
                </a></Link>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/bf.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">"BLACK FRIDAY"</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">21.11.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/terezi.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Bunu siz istədiniz, biz etdik!</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">20.11.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/telebe.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">"TƏLƏBƏLƏRƏ" 20% Endirim</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">01.11.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/xerite.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Orderkargo.az dan HƏDİYYƏ var</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">15.10.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/gomruk.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">DİQQƏT!</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">12.10.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/yeni.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Yəni məntəqəmiz "MƏHƏMMƏDİ"-də</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">08.10.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/ehmed.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Hörmətli müştərilər! Sizlərə daha da keyfiyyətli xidmət göstərmək üçün durmadan çalışırıq.</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">03.10.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/ty.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Trendyol tətbiqinin yenilənməsindən sonra, yaranmış çətinliyi aradan qaldırmaq üçün nə etməli?</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">03.10.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/anim.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Anım günü!</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">27.09.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/acilis.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Açılışa özəl</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">20.09.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/sar.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Xalqlar dostluğu filalımız artıq xidmətinizdə</h3>
                </div>
                <div className="flex py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">20.09.2021

                    </h3>
                </div>
            </div>
            <div className="border-b mt-10">
                <div>
                    <Image src="/image/son.jpeg" height="400" width="400"/>
                    <h3 className="font-medium ">Keyfiyyət və məmnuniyyət axtaran müştərilər biz gəldik</h3>
                </div>
                <div className="flex py-2 mb-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <h3 className="font-normal text-gray-500 pl-3 mb-5">17.09.2021

                    </h3>
                </div>
            </div>

        </div>

    </div>
}