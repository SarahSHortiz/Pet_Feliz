import { useEffect, useState } from "react";
import Select from "react-select";
import "./Adote.css";
import CardsAnimal from '../../Components/Card/CardsAnimal/CardsAnimal';
import { SelectEstado } from '../../Components/Filtro/Estado/SelectEstado';
import { SelectCidade } from '../../Components/Filtro/Cidade/SelectCidade';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";


function Adote() {
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const [filters, setFilters] = useState({
        porte: "",
        sexo: "",
        tipo: "",
        uf: "",
        cidade: "",
        castrado:"",
    });


    const porte_Pet = [
        { value: "anao", label: "Anão" },
        { value: "pequeno", label: "Pequeno Porte" },
        { value: "medio", label: "Médio Porte" },
        { value: "grande", label: "Grande Porte" },
        { value: "Molosso", label: "Molosso" },
    ];

    const sexo_Pet = [
        { value: "f", label: "Fêmea" },
        { value: "m", label: "Macho" },
    ];

    const nome_Animal = [
        { value: "gato", label: "Gato" },
        { value: "cao", label: "Cão" },
    ];

    const castrado = [
        {value: "Sim", label: "Sim"},
        {value: "Não", label: "Não"}
    ];

 
    useEffect(() => {
        getDataFromApi();
    }, [])

    useEffect(() => {
        getDataFromApi();
    }, [filters])

    async function getDataFromApi() {

        try {

            let queryString = "";


            if (filters.tipo) {
                queryString += "tipo=" + filters.tipo + "&";
            }

            if (filters.porte) {
                queryString += "porte=" + filters.porte + "&";
            }
            if (filters.sexo) {
                queryString += "sexo=" + filters.sexo + "&";
            }
            if (filters.uf) {
                queryString += "uf=" + filters.uf + "&";
            }
            if (filters.cidade) {
                queryString += "cidade=" + filters.cidade + "&";
            }
            if (filters.castrado) {
                queryString += "castrado=" + filters.castrado+ "&";
            }

            const response = await axios.get(`https://petfeliz.azurewebsites.net/api/PetFeliz/ListarPet?` + queryString);
            if (response.status !== 200) {
                alert("Erro ao buscar pets!");
                return;
            }

            setFilteredData(response.data);

        } catch (error) {
            alert(error);
        }
    }


    function handleTipoChange(option) {
        const updatedFilters = { ...filters, tipo: option.value };
        setFilters(updatedFilters);
    }
    function handleSexoChange(option) {
        const updatedFilters = { ...filters, sexo: option.value };
        setFilters(updatedFilters);
    }

    function handlePorteChange(option) {
        const updatedFilters = { ...filters, porte: option.value };
        setFilters(updatedFilters);
    }
    function handleUFChange(option) {
        const updatedFilters = { ...filters, uf: option };
        setFilters(updatedFilters);
    }
    function handleCidadeChange(option) {
        const updatedFilters = { ...filters, cidade: option };
        setFilters(updatedFilters);
    }
    function handleCastradoChange(option) {
        const updatedFilters = { ...filters, castrado: option };
        setFilters(updatedFilters);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="adote">
            <div className="filtros">
                <div className="coluna1">
                    <div className="filtro">
                        <Select
                            options={sexo_Pet}
                            placeholder="Selecione o sexo do animal"
                            value={sexo_Pet.find((option) => option.value === filters.sexo)}
                            onChange={handleSexoChange}
                        />
                    </div>

                    <div className="filtro">
                        <Select
                            options={porte_Pet}
                            placeholder="Selecione o porte do animal"
                            value={porte_Pet.find((option) => option.value === filters.porte)}
                            onChange={handlePorteChange}
                            onValueChange={(selectedPorte) => {
                                if (selectedPorte === '') {
                                  setFilters({ ...filters, porte: '' });
                                  setPlaceholderPorte('Selecione o porte');
                                } else {
                                  setFilters({ ...filters, porte: selectedPorte });
                                  setPlaceholderPorte(''); 
                                }
                              }}
                        />
                    </div>
                    <div className="filtro">
                        <Select
                            options={castrado}
                            placeholder="Status da Castração"
                            value={castrado.find((option) => option.value === filters.castrado)}
                            onChange={handleCastradoChange}
                        />
                    </div>
                </div>
                <div className="coluna2">

                    <div className="filtro">
                        <Select
                            options={nome_Animal}
                            placeholder="Selecione o tipo do animal"
                            value={nome_Animal.find((option) => option.value === filters.tipo)}
                            onChange={handleTipoChange}

                        />
                    </div>
                    <div className="filtro">
                        <SelectEstado
                            onChange={handleUFChange} />
                    </div>
                    <div className="filtro">
                        <SelectCidade
                            onChange={handleCidadeChange}
                        />
                    </div>

                    <div className="bnt-limpar">
<button>Limpar</button>
                    </div>
                 
                </div>
            </div>

            <div className="title">
                <h1>VENHA ADOTAR SEU NOVO PET!</h1>
            </div>

            <div className="cards-container1">
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
