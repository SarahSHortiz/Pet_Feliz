import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import './CardsAnimais.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function CardsAnimal({ cardanimal }) {
  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line react/prop-types
  const telefoneUsuario = cardanimal.usuario.telefone;
  const mensagemPadrao = "%20Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20pet%20" + cardanimal.nome_Pet;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!cardanimal) {
    return null;
  }

  return (
    <>
      <Card sx={{ maxWidth: 450 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia className='card-img' sx={{ height: 150 }}>
            <img src={cardanimal.foto_Pet} alt="Imagem do Card" style={{ objectFit: 'cover', width: '100%' }} />
          </CardMedia>
          <CardContent className='description' sx={{ marginBottom: '5%' }}>
            <div>
              <h2 style={{ marginBottom: '2%' }}>{cardanimal.status_Pet}</h2>
            </div>
            <h1 style={{ marginBottom: '5%', objectFit: 'cover', color: '#5A3333' }}>{cardanimal.nome_Pet}</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h3 style={{ marginRight: '1rem' }}>{cardanimal.estado.nome_Estado}</h3>
              <h3>{cardanimal.cidade.nome_Cidade}</h3>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* modal do animal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.nome_Pet}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.porte_Pet}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.sexo_Pet}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.raca.nome_Raca}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.especie.nome_Especie}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.idade_Pet}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.animal.nome_Animal}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.Castrado}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardanimal.vacina}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          </Typography>
          <div>
            <a target="_blank" href={`https://api.whatsapp.com/send?phone=${telefoneUsuario}&text=${mensagemPadrao}`} rel="noreferrer">Whatsapp</a>
          </div>
          <div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {cardanimal.cidade.nome_Cidade}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {cardanimal.estado.nome_Estado}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {cardanimal.usuario.nome}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {cardanimal.usuario.email}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {cardanimal.usuario.celular}
          </Typography>
          </div>
        </Box>
      </Modal>
    </>
  );
}

CardsAnimal.propTypes = {
  cardanimal: PropTypes.shape({
    status_Pet: PropTypes.string.isRequired,
    nome_Pet: PropTypes.string.isRequired,

    Castrado: PropTypes.string.isRequired,

    vacina: PropTypes.string.isRequired,


    estado: PropTypes.shape({
      nome_Estado: PropTypes.string.isRequired,
    }).isRequired,
    foto_Pet: PropTypes.string.isRequired,
    cidade: PropTypes.shape({
      nome_Cidade: PropTypes.string.isRequired,
    }).isRequired,
    raca: PropTypes.shape({
      nome_Raca: PropTypes.string.isRequired,
    }).isRequired,
    especie: PropTypes.shape({
      nome_Especie: PropTypes.string.isRequired,
    }).isRequired,

    porte_Pet: PropTypes.string.isRequired,
    sexo_Pet: PropTypes.string.isRequired,
    nome_Raca: PropTypes.string.isRequired,
    idade_Pet: PropTypes.number.isRequired,

    animal: PropTypes.shape({
      nome_Animal: PropTypes.string.isRequired,
    }).isRequired,

    usuario: PropTypes.shape({
      nome: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      celular: PropTypes.string.isRequired,
    }).isRequired,


  }).isRequired,
};


const style = {
  position: 'absolute',

  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default CardsAnimal;
