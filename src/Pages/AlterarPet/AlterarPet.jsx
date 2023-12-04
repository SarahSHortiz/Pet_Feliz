import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AlterarPet.css';
import { AuthContextFunctions } from '../../AuthContext';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const AlterarPet = () => {
  const [Porte_Pet, setPorte_Pet] = useState("");
  const [Sexo_Pet, setSexo_Pet] = useState("");
  const [Idade_Pet, setIdade_Pet] = useState("");
  const [Descricao_Pet, setDescricao_Pet] = useState("");
  const [Status_Pet, setStatus_Pet] = useState("");
  const [Castrado, setCastrado] = useState("");
  const [Foto_Pet] = useState("");
  const [Base64, setBase64] = useState(null);
  const [Cod_Usuario, setCod_Usuario] = useState("");
  const [Nome_Foto] = useState("");
  const [Nome_Pet, setNome_Pet] = useState("")

  const [Especie, setEspecie] = useState({
    Nome_Especie: '',
  });

  const [Raca, setRaca] = useState({
    Nome_Raca: '',
  });

  const [Animal, setAnimal] = useState({
    Nome_Animal: '',
  });

  const [Vacina, setVacina] = useState({
    data_vacina: '',
    status: 'Selecione a Opção',
    descricao: '',
  });

  const [errors, setErrors] = useState({});


  const nome_Animal = ['Gato', 'Cão'];
  const idade_Pet = ['Entre 0 e 1', 'Entre 1 e 4', 'Entre 4 e 10', 'Mais de 10'];
  const porte_Pet = ['Anão', 'Pequeno Porte', 'Médio Porte', 'Grande Porte', 'Molosso'];
  const sexo_Pet = ['Macho', 'Fêmea'];
  const castrado = ['Sim', 'Não'];
  const status_Pet = ['Disponível', "Interessados", 'Adotado'];
  const status = ['sim', 'não'];

  const validateForm = () => {
    const errors = {};
    return errors;
  };

  const handleCancel = () => {
    setPorte_Pet("");
    setSexo_Pet("");
    setIdade_Pet("");
    setDescricao_Pet("");
    setStatus_Pet("");
    setCastrado("");
    setSelectedStatus("");
    setBase64(null);
    setEspecie({ Nome_Especie: "" });
    setRaca({ Nome_Raca: "" });
    setAnimal({ Nome_Animal: "" });
    setVacina({
      data_vacina: "",
      status: "Selecione a Opção",
      descricao: "",
    });
    setErrors({});
    setNome_Pet("");
  };

  const getSwitchColor = (status) => {
    switch (status) {
      case 'Adotado':
        return '#F93C006B';
      case 'Interessados':
        return '#ECD172';
      case 'Disponível':
        return '#84B67F';
      default:
        return 'default';
    }
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: '2rem',
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: '3rem',
  });

  useEffect(() => {
    const usuarioLogado = AuthContextFunctions.CheckUserLogin();

    if (usuarioLogado) {
      const userData = JSON.parse(AuthContextFunctions.GetUserData());
      const userId = userData.Cod_Usuario;
      setCod_Usuario(userId);
    } else {
      alert("nenhum usuario logado")
    }
  }, []);

  const handleDateChange = (date) => {
    setVacina({ ...Vacina, data_vacina: date });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const base64 = e.target.result.split(',')[1];
        setBase64(base64);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setBase64(null);
    }
  };

  const [selectedStatus, setSelectedStatus] = useState('');
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };


  const handleStatusChange = (status) => {
    if (selectedStatus === status) {
      setSelectedStatus('');
    } else {
      setSelectedStatus(status);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = await validateForm();
    setErrors(validationErrors);

    if (Base64) {
      const sexo = Sexo_Pet === 'Macho' ? 'M' : 'F';

      const body = {
        Vacina, Animal, Nome_Pet, Raca, Especie, Porte_Pet, Sexo_Pet: sexo, Idade_Pet, Descricao_Pet, Status_Pet, Castrado, Nome_Foto, Foto_Pet, Base64, Cod_Usuario
      };

      if (!AuthContextFunctions.CheckUserLogin()) {
        console.log('Usuário não logado. Redirecionando para a página de login.');
        return;
      }

      const token = AuthContextFunctions.GenerateHeader().get('Authorization');

      try {
        const response = await axios.put(
          'https://petfeliz.azurewebsites.net/api/PetFeliz/AtualizarPet',
          body,
          {
            headers: {
              Authorization: token,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 200) {
          navigate('/Home');
        }
      } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
        alert('erro');
      }
    }
  };

  return (
    <div className='alterarpet'>
      <div className='alterarpet-body'>
        <div className='title-alterarpet'>
          <p>EDITAR PERFIL PET</p>
        </div>


        <form className='alterarpet-form'>
          <input
            type="text"
            placeholder="Digite o Nome do Animal"
            className="input1"
            onChange={(e) => setNome_Pet(e.target.value)}
            value={Nome_Pet}
          />
          {errors.Nome_Pet && <p className="labelError">{errors.Nome_Pet}</p>}

          <input
            type="text"
            placeholder="Digite a Especie do Animal"
            className="input1"
            onChange={(e) => setEspecie({ ...Especie, Nome_Especie: e.target.value })}
            value={Especie.Nome_Especie}
          />
          {errors.Nome_Especie && <p className="labelError">{errors.Nome_Especie}</p>}

          <input
            type="text"
            placeholder="Digite a Raça do Animal"
            className="input1"
            onChange={(e) => setRaca({ ...Raca, Nome_Raca: e.target.value })}
            value={Raca.Nome_Raca}
          />
          {errors.Nome_Raca && <p className="labelError">{errors.Nome_Raca}</p>}


          <select
            value={Animal.Nome_Animal}
            onChange={(e) => setAnimal({ ...Animal, Nome_Animal: e.target.value })}
            className="dropdown1"
          >
            <option value="Selecione o tipo">Edite o Tipo do Animal</option>
            {nome_Animal.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={Idade_Pet}
            onChange={(e) => setIdade_Pet(e.target.value)}
            className="dropdown1"
          >
            <option value="Selecione a Idade">Edite a Idade do Animal</option>
            {idade_Pet.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={Porte_Pet}
            onChange={(e) => setPorte_Pet(e.target.value)}
            className="dropdown1"
          >
            <option value="Selecione o Porte">Edite o Porte do Animal</option>
            {porte_Pet.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={Castrado}
            onChange={(e) => setCastrado(e.target.value)}
            className="dropdown1"
          >
            <option value="Selecione a opção">Edite se Animal foi Castrado</option>
            {castrado.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={Sexo_Pet}
            onChange={(e) => setSexo_Pet(e.target.value)}
            className="dropdown1"
          >
            <option value="Selecione o Sexo">Edite o Sexo do Animal</option>
            {sexo_Pet.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>

          <FormGroup className='status-alterarpet'>
            <h1 style={{ fontSize: '1.5rem' }}>Status animal</h1>
            {status_Pet.map((status) => (
              <FormControlLabel
                key={status}

                control={
                  <Switch
                    checked={selectedStatus === status}
                    {...label} defaultCheckedsize="x-large"
                    onChange={() => handleStatusChange(status)}
                    disabled={selectedStatus !== '' && selectedStatus !== status}
                    style={{
                      color: status === 'Adotado' ? '#F93C006B' : status === 'Interessados' ? '#ECD172' : '#84B67F',
                    }}

                  />
                }
                label={status}
              />
            ))}
          </FormGroup>
          <select
            value={Vacina.status}
            onChange={(e) => setVacina({ ...Vacina, status: e.target.value })}
            className="dropdown1"
          >
            <option value="Selecione uma opção">Edite se o animal está vacinado</option>
            {status.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Tipo da vacinas"
            className="input1"
            onChange={(e) => setVacina({ ...Vacina, descricao: e.target.value })}
            value={Vacina.descricao}
          />
          <input
            onChange={(e) => setVacina({ ...Vacina, data_vacina: e.target.value })}
            value={Vacina.data_vacina}
            type="date"
            className="dropdown1"
            placeholder='Data Vacina'
          >
          </input>
          <div className='coluna-descricao'>
          <input
            type="text"
            placeholder="Descrição"
            className="input1"
            onChange={(e) => setDescricao_Pet(e.target.value)}
            value={Descricao_Pet}
          />
          </div>

          <form className='bnt-alterarpet' onSubmit={handleSubmit}>

            <button type="submit" className="cancelar" onClick={handleCancel}>
              CANCELAR
            </button>

            <Button size="large" style={{ height: '5rem', width: '20rem', borderRadius: '12px', backgroundColor: '#F9C200', fontSize: '1.5rem' }} component="label" variant="contained" startIcon={< AddAPhotoIcon />}>
              SALVAR ALTERAÇÕES
              <VisuallyHiddenInput type="file" accept="image/jpeg" onChange={handleFileChange} />
            </Button>
          </form>
        </form>
      </div>
    </div>
  );
};

export default AlterarPet;
