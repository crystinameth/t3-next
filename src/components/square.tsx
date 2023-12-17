type Player = "X" | "O" | null | "DRAW";

function Square({ 
    value, 
    onCLick, 
    winner,
}: {
        winner: Player; 
        value: Player; 
        onCLick: () => void;
    }) {
        if( !value) {
            return <button 
                    className="square" 
                    onClick={onCLick} 
                    disabled={Boolean(winner)} 
                    />
        }
            return <button 
                    className={`square square_${value.toLocaleLowerCase()}`}
                    disabled>{value}
                   </button>
}


export default Square;