const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? <p>Esta pessoa pode tirar carteira de habilitação</p> : <p>Esta pessoa não pode tirar carteira de habilitação</p>}
    </div>
  )
}

export default UserDetails