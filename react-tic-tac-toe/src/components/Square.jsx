export default function Square({value, onSquareClick}) {
    // const [value,setValue] = useState('')
    
    // const handleClick = () => {
    //     setValue('X')
    // }

    return <button className="square" onClick={onSquareClick}>{value}</button>;
}