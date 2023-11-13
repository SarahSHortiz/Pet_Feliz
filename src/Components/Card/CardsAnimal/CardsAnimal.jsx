import PropTypes from 'prop-types';
import './CardsAnimais.css'
function CardsAnimal({ cardanimal }) {
    if (!cardanimal) {
        return null;
    }
    return (
        <div className='card'>
            <div className='card-img'>
                <label><img src={cardanimal.foto_Pet} style={{ width: 200, height: 200 }} alt="Imagem do Card" />
                </label>
            </div>
            <div className='description'>
                <div>{cardanimal.status_Pet}</div>
                <h1>{cardanimal.nome_Pet}</h1>
                <h3>CEP: {cardanimal.logradouro.cep}</h3>
            </div>
        </div>
    );
}

CardsAnimal.propTypes = {
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

export default CardsAnimal;
