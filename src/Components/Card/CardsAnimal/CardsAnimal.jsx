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
<Card sx={{ maxWidth: 450 }}>
  <CardActionArea>
    <CardMedia className='card-img' sx={{ height: 200 }}>
      <img src={cardanimal.foto_Pet} alt="Imagem do Card" style={{ objectFit: 'cover', width: '100%' }} />
    </CardMedia>
    <CardContent className='description' sx={{ marginBottom: '5%' }}>
  <div>
    <h2 style={{ marginBottom: '2%' }}>{cardanimal.status_Pet}</h2>
  </div>
  <h1 style={{ marginBottom: '5%' }}>{cardanimal.nome_Pet}</h1>
  <h3 style={{ marginBottom: '2%' }}> {cardanimal.estado.nome_Estado}</h3>
  <h3 style={{ marginBottom: '2%' }}> {cardanimal.cidade.nome_Cidade}</h3>

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
    }).isRequired,
    nome_Cidade: PropTypes.string.isRequired, // Validation for nome_Cidade within cardanimal
  }).isRequired,
};



export default CardsAnimal;
