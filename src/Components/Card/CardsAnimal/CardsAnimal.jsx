import * as React from 'react';
import {Box}from "@mui/material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './CardsAnimais.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { AuthContextFunctions } from '../../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { getStatusColor } from '../../Status/Status';


function CardsAnimal({ cardanimal }) {
  const [open, setOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const isLogged = AuthContextFunctions.CheckUserLogin();
    setIsLoggedIn(isLogged);
  }, []);

  const telefoneUsuario = cardanimal.usuario.telefone;
  const mensagemPadrao = `%20Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20pet%20${cardanimal.nome_Pet}`;

  
  const navigate = useNavigate();
  function handleOpen() {
    isLoggedIn ? setOpen(true) : navigate("/login");
  }

  const handleClose = () => setOpen(false);

  if (!cardanimal) {
    return null;
  }

  let InfoColor;
  switch (cardanimal.status_Pet) {
    case "Disponível":
      InfoColor = '#00ff00';
      break;
    case 'Adotado':
      InfoColor = "#F52317";
      break;
    case 'Interessados':
      InfoColor = "#F5C716";rd
      break;
    default:
      InfoColor = "#F5C716";
      break;
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

 
  return (
    <>
      <Card className='card-card'>
        <CardActionArea onClick={handleOpen}>
          <div id='status' style={getStatusColor(cardanimal.status_Pet)}>
            <div style={{
              marginBottom: '2%', position: 'absolute', padding: '5px 10px', top: '10px',
              right: '10px', backgroundColor: InfoColor, borderRadius: '8px', fontWeight: 700
            }}>{cardanimal.status_Pet}</div>

          </div>
          <CardMedia className='card-img'>
            <img style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '5px 5px 0 0',
            }} src={cardanimal.foto_Pet} alt="Imagem do Card" />
          </CardMedia>

          <CardContent className='description' style={{ marginTop: '-10%' }}>

            <div style={{ color: '#5A3333', fontWeight: '700', fontSize: '1.5rem' }}> {capitalizeFirstLetter(cardanimal.nome_Pet)}</div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '15%' }}>
              <div style={{ display: 'inline', marginRight: '1rem', fontWeight: '600', fontSize: '1rem' }}>{cardanimal.estado.nome_Estado}</div>
              <div style={{
                display: 'inline', marginRight: '1rem', fontWeight: '600', fontSize: '1rem', whiteSpace: 'nowrap',
              }}>{cardanimal.cidade.nome_Cidade}</div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        className='modal'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="content-modal" sx={style}>
          <Typography style={{ maxWidth: '100%', maxHeight: '20rem', marginBottom: "8%"}} className='infoimg'>
            <img src={cardanimal.foto_Pet} alt="Imagem do Card" style={{ objectFit: 'cover', borderRadius: "6px" }} />
          </Typography>

          <div className='img-modal'>
          <p style={{fontWeight: 700, marginBottom: "-4%", marginTop:'-15%'}}>Descrição</p>
            <Typography id="modal-description" variant="h6" component="h2" className='description-modal' style={{ wordWrap: 'break-word' }}>
              {capitalizeFirstLetter(cardanimal.descricao_Pet)}
            </Typography>
            <div id='whatsapp-modal' style={{ color: "white", textDecoration: "none" }}>
              <a target="_blank" href={`https://api.whatsapp.com/send?phone=${telefoneUsuario}&text=${mensagemPadrao}`} rel="noreferrer" style={{ color: "white", textDecoration: "none" }}>Whatsapp</a>
            </div>
            <h5 style={{fontWeight: 700, marginBottom: '-2%', marginTop:'2%',}} >E-mail</h5>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='infos1'>
              {cardanimal.usuario.email}
            </Typography>
            <h5 style={{fontWeight: 700, marginBottom: '-2%', marginTop:'2%',}}>Telefone</h5>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='infos1'>
              {cardanimal.usuario.telefone}
            </Typography>
          </div>

          <div style={{ flex: '1 1 60%', textAlign: 'left', marginLeft: '5%', marginTop: '-2%' }} className='infos'>
            <div >
              <Typography variant="h6" component="h2" id='name-pet' style={{ marginTop:'5%' }}>
                {capitalizeFirstLetter(cardanimal.nome_Pet)}
              </Typography>
              <Typography className='infos3' variant="h6" component="h2" style={{ display: 'flex', flexDirection: 'row', gap: '2%', marginTop:'-3%' }} >
                <h4>Publicado por</h4>
                {capitalizeFirstLetter(cardanimal.usuario.nome)}
              </Typography>
              <Typography className='infos3' variant="h6" component="h2" style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
                <h4>Cidade</h4>
                {cardanimal.cidade.nome_Cidade}<h4>Estado</h4>{cardanimal.estado.nome_Estado}
              </Typography>
                        {/* Adicione acessos diretos às propriedades específicas */}
              <p style={{fontWeight: 700, marginBottom: '-2%', marginTop:'2%',}}>SEXO</p>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {capitalizeFirstLetter(cardanimal.sexo_Pet)} 
              </Typography>
              <p style={{fontWeight: 700,  marginBottom: '-2%', marginTop:'2%',}}>Porte</p>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {cardanimal.porte_Pet}
              </Typography>
              <p style={{fontWeight: 700, marginBottom: '-2%', marginTop:'2%',}}>RAÇA</p>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {cardanimal.raca.nome_Raca}
              </Typography>
              <p style={{fontWeight: 700,  marginBottom: '-2%', marginTop:'2%',}}>ESPÉCIE</p>
              <Typography id="modal-modal-title" variant="h6" component="h2" >
                {cardanimal.especie.nome_Especie}
              </Typography>
              <p style={{fontWeight: 700,  marginBottom: '-2%', marginTop:'2%',}}>IDADE</p>
              <Typography id="modal-modal-title" variant="h6" component="h2" >
                {cardanimal.idade_Pet}
              </Typography>
              <p style={{fontWeight: 700,  marginBottom: '-2%', marginTop:'2%',}}>TIPO</p>
              <Typography id="modal-modal-title" variant="h6" component="h2" >
                {cardanimal.animal.nome_Animal}
              </Typography>
              <p style={{fontWeight: 700, marginBottom: '-2%', marginTop:'2%',}}>CASTRAÇÃO</p>
              <Typography id="modal-modal-title" variant="h6" component="h2" >
                {cardanimal.castrado}
              </Typography>
              <p style={{fontWeight: 700, marginBottom: '-2%', marginTop:'2%',}}>VACINA</p>
              <Typography id="modal-modal-title" variant="h6" component="h2" >
                {cardanimal.vacina.descricao}
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '3%',
  transform: 'translate(-50%, -50%)',
  width: '50rem',
  height: '40rem',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'space-between', // Para separar a imagem e o conteúdo
  alignItems: 'center',

  '& > *': {
    padding: '0.5rem',
  },
};

export default CardsAnimal;
