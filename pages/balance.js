import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Balance() {
    return (
        <div>


            <Head>
                <title>
                    Balans
                </title>


            </Head>
            <Layout/>

            <div className="mt-14 bg-gray-100 h-screen ">
                <div className="bg-blue-600">
                    <div className="py-3">
                        <div className="bg-blue-500  rounded-2xl w-72 h-52 m-auto border">
                            <div className="p-6">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-medium text-lg">
                                            Balans
                                        </h3>
                                        <h3 className="font-medium text-lg">
                                            TL
                                        </h3>
                                    </div>
                                    <div>
                                        <Image src="/image/turkish-lira.png" width="24" height="24"/>

                                    </div>
                                </div>
                                <div className="flex justify-between mt-20">
                                    <h3 className="font-medium text-lg">
                                        0.00TL</h3>
                                    <Image src="/image/plus.png" width="24" height="24"/>

                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-500 my-7  rounded-2xl w-72 h-52 m-auto border">
                            <div className="p-6">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-medium text-lg">
                                            Balans
                                        </h3>
                                        <h3 className="font-medium text-lg">
                                            USD
                                        </h3>
                                    </div>
                                    <div>
                                        <Image src="/image/coin.png" width="24" height="24"/>

                                    </div>
                                </div>
                                <div className="flex justify-between mt-20">
                                    <h3 className="font-medium text-lg">
                                        0.00TL</h3>
                                    <Image src="/image/plus.png" width="25" height="25"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    {/*<h3 className="text-gray-500 text-sm font-medium text-center">Balansinizi asagidaki vasitelerle*/}
                    {/*    artira bilersiniz</h3>*/}
                    {/*/!*<div className="grid gap-x-6 gap-y-6 grid-cols-3 place-items-center py-6 px-8">*!/*/}
                    {/*/!*    <div className="p-4 bg-white rounded-full">*!/*/}
                    {/*/!*        <div className="flex justify-center">*!/*/}
                    {/*/!*            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"*!/*/}
                    {/*/!*                 viewBox="0 0 24 24"*!/*/}
                    {/*/!*                 stroke="currentColor">*!/*/}
                    {/*/!*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*!/*/}
                    {/*/!*                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*!/*/}
                    {/*/!*            </svg>*!/*/}
                    {/*/!*        </div>*!/*/}

                    {/*/!*        <h3 className="text-md font-medium ">Online</h3>*!/*/}
                    {/*/!*    </div>*!/*/}
                    {/*/!*    <div className="p-4 bg-white rounded-full">*!/*/}
                    {/*/!*        <div className="flex justify-center">*!/*/}

                    {/*/!*            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"*!/*/}
                    {/*/!*                 viewBox="0 0 24 24"*!/*/}
                    {/*/!*                 stroke="currentColor">*!/*/}
                    {/*/!*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*!/*/}
                    {/*/!*                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>*!/*/}
                    {/*/!*            </svg>*!/*/}
                    {/*/!*        </div>*!/*/}
                    {/*/!*        <h3 className="text-md font-medium ">Nagd</h3>*!/*/}

                    {/*/!*    </div>*!/*/}
                    {/*/!*    <div className="p-4 bg-white rounded-full">*!/*/}
                    {/*/!*        <div className="flex justify-center">*!/*/}

                    {/*/!*            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"*!/*/}
                    {/*/!*                 viewBox="0 0 24 24"*!/*/}
                    {/*/!*                 stroke="currentColor">*!/*/}
                    {/*/!*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*!/*/}
                    {/*/!*                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>*!/*/}
                    {/*/!*            </svg>*!/*/}
                    {/*/!*        </div>*!/*/}
                    {/*/!*        <h3 className="text-md font-medium ">Terminal</h3>*!/*/}

                    {/*/!*    </div>*!/*/}

                    {/*/!*</div>*!/*/}
                    <div className="flex justify-between bg-white p-4">
                        <h3 className="text-gray-500 font-medium">Son əməliyyatlar</h3>
                        <h3 className="text-blue-700 underline">Hamısını göstər</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}