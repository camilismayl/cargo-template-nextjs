import Layout from "../components/layout";
import Image from "next/image";
import Head from "next/head";

export default function Xaricdekiunvanlar() {
    return (
        <div>
            <Head>
                <title> Xaricdəki ünvanlarım</title>
            </Head>
            <Layout>

            </Layout>
            <div className="px-4 pt-16 mt-6 pb-5">

                <select
                    className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                    <option>Türkiyə</option>

                </select>
            </div>
            <div className="px-4 pb-8">
                <div className="border mb-16">
                    <div className="bg-gray-100 flex justify-between px-5 py-3">
                        <div>
                            <h3 className='text-gray-500 font-normal'>Adres başlığı</h3>
                            <h3 className="font-medium ">ORD700805</h3>
                        </div>
                        <div className="pt-3">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>
                    <div className=" flex justify-between px-5 py-3">
                        <div>
                            <h3 className='text-gray-500 font-normal'>Ad Soyad</h3>
                            <h3 className="font-medium ">Camil Ismayilli</h3>
                        </div>
                        <div className="pt-3">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>
                    <div className="bg-gray-100 flex justify-between px-5 py-3">
                        <div>
                            <div className="flex">
                                <h3 className='text-gray-500 font-normal pr-2'>Adres 1</h3>

                            </div>
                            <h3 className="font-medium w-60">ORD700805 Camil Ismayilli , Atatürk cad. S.Çeşme mah. 2. Vişne sok. NO:12B</h3>
                        </div>
                        <div className="pt-7">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>
                    <div className=" flex justify-between px-5 py-3">
                        <div>
                            <h3 className='text-gray-500 font-normal'>Il sehir</h3>
                            <h3 className="font-medium ">İstanbul</h3>
                        </div>
                        <div className="pt-3">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>
                    <div className="bg-gray-100 flex justify-between px-5 py-3">
                        <div>
                            <h3 className='text-gray-500 font-normal'>Ilce/Semt</h3>
                            <h3 className="font-medium ">Küçükçekmece</h3>
                        </div>
                        <div className="pt-3">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>

                    <div className=" flex justify-between px-5 py-3">
                        <div>
                            <h3 className='text-gray-500 font-normal'>ZIP</h3>
                            <h3 className="font-medium ">34295</h3>
                        </div>
                        <div className="pt-3">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>
                    <div className="bg-gray-100 flex justify-between px-5 py-3">
                        <div>
                            <h3 className='text-gray-500 font-normal'>Ulke</h3>
                            <h3 className="font-medium ">Turkiye</h3>
                        </div>
                        <div className="pt-3">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>
                    <div className=" flex justify-between px-5 py-3">
                        <div>
                            <h3 className='text-gray-500 font-normal'>TC Kimlik </h3>
                            <h3 className="font-medium ">99164072862</h3>
                        </div>
                        <div className="pt-3">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>
                    <div className="bg-gray-100 flex justify-between px-5 py-3">
                        <div>
                            <h3 className='text-gray-500 font-normal'>Mobil telefon</h3>
                            <h3 className="font-medium ">0(545)3889779</h3>
                        </div>
                        <div className="pt-3">
                            <Image src="/image/copy.png" width="24" height="24"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}