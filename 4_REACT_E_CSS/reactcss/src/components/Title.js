import styles from './Title.module.css'

//module.css são css scoped ou seja, só funcionam para quem está importando ele. 

const Title = () => {
  return (
    <div>
        <h1 className={styles.my_title}>Meu título</h1>
    </div>
  )
}

export default Title