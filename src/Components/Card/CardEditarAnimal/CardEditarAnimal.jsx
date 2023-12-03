import './CardEditarAnimal.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

function CardsEditarAnimal({ cardanimal }) {
    if (!cardanimal) {
        return null;
    }
    const handleExcluir = (id_Pet) => {


        axios.delete(`https://petfeliz.azurewebsites.net/api/PetFeliz/apagarPet/${id_Pet}`)
            .then((response) => {
                if (response.status === 200) {
                    alert('Animal excluído com sucesso!');
                } else {
                    alert('Erro ao excluir o animal.');
                }
            })
            .catch((error) => {
                console.error('Erro ao excluir o animal:', error);
                alert('Erro ao excluir o animal');
            });
    };


    return (
        <div className="card-editar">
            <Card className="card-card" sx={{ maxWidth: 400,}}>
                <CardActionArea>
                    <CardMedia className="card-img" sx={{ height: 150 }}>
                        <img src={cardanimal.foto_Pet} alt="Imagem do Card"
                            style={{ objectFit: 'cover', width: '100%' }}
                         />
                    </CardMedia>

                    <CardContent className="description">
                        <h1 style={{ color: '#5A3333', }}>
                            {cardanimal.nome_Pet}
                        </h1>

                        <Stack spacing={2} direction="row" className='button-modal'>
                            <Link to="/AlterarPet">
                                <Button
                                    variant="contained"
                                    style={{
                                        backgroundColor: '#F9C200',
                                        width: '8rem',
                                        marginLeft: '20%',
                                        marginTop: '8%',
                                    }}
                                >
                                    Editar
                                </Button>
                            </Link>
                        </Stack>



                        <Stack spacing={2} direction="row" className='button-modal-remover'>
                                <Button
                                    variant="contained"
                                    onClick={() => handleExcluir(cardanimal.id)}
                                    style={{
                                       
                                    }}
                                >
                                    Remover
                                </Button>
                        </Stack>

                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}


export default CardsEditarAnimal;
