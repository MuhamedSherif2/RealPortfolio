function Button({children, className, icon, ...rest}) {
    return (
        <button className={`py-2 px-4 mdl:mt-0 rounded-md mx-auto flex items-center gap-1 text-[20px] font-semibold text-center justify-center
        transition duration-300 ${className} `}
            {...rest}>
                {children}{icon}
        </button>
    )
}
export default Button