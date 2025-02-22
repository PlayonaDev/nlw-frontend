interface ButtonProps {
    text: string
}
export function Button(props: ButtonProps) {
    return (
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-8 rounded ">
            {props.text}
        </button>
    );
}