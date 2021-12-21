import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
export default function Etibar(){
    return <div className="bg-gray-100 h-screen">
        <Layout>

        </Layout>
        <Head>
            <title>Etibarnamə</title>
        </Head>
        <div className="px-8 pt-12">
            <div className="flex justify-center p-8">
                <h3 className="text-gray-500 font-medium">Etibarnamə</h3>
            </div>
            <div className="bg-white flex justify-center p-4 cursor-pointer">

                <Image src="/image/plus.png" width="24" height="24"/>

                <Link href="newtrusteds"><h3 className="text-blue-600 font-bold pl-3">Etibarnamə yarat</h3>
                </Link>
            </div>

        </div>
    </div>
}