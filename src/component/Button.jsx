function Button(props) {
    console.log(props)
    return (
        <button className={`w-[150px] py-[6px] px-3 ${props.bg} ${props.mt} mdl:mt-0 rounded mx-auto transition duration-300  hover:text-white hover:${props.hoverBg}`}>
            <span className="flex items-center gap-1 text-[20px] font-semibold text-center justify-center">{props.name}{props.icon}</span>
        </button>
    )
}
export default Button