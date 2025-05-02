import styles from './CarDetails.module.css'

const CarDetails = ({marca, cor, ano}) => {
  return (
    <div>
        <p className={styles.detalheMarca}>Marca: {marca}</p>
        <p className={styles.detalheAno}>Cor: {cor}</p>
        <p className={styles.detalheCor}>Ano: {ano}</p>
    </div>
  )

}

export default CarDetails