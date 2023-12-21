import './CardEditarAnimal.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthContextFunctions } from '../../../AuthContext';

function CardsEditarAnimal({ cardanimal }) {
    if (!cardanimal) {
        return null;
    }


      const handleExcluir = (idPet) => {
        if (window.confirm('Tem certeza que deseja excluir este animal?')) {
          const response = axios
            .delete(`https://petfeliz.azurewebsites.net/api/PetFeliz/ApagarPet/${idPet}`)
            .then((response) => {
              console.log(response.data);

              if (response.status === 200){
                window.location.reload();
            }
            })
            .catch((error) => {
              console.error('Erro ao excluir o pet:', error);
              // Adicione um tratamento de erro adequado, se necessário
            });
        }
      };

      const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      };
  
       

    return (
        <div className="card-editar">
            <Card className="card-card" sx={{ maxWidth: 400, }}>
                <CardActionArea component="span">
                    <CardMedia className="card-img" sx={{ height: 150 }}>
                        <img src={cardanimal.foto_Pet} alt="Imagem do Card"
                            style={{ objectFit: 'cover', width: '100%' }}
                        />
                    </CardMedia>

                    <CardContent className="description">
                        <h1 style={{ color: '#5A3333', }}>
                            {capitalizeFirstLetter(cardanimal.nome_Pet)}
                        </h1>

                        <Stack spacing={2} direction="row" className='button-modal'>
                            <Link to="/AlterarPet?imageUrl=${cardanimal.foto_Pet}">
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
                                onClick={() => handleExcluir(cardanimal.id_Pet)}
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
