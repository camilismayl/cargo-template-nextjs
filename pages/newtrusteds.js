import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

export default function Etibar() {
    return <div className="bg-gray-100 h-screen pt-20">
        <Layout/>
        <Head>
            <title>Etibarnamə yarat</title>
        </Head>
        <div className="px-8  bg-white mx-4  rounded-md">
            <div className="flex justify-center p-8">
                <h3 className=" font-medium">Etibarnamə yarat</h3>
            </div>
            <label className="block pb-5">
  <span className="text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
    Ad/Soyad
  </span>
                <input
                    className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder=""/>
            </label>
            <label className="block pb-5">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-500">
    Ş.V nomresi
  </span>
                <div className="grid gap-4 grid-cols-2">
                    <select
                        className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
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
            <button className=" mb-8 w-full bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                Yadda saxla
            </button>

        </div>
    </div>
}