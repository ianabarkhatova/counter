
type NumberProps = {
    counter: number
    className: string
};

export const Number = ({counter, className}: NumberProps) => {
    return (
        <span className={className}>{counter}</span>
    );
};