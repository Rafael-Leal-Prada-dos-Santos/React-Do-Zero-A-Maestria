const Challenge = () => {
    let a = 9;
    let b = 2;

    const handleSoma = () => {

        let soma = a + b;
        return console.log(`soma = ${soma}`);
    }

    return(
        <div>
            {console.log({a})}
            {console.log({b})}
            {handleSoma()}
        </div>
    )
}

export default Challenge;