import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";
export default function Settings() {
    return (
        <div>
            <Layout></Layout>
            <Head>
                <title> Tənzimləmələr</title>
            </Head>
            <div className="px-4 pt-16">
                <h3 className='px-7 pt-7 pb-4 font-medium text-lg text-center'>Tənzimləmələr</h3>
                <div className="flex float-right">
                    <Image src="/image/pen.png" width="24" height="24"/>

                    <h3 className="text-blue-500">Şifrəni dəyiş</h3></div>
                <div className="pt-16">
                    <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Ad(ingilis hərfləri ilə)
  </span>
                        <input
                            className="bg-gray-100 mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="your name"/>
                    </label>
                    <label className="block pb-5">
  <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Soyad (ingilis hərfləri ilə)
  </span>
                        <input
                            className=" bg-gray-100 mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="your surname"/>
                    </label>
                    <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Email
  </span>
                        <input type="email" name="email"
                               className="bg-gray-100 mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                               placeholder="you@example.com"/>
                    </label>
                    <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Telefon
  </span>
                        <div className="grid gap-4 grid-cols-2">
                            <select className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                <option>+99470</option>
                                <option>+99450</option>
                                <option>+99451</option>
                                <option>+99477</option>
                                <option>+99410</option>
                                <option>+99499</option>
                                <option>+99460</option>
                            </select>
                            <input type="email" name="email"
                                   className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                   placeholder=""/>
                        </div>
                    </label>
                    <label className="block pb-5">
  <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Cinsinizi seçin
  </span>
                        <select className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                            <option>Kişi</option>
                            <option>Qadın</option>

                        </select>
                    </label>


                    <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Doğum tarixi
  </span>
                        <input type="email" name="email"
                               className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                               placeholder=""/>
                    </label>
                    <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
Ünvan  </span>
                        <input type="email" name="email"
                               className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                               placeholder=""/>
                    </label>
                    <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
Şəxsiyyət vəsiqəsinin seriya nömrəsi   </span>
                        <div className="grid gap-4 grid-cols-2">
                            <select className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                <option>AZE</option>
                                <option>AA</option>
                                <option>MYI</option>
                                <option>DYI</option>
                            </select>
                            <input type="email" name="email"
                                   className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                   placeholder=""/>
                        </div>
                    </label>
                    <label className="block pb-5">
  <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
FIN kod  </span>
                        <input
                            className="  mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="your surname"/>
                    </label>
                    <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
Bağlamanın çatdırılma növü  </span>

                        <select className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                            <option>Filiala çatdırılma</option>
                        </select>
                    </label>

                    <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
Bağlamaları təhvil almaq istədiyiniz filial </span>

                        <select className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                            <option value="">Filial seçin</option>
                            <option value="1" selected="">XALQLAR dostluğu filialı</option>
                            <option value="2">ƏHMƏDLİ təhvil məntəqəsi</option>
                            <option value="3">MƏHƏMMƏDLİ təhvil məntəqəsi</option>
                            <option value="4">GƏNCƏ təhvil məntəqəsi</option>
                            <option value="5">MİNGƏCEVİR təhvil məntəqəsi</option>
                            <option value="6">LƏNKƏRAN təhvil məntəqəsi</option>
                            <option value="7">XIRDALAN təhvil məntəqəsi</option>
                            <option value="8">SUMQAYIT təhvil məntəqəsi</option>
                            <option value="9">BALAKƏN təhvil məntəqəsi</option>
                            <option value="10">ŞƏKİ təhvil məntəqəsi</option><option value="">Filial seçin</option>

                        </select>
                    </label>
                    <button className=" mb-24 w-full bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                        Təsdiqlə
                    </button>
                </div>
            </div>
        </div>
    )
}