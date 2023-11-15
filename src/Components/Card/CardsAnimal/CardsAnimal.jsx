import PropTypes from 'prop-types';
import './CardsAnimais.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';



function CardsAnimal({ cardanimal }) {
  if (!cardanimal) {
    return null;
  }
  return (
    <Card sx={{ maxWidth: 450, }}>
      <CardActionArea>
        <CardMedia className='card-img' sx={{ height: 150, }}>
          <img src={cardanimal.foto_Pet} alt="Imagem do Card" style={{ objectFit: 'cover', width: '100%', }} />
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



  );
}
CardsAnimal.propTypes = {
  cardanimal: PropTypes.shape({
    status_Pet: PropTypes.string.isRequired,
    nome_Pet: PropTypes.string.isRequired,
    estado: PropTypes.shape({
      nome_Estado: PropTypes.string.isRequired,
    }).isRequired,
    foto_Pet: PropTypes.string.isRequired,
    cidade: PropTypes.shape({
      nome_Cidade: PropTypes.string.isRequired,
    }).isRequired, // Coloque a definição de cidade aqui, dentro do objeto cardanimal
  }).isRequired,
};



export default CardsAnimal;
