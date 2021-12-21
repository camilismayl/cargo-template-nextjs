import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";

export default function Index() {
    return (

        <div className="bg-gray-100 h-screen">
            <Head>
                <title> Bağlamalar</title>
            </Head>
            <Layout>

            </Layout>
            <div className="px-8 pt-16">
                <div className="flex justify-center p-8">
                    <h3 className="text-gray-500 font-medium">Bağlamalar</h3>
                </div>
                <div className="bg-white flex justify-center p-4 cursor-pointer">
                    <Image src="/image/plus.png" width="24" height="24"/>

                    <Link href="newparcels"><h3 className="text-blue-600 font-bold pl-3">Bəyan et</h3></Link>
                </div>
                <div className="bg-white flex justify-between p-4 mt-7">
                    <h3 className="text-blue-600 font-medium">Bütün bağlamalar (0)</h3>

                    <Image src="/image/down-arrow.png" width="24" height="24"/>


                </div>
            </div>
        </div>
    )

}
//FirstPost