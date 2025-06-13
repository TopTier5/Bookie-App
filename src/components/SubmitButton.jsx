import {userStatus } from "react-dom";

export default function SubmitButton({ title, className,}) {
    const {pending} = userStatus();

    return (
        <button
            type="submit"
            className={className}
            disabled={pending}
        >
            {pending ? "Loading..." : title}
        </button>
                
        );


}