import '../perfil/perfil.css'
import FileUpload from '../../Components/UploadFiles/UploadFiles'

export default function Perfil() {

  return (
    <div className="perfil-body">
      <div className="perfil-container">
        <div className="perfil-title">
          <h1>Meu Perfil</h1>
        </div>
        <div className="img-usuario-perfil">
          <FileUpload></FileUpload>
        </div>

        <form className="dados-usuario-perfil">
          <div className="question">

            <input type="text" required placeholder='Nome' />
          </div>
          <div className="question">
            <input type="text" required placeholder='Cidade' />

          </div>
          <div className="question">
            <input type="text" required placeholder='Estado' />
          </div>
        </form>

        <div className='bnt-perfil-usuario'>
          <div className="perfil-bnt-cadastrar">
            <button>Cadastrar Animal</button>
          </div>
          <div className="perfil-bnt-petscadastrados">
            <button>Animais Cadastrados</button>
          </div>
        </div>
      </div>
    </div>
  )
}