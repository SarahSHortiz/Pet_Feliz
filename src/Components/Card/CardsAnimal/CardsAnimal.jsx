import * as React from 'react';
import Box from '@mui/material/Box';
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
        InfoColor = "#F5C716";
        break;
    default:
      InfoColor = "#F5C716";
      break;
  }
  
  return (
    <>
      <Card className='card-card'>
        <CardActionArea onClick={handleOpen}>
          <div id='status' style={getStatusColor(cardanimal.status_Pet)}>
            <div style={{
              marginBottom: '2%', position: 'absolute', padding: '5px 10px', top: '10px',
              right: '10px', backgroundColor: InfoColor, borderRadius: '8px'
            }}>{cardanimal.status_Pet}</div>

          </div>
          <CardMedia className='card-img'>
            <img  style={{
      width: '100%', 
      height: '200px', 
      objectFit: 'cover', 
      borderRadius: '5px 5px 0 0', 
    }} src={cardanimal.foto_Pet} alt="Imagem do Card" />
          </CardMedia>

          <CardContent className='description'  style={{ marginTop:'-10%' }}>
    
            <div  style={{ color: '#5A3333', fontWeight:'700', fontSize: '1.5rem' }}> {cardanimal.nome_Pet}</div>
            <div style={{ display: 'flex', alignItems: 'center',  marginTop: '15%' }}>
              <div style={{ display: 'inline', marginRight: '1rem', fontWeight:'600', fontSize: '1rem'  }}>{cardanimal.estado.nome_Estado}</div>
              <div style={{ display: 'inline', marginRight: '1rem', fontWeight:'600', fontSize: '1rem', whiteSpace: 'nowrap',
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
          <Typography style={{ maxWidth: '100%', maxHeight: '20rem' }} className='infoimg'>
            <img src={cardanimal.foto_Pet} alt="Imagem do Card" style={{ objectFit: 'cover', borderRadius: "6px" }} />
          </Typography>

          <div className='img-modal'>
            <Typography id="modal-description" variant="h6" component="h2" className='description-modal'>
              {cardanimal.descricao_Pet}
            </Typography>

            <div id='whatsapp-modal' style={{ color: "white", textDecoration: "none" }}>
              <a target="_blank" href={`https://api.whatsapp.com/send?phone=${telefoneUsuario}&text=${mensagemPadrao}`} rel="noreferrer" style={{ color: "white", textDecoration: "none" }}>Whatsapp</a>
            </div>

            <Typography id="modal-modal-title" variant="h6" component="h2" className='infos1'>
              {cardanimal.usuario.email}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='infos1'>
              {cardanimal.usuario.telefone}
            </Typography>
          </div>

          <div style={{ flex: '1 1 60%', textAlign: 'left', marginLeft: '5%', marginTop: '-10%' }} className='infos'>
            <div>
              <Typography variant="h6" component="h2" id='name-pet'>
                {cardanimal.nome_Pet}
              </Typography>
              <Typography className='infos3' variant="h6" component="h2" style={{ display: 'flex', flexDirection: 'row', gap: '2%' }} >
                <h3>Publicado por</h3>
                {cardanimal.usuario.nome}
              </Typography>
              <Typography className='infos3' variant="h6" component="h2" style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
                <h3>Cidade</h3>
                {cardanimal.cidade.nome_Cidade}
              </Typography>
              <Typography className='infos3' variant="h6" component="h2" style={{ display: 'flex', flexDirection: 'row', gap: '2%', fontWeight: '100' }}>
                <h3>Está em</h3>
                {cardanimal.estado.nome_Estado}
              </Typography>
              {/* Adicione acessos diretos às propriedades específicas */}
              <Typography id="modal-modal-title" variant="h6" component="h2"><p>Sexo</p>
                {cardanimal.sexo_Pet}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2"><p>Raça</p>
                {cardanimal.raca.nome_Raca}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2" ><p>Espécie</p>
                {cardanimal.especie.nome_Especie}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2" ><p>Idade</p>
                {cardanimal.idade_Pet}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2" ><p>Tipo</p>
                {cardanimal.animal.nome_Animal}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2" ><p>Castração</p>
                {cardanimal.castrado}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2"><p>Descrição</p>
                {cardanimal.vacina.descricao} {/* Exemplo de acesso à propriedade específica */}
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
  height: '38rem',
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
