import Link from "next/link";
import Image from "next/image";

export default function Layout({chidlren}) {
    return <div>
        {chidlren}
        <div className="p-4 bg-blue-600 fixed top-0 left-0 right-0 z-10">
            <div className="logoolanhisse flex justify-between " id="menu">
                <Image src="/image/hamburger.png" width="24" height="24"/>
                <Link href="./"><a>

                <Image src="/image/logo_b.png" width="200" height="24"/>
                </a></Link>

                <Link href="notifications"><a>
                    <Image src="/image/notification.png" width="24" height="24"/>
                </a></Link>
            </div>

        </div>


        <div className="fixed z-50 top-0 right-0 left-0 bottom-0 w-64 bg-blue-400 p-4 overflow-auto hidden ">
            <div className="flex border-b">
                <div className="pt-6 pr-4 scale-150">
                    <button>
                        <Image src="/image/user.png" width="24" height="24"/>
                    </button>
                </div>
                <div className="pt-3  pb-4">
                    <h3 className="font-mono">Cəmil Ismayıllı </h3>
                    <h3 className="font-medium">ID:70085</h3>

                </div>
                <button className="ml-6"><Image src="/image/close.png" width="20" height="20"/>
                </button>
            </div>
            <div className="">
                <Link href="./">
                    <a>
                <div className="flex py-4">
                    <Image src="/image/home.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Şəxsi kabinet</h3>

                </div>
                    </a></Link>
            </div>
            <div className="">
                <Link href="orders"><a>
                <div className="flex py-4">
                    <Image src="/image/shopping.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Sifarişlər</h3>

                </div>
                </a></Link>
            </div>
            <div className="">
                <Link href="parcels"><a>

                <div className="flex py-4">
                    <Image src="/image/box.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Bağlamalar</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="balance"><a>

                <div className="flex py-4">
                    <Image src="/image/coin.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Balans</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="trusteds"><a>
                <div className="flex py-4">
                    <Image src="/image/folder.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Etibarnamə</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="applications"><a>

                <div className="flex py-4">
                    <Image src="/image/clipboard.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Müraciətlər</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="tariffs"><a>

                <div className="flex py-4">
                    <Image src="/image/shield.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Tarif</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="settings"><a>

                <div className="flex py-4">
                    <Image src="/image/settings.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Tənzimləmə</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="shops"><a>

                <div className="flex py-4">
                    <Image src="/image/store.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Mağazalar</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="terms"><a>

                <div className="flex py-4">
                    <Image src="/image/documents.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Daşınma şərtləri</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="news"><a>

                <div className="flex py-4">
                    <Image src="/image/newspaper-folded.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Xəbərlər</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="faq"><a>

                <div className="flex py-4">
                    <Image src="/image/information.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">FAQ</h3>

                </div>
                </a></Link>

            </div>
            <div className="">
                <Link href="communication"><a>

                <div className="flex py-4">
                    <Image src="/image/telephone.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Əlaqə</h3>

                </div>
                </a></Link>

            </div>
            <div className="">

                <div className="flex py-4">
                    <Image src="/image/logout.png" width="24" height="24"/>

                    <h3 className="pl-2 font-medium">Çıxış</h3>

                </div>
            </div>
        </div>


        <div
            className="althisse flex bg-white justify-between py-3 px-6 fixed bottom-0 left-0 right-0 z-10 border pb-3">
            <div >
                <Link href="./">
                <a>
                    <div className="transform scale-125 flex justify-center">
                        <Image src="/image/home.png" width="24" height="24"/>
                    </div>
                    <h3 className="font-medium font-sans text-blue-800 mt-1">Ana sehife</h3>
                </a></Link></div>
            <div>
                <Link href="balance"><a>
                    <div className="transform scale-125 flex justify-center">

                        <Image src="/image/coin.png" width="24" height="24"/>

                    </div>
                    <h3 className="font-medium font-sans text-blue-800 mt-1">Balans</h3>
                </a></Link>
            </div>
            <div>
                <Link href="orders">
                    <a>
                        <div className="transform scale-125 flex justify-center">


                            <Image src="/image/shopcart.png" width="24" height="24"/>

                        </div>
                        <h3 className="font-medium font-sans text-blue-800 mt-1">Sifarisler</h3></a>
                </Link>
            </div>
            <div><Link href="parcels">
                <a>
                    <div className="transform scale-125 flex justify-center">
                        <Image src="/image/box.png" width="24" height="24"/>

                    </div>
                    <h3 className="font-medium font-sans text-blue-800 mt-1">Baglamalar</h3>
                </a>
            </Link></div>
        </div>
    </div>
}