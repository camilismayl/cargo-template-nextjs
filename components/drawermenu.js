import { useState } from "react";

export default function Drawermenu(props) {
    const [isOpening, setIsOpening] = useState(false);

    const togglemenu = () => {
        setIsOpening(!isOpening);
    };
    console.log(isOpening)
    return (
        <div>
            <div
                className="px-5 border-b font-medium">
                <button className="w-full text-left"

                        onClick={togglemenu}
                        type="button"
                >
                    <p>{props.title}</p>
                </button>
                <div
                    style={{ display: isOpening ? "block" : "hide", padding: "5px" }}
                    dangerouslySetInnerHTML={{
                        __html: props.content
                    }}
                />
            </div>
        </div>
    );
}