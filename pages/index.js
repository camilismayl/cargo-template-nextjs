import styles from '../styles/Home.module.css'
import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";
import Drawermenu from "../components/drawermenu";
import Image from "next/image";


export default function Home() {
    return (
        <div className="container pt-14">
            <Head>
                <title> Orderkargo.az</title>
            </Head>
            <Drawermenu/>
            <Layout/>
            <header className="p-4 bg-blue-600 fixed top-0 left-0 right-0 z-10 ">
                <div className="logoolanhisse flex justify-between " id="menu">
                    <Image src="/image/hamburger.png" width="24" height="24"/>
                    <Link href="./"><a>

                        <Image src="/image/logo_b.png" width="200" height="24"/>
                    </a></Link>
                    <Link href="notifications"><a>
                        <Image src="/image/notification.png" width="24" height="24"/>
                    </a></Link>
                </div>
                <div className="mt-7">
                    <span className="font-semibold text-white">#154328 </span>

                    <span className="font-medium text-white">Camil Ismayilli </span>
                </div>
            </header>
            <div className="menu px-6 py-8 bg-gray-100 pt-10">
                <div className="buttons flex justify-between">
                    <Link href="orders">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                            Sifariş et
                        </button>
                    </Link>
                    <Link href="parcels">
                        <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                            Bəyan et
                        </button>
                    </Link>
                </div>
                <div className="esaslar py-7">
                    <div className="grid gap-x-6 gap-y-6 grid-cols-2 place-items-center">
                        <div className=" shadow-xl	bg-white w-24 h-24 flex items-center justify-center"><Link
                            href="orders"><a>
                            <div className="flex justify-center">
                                <Image src="/image/shopcart.png" width="24" height="24"/>

                            </div>
                            <h3 className="font-medium">Sifarişlər</h3></a></Link></div>
                        <div className=" shadow-xl bg-white w-24 h-24 flex items-center justify-center"><Link
                            href="parcels"><a>
                            <div className="flex justify-center">
                                <Image src="/image/box.png" width="24" height="24"/>

                            </div>
                            <h3 className="font-medium">Bağlamalar </h3></a></Link></div>
                        <div className="shadow-xl bg-white w-24 h-24 flex items-center justify-center">
                            <Link href="foreign-addresses">
                                <a>

                                    <div className="flex justify-center">

                                        <Image src="/image/world.png" width="24" height="24"/>

                                    </div>


                                    <h3 className="text-center font-medium">Xaricdəki ünvanlarım</h3>
                                </a>
                            </Link>
                        </div>

                        <div className="shadow-xl bg-white w-24 h-24 flex items-center justify-center"><Link
                            href="applications"><a>
                            <div className="flex justify-center">

                                <Image src="/image/clipboard.png" width="24" height="24"/>

                            </div>
                            <h3 className="font-medium">Müraciətlər</h3></a></Link></div>

                    </div>
                </div>
                <div className="balans bg-white mt-4 mb-20  ">
                    <div className="p-5 border-b"><h3 className="font-bold text-indigo-700">Balans</h3></div>
                    <div className="p-5 border-b flex justify-between"><h3 className="font-medium">TL:<span
                        className="text-gray-500 font-medium pl-4">0$</span>
                    </h3>
                        <Image src="/image/plus.png" width="24" height="24"/>

                    </div>
                    <div className="p-5 border-b flex justify-between"><h3 className="font-medium">USD:<span
                        className="text-gray-500 font-medium pl-4">0$</span></h3>
                        <Image src="/image/plus.png" width="24" height="24"/>

                    </div>
                    <div className="p-5 border-b flex justify-between"><h3 className="font-medium">Cari ay ərzində:</h3>
                        <h3 className="text-gray-500 font-medium">$ 0</h3>
                    </div>
                    <div className="p-5 border-b flex justify-between"><h3 className="font-medium">Son 6 ay
                        ərzində:</h3>
                        <h3 className="text-gray-500 font-medium">$ 0.00</h3>
                    </div>

                </div>
            </div>


        </div>
    )
}
