import Layout from "../components/layout";
import Head from "next/head";

export default function Sifariset() {
    return (
        <div>
            <Layout>
            </Layout>
            <Head>
                <title>Sifariş et</title>
            </Head>
            <div>
                <div className="px-4 pt-16">
                    <h3 className='px-7 pt-7 pb-4 font-medium text-lg text-center'>Sifariş et </h3>

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
   Məhsulun linki
  </span>
                            <input
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>
                        <label className="block pb-5 grid gap-4 grid-cols-2">
                            <div>
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Telefon
  </span>

                                <input type="email" name="email"
                                       className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                       placeholder=""/></div>
                            <div>
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Ölçüsü
  </span>
                                <input type="email" name="email"
                                       className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                       placeholder=""/></div>

                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
  Rəngi
  </span>
                            <input
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
 Məbləği
  </span>
                            <input
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>
                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
  Turkiye Daxili Kargo
  </span>
                            <input
                                className=" mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>


                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Toplam (+5%)
  </span>
                            <input
                                className="bg-gray-100 mt-1 px-3 py-2 border shadow-sm border-gray-300  focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            />
                        </label>


                        <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
Qeyd  </span>
                            <textarea className="resize rounded-md mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">

                            </textarea>
                            <input type="checkbox" className="mt-3 ml-1"/>
                            <span className="text-blue-800 ml-2 text-sm">Məsafəli satış sözləşməsini </span><span className="text-sm">qəbul edirem </span>
                        </label>

                        <button className=" mb-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                            Səbətə əlavə et
                        </button>
                        <button className=" mb-24 w-full bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                            Davam et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}