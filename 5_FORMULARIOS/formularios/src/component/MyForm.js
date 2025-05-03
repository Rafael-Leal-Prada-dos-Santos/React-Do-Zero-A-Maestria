import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
    // 3- Gerenciamento de dados
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();


    //6 - controlled inputs
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState(user ? user.bio : '');

    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (evento) => {
        setName(evento.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log('Enviando Formulário');
        console.log(name, email, bio, role);

        //7 - LimparFormulario
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    // console.log(name);
    // console.log(email);

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
            </div>
            {/*Label envolvendo input  -> Sugerida na documentação do react*/}
            <label>
                <span>E-mail:</span>
                {/*4 - Simplificacao alteracao dados*/}
                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/*8 - TextArea*/}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>

              {/*8 - TextArea*/}
              <label>
                <span>Função do Sistma:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm