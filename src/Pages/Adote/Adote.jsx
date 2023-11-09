import { useEffect, useState } from "react";
import Select from "react-select";
import "./Adote.css";
import CardsAnimal from '../../Components/Card/CardsAnimal/CardsAnimal';
import { SelectEstado } from '../../Components/Filtro/Estado/SelectEstado';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Adote() {
    const [seeUrl, setSeeUrl] = useState(null);
    const [selectedSexo, setSelectedSexo] = useState("");
    const [selectedPorte, setSelectedPorte] = useState("");
    const [selectedTipo, setSelectedTipo] = useState("");
    const [selectedUf, setSelectedUf] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [formData, setFormdata] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;



    const porte_Pet = [
        { value: "anao", label: "Anão" },
        { value: "pequeno", label: "Pequeno Porte" },
        { value: "medio", label: "Médio Porte" },
        { value: "grande", label: "Grande Porte" },
        { value: "Molosso", label: "Molosso" },
    ];

    const sexo_Pet = [
        { value: "femea", label: "Fêmea" },
        { value: "macho", label: "Macho" },
    ];

    const tipo = [
        { value: "gato", label: "Gato" },
        { value: "cao", label: "Cão" },
    ];

    const handlePorteChange = (option) => {
        setSelectedPorte(option.value);
        getDataFromApi();
        setCurrentPage(1);
    };

    const handleSexoChange = (option) => {
        setSelectedSexo(option.value);
        getDataFromApi();
        setCurrentPage(1);
    };

    const handleTipoChange = (option) => {
        setSelectedTipo(option.value);
        getDataFromApi();
        setCurrentPage(1);
    };

    const handleUfChange = (uf) => {
        setSelectedUf(uf);
        getDataFromApi();
        setCurrentPage(1);
    };

    function handleInput(name, value) {
        setFormdata({ ...formData, [name]: value });
    }

    useEffect(() => {
        getDataFromApi();
    }, [selectedTipo, formData.porte, formData.sexo_Pet, selectedUf]);

    const getDataFromApi = () => {
        setSeeUrl(`https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet`);
        fetch(`https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet`)
            .then((response) => response.json())
            .then((json) => {
                if (Array.isArray(json)) {
                    // Reverta a ordem dos dados antes de atualizar a lista
                    const reversedData = json.reverse();
                    setFilteredData(reversedData);
                } else {
                    setFilteredData([json]);
                }
            });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="body-adote">
            {seeUrl && <span style={{ marginBottom: 30 }}>Url: {seeUrl} </span>}
            <div className="input-div">
                <input
                    value={formData.size}
                    onChange={(x) => handleInput("size", x.target.value)}
                />
            </div>

            <div className="filtros-container">
                <div>
                    <div className="filtro">
                        <Select
                            options={sexo_Pet}
                            placeholder="Selecione o sexo do animal"
                            value={sexo_Pet.find((option) => option.value === selectedSexo)}
                            onChange={handleSexoChange}
                        />
                    </div>

                    <div className="filtro">
                        <Select
                            options={porte_Pet}
                            placeholder="Selecione o porte do animal"
                            value={porte_Pet.find((option) => option.value === selectedPorte)}
                            onChange={handlePorteChange}
                        />
                    </div>
                </div>

                <div>
                    <div className="filtro">
                        <Select
                            options={tipo}
                            placeholder="Selecione o tipo do animal"
                            value={tipo.find((option) => option.value === selectedTipo)}
                            onChange={handleTipoChange}
                        />
                    </div>

                    <div className="filtro">
                        <SelectEstado onChange={handleUfChange} />
                    </div>
                </div>
            </div>

            <div className="title">
                <h1>VENHA ADOTAR SEU NOVO PET!</h1>
            </div>


            <div className="cards-container">
                {currentItems.map((x) => {
                    return <CardsAnimal cardanimal={x} key={x?.id_Pet} />;
                })}
            </div>
            <Stack spacing={2} className="paginacao">
                <Pagination
                    count={Math.ceil(filteredData.length / itemsPerPage)}
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)}
                  
                />
            </Stack>



        </div>
    );
}

export default Adote;
