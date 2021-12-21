import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";
import Image from "next/image";
export default function Index() {
    return (

        <div className="bg-gray-100 h-screen">
            <Head>
                <title> Müraciətlər</title>
            </Head>
            <Layout></Layout>
            <div className="px-8">
                <div className="flex justify-center p-8 pt-20">
                    <h3 className="text-gray-500 font-medium">Müraciətlər</h3>
                </div>
                <div className="bg-white flex justify-center p-4">
                    <Link href="newapplication"><a>
                    <Image src="/image/plus.png" width="24" height="24"/>
                    </a></Link>
                        <Link href="newapplication"><a>
                        <h3 className="text-blue-600 font-bold pl-3">Onlayn müraciət et </h3></a></Link>

                </div>
                <div className="bg-white flex justify-between p-4 mt-7">
                    <h3 className="text-blue-600 font-medium">Bütün müraciətlər (0)</h3>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>

                </div>
            </div>
        </div>
    )

}
//FirstPost