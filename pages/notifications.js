import Layout from "../components/layout";
import Head from "next/head";

export default function Notifications() {
    return (
        <div>
            <Layout/>

            <Head>
                <title>Bildirisler</title>
            </Head>
            <div className="px-4 pt-20 ">
                <div className="bg-white border rounded-2xl mb-4 ">
                    <div>
                        <h3 className=" font-medium text-xl px-4 py-4 rounded-t-2xl">Dynamex.az</h3>
                        <h3 className="px-4 text-md bg-gray-100 rounded-b-2xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </h3>
                    </div>
                </div>
                <div className="bg-white border rounded-2xl mb-4 ">
                    <div>
                        <h3 className=" font-medium text-xl px-4 py-4 rounded-t-2xl">Dynamex.az</h3>
                        <h3 className="px-4 text-md bg-gray-100 rounded-b-2xl">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                        </h3>
                    </div>
                </div>

            </div>
        </div>

    )
}