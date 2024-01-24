
const Button = ({ onClick, type, label, className }) => {
    return (
        <div>
            <button type={type} className={className} onClick={onClick}>
                {label}
            </button>
        </div>
    )
}

export default Button;