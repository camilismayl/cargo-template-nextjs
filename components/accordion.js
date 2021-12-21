import { useState } from "react";

export default function Accordion(props) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    return (
        <div>
        <div
            className="px-5 py-5 border-b font-medium">
            <button className="w-full text-left"

                onClick={toggle}
                type="button"
            >
                <p>{props.title}</p>
            </button>
            <div
                style={{ display: isShowing ? "block" : "none", padding: "5px" }}
                dangerouslySetInnerHTML={{
                    __html: props.content
                }}
            />
        </div>
        </div>
    );
}
