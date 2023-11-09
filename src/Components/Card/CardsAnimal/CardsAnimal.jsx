import PropTypes from 'prop-types';

function CardsAnimal({ cardanimal }) {
    if (!cardanimal) {
        return null;
    }
    return (
        <div>
            <div>{cardanimal.status_Pet}</div>
            <h1>{cardanimal.nome_Pet}</h1>
            <h3>CEP: {cardanimal.logradouro.cep}</h3>


            <label>
                <img src={cardanimal.foto_Pet} style={{ width: 200, height: 200 }} alt="Imagem do Card" />
            </label>
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
        nome_Estado:  PropTypes.string.isRequired,
        estado:  PropTypes.string.isRequired,

        }),
        foto_Pet: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardsAnimal;
