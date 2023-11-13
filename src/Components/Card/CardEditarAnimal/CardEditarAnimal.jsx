import PropTypes from 'prop-types';
import './CardsAnimais.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';  

function CardsEditarAnimal({ cardanimal }) {
    if (!cardanimal) {
        return null;
    }

    const handleExcluir = () => {
        axios.delete(`https://petfeliz.azurewebsites.net/api/PetFeliz/apagarPet/${cardanimal}`)
            .then((response) => {
                if (response.status === 200) {
                    alert("Card excluído com sucesso!");
                } else {
                    alert("Erro ao excluir o card.");
                }
            })
            .catch((error) => {
                console.error("Erro ao excluir o card:", error);
            });
    };

    return (
        <div className='card-editar'>
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
                        <h3 style={{ marginBottom: '2%' }}>CEP: {cardanimal.logradouro.cep}</h3>
                    </CardContent>
                </CardActionArea>
            </Card>
            <div>
                <Stack spacing={2} direction="row">
                    <Button onClick={handleExcluir} variant="contained">Remover</Button>
                </Stack>
            </div>
        </div>
    );
}

CardsEditarAnimal.propTypes = {
    cardanimal: PropTypes.shape({
        status_Pet: PropTypes.string.isRequired,
        nome_Pet: PropTypes.string.isRequired,
        logradouro: PropTypes.shape({
            sexo_Pet: PropTypes.string.isRequired,
            cep: PropTypes.string.isRequired,
            nome_Estado: PropTypes.string.isRequired,
            estado: PropTypes.string.isRequired,
        }),
        foto_Pet: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardsEditarAnimal;
