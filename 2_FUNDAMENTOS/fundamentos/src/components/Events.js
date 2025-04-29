const Events = () => {

    const handleMyEvent = (e) => {

        console.log(e);
        console.log("Ativou o evento !")
    };

    const renderSomething = (x) => {
        if(x) return <h1>renderizar isso!</h1>
        else return <h1>renderizar aquilo</h1>
    }

    return(
        <div>
            <div>
                {/*Se a função tiver com () vai chamar o evento ao ler o elemento*/}
                <button onClick={handleMyEvent}>Clique aqui !</button>
            </div>
            <div>
                {/*Se a função tiver com () vai chamar o evento ao ler o elemento*/}
                <button onClick={() => console.log('Clicou')}>Clique aqui também!</button>
                <button onClick={() => { if(true){console.log('Isso não devia existir =)')}}}>Clique aqui, por favor!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;