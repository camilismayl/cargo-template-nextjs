import Layout from "../components/layout";
import Head from "next/head";
export default function Tarifler() {
    return <div>
        <Head>
            <title> Tariflər</title>
        </Head>
        <Layout>

        </Layout>


        <div className="tarifler bg-white mt-20 mb-16 ">
            <div>
                <div className="mx-3">
                    <select
                        className=" mt-1 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                        <option>Türkiyə</option>

                    </select>
                </div>
                <div className="p-5 border-b">
                    <h3 className="font-bold text-indigo-700 text-center">Tariflər</h3>
                </div>


                <div className="p-5 border-b flex justify-between">
                    <h3 className="font-normal">0 - 100 qr</h3>
                    <h3 className="font-medium">$ 1</h3>
                </div>
                <div className="p-5 border-b flex justify-between">
                    <h3 className="font-normal">100 - 250 qr</h3>
                    <h3 className=" font-medium">$ 2</h3>
                </div>
                <div className="p-5 border-b flex justify-between">
                    <h3 className="font-normal">250 - 500 qr</h3>
                    <h3 className=" font-medium">$ 3</h3>
                </div>
                <div className="p-5 border-b flex justify-between">
                    <h3 className="font-normal">500-750 qr</h3>
                    <h3 className=" font-medium">$ 3.3</h3>
                </div>
                <div className="p-5 border-b flex justify-between">
                    <h3 className="font-normal">750-1 kq</h3>
                    <h3 className=" font-medium">$ 3.6</h3>
                </div>
                <div className="p-5 border-b flex justify-between">
                    <h3 className="font-normal">1-5 kq</h3>
                    <h3 className=" font-medium">$ 3.6</h3>
                </div>
                <div className="p-5 border-b flex justify-between">
                    <h3 className="font-normal">5-10 kq</h3>
                    <h3 className=" font-medium">$ 3.5</h3>
                </div>
                <div className="p-5 border-b flex justify-between">
                    <h3 className="font-normal">10kq +</h3>
                    <h3 className="font-medium">$3.3</h3>
                </div>
            </div>
            <div className="p-5">
                <h3 className="font-bold text-indigo-700 text-center">MAYE MƏHSULLARININ TARİFİ
                </h3>
            </div>
            <div className="p-5 border-b flex justify-between">
                <h3 className="font-normal">0 - 100 qr</h3>
                <h3 className="font-medium">$ 1</h3>
            </div>
            <div className="p-5 border-b flex justify-between">
                <h3 className="font-normal">100 - 250 qr</h3>
                <h3 className=" font-medium">$ 2.5</h3>
            </div>
            <div className="p-5 border-b flex justify-between">
                <h3 className="font-normal">250 - 500 qr</h3>
                <h3 className=" font-medium">$ 3</h3>
            </div>
            <div className="p-5 border-b flex justify-between">
                <h3 className="font-normal">500-750 qr</h3>
                <h3 className=" font-medium">$ 3.3</h3>
            </div>
            <div className="p-5 border-b flex justify-between">
                <h3 className="font-normal">750-1 kq</h3>
                <h3 className=" font-medium">$ 3.6</h3>
            </div>
            <div className="p-5 border-b flex justify-between">
                <h3 className="font-normal">1-5 kq</h3>
                <h3 className=" font-medium">$ 3.6</h3>
            </div>
            <div className="p-5 border-b flex justify-between">
                <h3 className="font-normal">5-10 kq</h3>
                <h3 className=" font-medium">$ 4.1</h3>
            </div>
            <div className="p-5 border-b flex justify-between ">
                <h3 className="font-normal">10kq +</h3>
                <h3 className="font-medium">$3.5</h3>
            </div>
        </div>
    </div>
}