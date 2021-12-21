import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";

export default function Newapplication() {
    return <div>
        <Layout>

        </Layout>
        <Head>
            <title>Müraciət et</title>
        </Head>
        <div>
            <div className="px-4 pt-16">
                <h3 className='px-7 pt-7 pb-4 font-medium text-lg text-center'>Müraciət et </h3>

                <div className="pt-3">
                    <label className="block pb-5">
  <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Kateqoriya
  </span>
                        <select className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                            <option>Sifariş haqqında məlumat</option>
                            <option>Sistemə salınmayan bağlama</option>
                            <option> Bağlamanın gecikməsi</option>
                            <option>  Yerli anbarda tapılmayan bağlama</option>
                            <option> FİN kod / Gömrükdə bəyan</option>
                            <option>Hesaba əlavə edilmiş yanlış bağlama</option>
                            <option>İadə</option>
                            <option> Balans əməliyyatları</option>
                            <option>Sığorta</option>
                            <option>Gömrük</option>
                            <option> Təklif və iradlar</option>
                            <option>Digər</option>
                            <option> Yanlış gələn sifariş</option>
                            <option>Sifarişin alınması</option>
                        </select>
                    </label>
                    <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Ölkə
  </span>
                        <select className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                            <option>Turkiye</option>

                        </select>
                    </label>
                    <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    İzləmə kodu
  </span>
                        <input
                            className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                    </label>
                    <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Faylı seçin
  </span>
                        <div className="relative">
                            <div className="absolute top-2 right-3">
                                <Image src="/image/clip.png" width="24" height="24"/>

                            </div>
                            <input
                                className="w-2/3 mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Fayl seçilməyib">

                            </input>
                        </div>
                    </label>
                    <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
Mesaj  </span>
                        <textarea className="resize rounded-md mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">

                            </textarea>
                    </label>


                    <button
                        className=" mb-24 w-full bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                        Göndər
                    </button>
                </div>
            </div>
        </div>
    </div>
}