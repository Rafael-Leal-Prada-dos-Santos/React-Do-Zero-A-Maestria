//O distructuring funciona criando um objeto a partir das propriedades passadas junto do elemento
//em algum componente, por exemplo <CarDetails brand="VW" km={100000} color="Azul"/>
//e se caso passar um nome de variavel que não exista dentro desse objeto de propriedades o react
//entende que ele não existe dentro das props para faze destructuring

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>

        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é novo</p> }

        {/* Método antigo com props
            <ul>
            <li>Marca: {props.brand}</li>
            <li>Km: {props.km}</li>
            <li>Cor: {props.color}</li>
        </ul> */}
    </div>
  )
}

export default CarDetails