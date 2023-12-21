import { useEffect, useState } from "react";
import Select from "react-select";
import "./Adote.css";
import CardsAnimal from '../../Components/Card/CardsAnimal/CardsAnimal';
import Button from '@mui/material/Button';

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
        castrado: "",
    });

    //const [placeholderUf, setPlaceholderUf] = useState('Selecione o Estado');

    const resetFiltro = () => {
        setFilters({
            porte: "",
            sexo: "",
            tipo: "",
            uf: "",
            cidade: "",
            castrado: "",
        });

        setplaceholderTipo('Selecione o Tipo');
        setplaceholderCastrado('Status castração');
        setplaceholderCidade('Selecione a cidade');
        setplaceholderPorte('Selecione o Porte');
        setplaceholderUf('Selecione o Estado');
        setplaceholderSexo('Selecione o Sexo');
    };


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
        { value: "Sim", label: "Sim" },
        { value: "Não", label: "Não" }
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
                queryString += "castrado=" + filters.castrado + "&";
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
        if (handleTipoChange === '') {
            setFilters({ ...filters, tipo: '' });
            setplaceholderTipo = 'Selecione o tipo';
            setFilters(updatedFilters);
        }
        else {
            setFilters({ ...filters, tipo: option.value });
            setplaceholderTipo('');
            setFilters(updatedFilters);
        }
    }
    function handleSexoChange(option) {
        if (handleSexoChange === '') {
            setFilters({ ...filters, sexo: '' });
            setplaceholderSexo = 'Selecione o Sexo';
            setFilters(updatedFilters);
        }
        else {
            setFilters({ ...filters, sexo: option.value });
            setplaceholderSexo('');
            setFilters(updatedFilters);
        }
    }

    function handlePorteChange(option) {
        if (handlePorteChange === '') {
            setFilters({ ...filters, porte: '' });
            setplaceholderPorte = 'Selecione o porte';
            setFilters(updatedFilters);
        }
        else {
            setFilters({ ...filters, porte: option.value });
            setplaceholderPorte('');
            setFilters(updatedFilters);
        }
    }
    // function handleUFChange(option) {
    //     if (option.value === '') {
    //         setFilters({ ...filters, uf: '' });
    //         setPlaceholderUf = 'Selecione o Estado';
    //         setFilters(updatedFilters);
    //     } else {
    //         setFilters({ ...filters, uf: option.value });
    //         setPlaceholderUf('');
    //         setFilters(updatedFilters);
    //     }
    // }

    function handleUFChange(option) {
        
        const updatedFilters = { ...filters, uf: option };
        setFilters(updatedFilters);
    }

    function handleCidadeChange(option) {
        const updatedFilters = { ...filters, cidade: option };
        setFilters(updatedFilters);
    }


    // function handleCidadeChange(option) {
    //     if (handleCidadeChange === '') {
    //         setFilters({ ...filters, cidade: '' });
    //         setplaceholderCidade = 'Selecione a Cidade';
    //         setFilters(updatedFilters);
    //     }
    //     else {
    //         setFilters({ ...filters, cidade: option.value });
    //         setplaceholderCidade('');
    //         setFilters(updatedFilters);
    //     }
    // }

    function handleCastradoChange(option) {
        if (handleCastradoChange === '') {
            setFilters({ ...filters, castrado: '' });
            setplaceholderCastrado = 'Status da Castração';
            setFilters(updatedFilters);
        }
        else {
            setFilters({ ...filters, castrado: option.value });
            setplaceholderCastrado('');
            setFilters(updatedFilters);
        }
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
                        />
                    </div>
                    {/* <div className="filtro">
                        <Select
                            options={castrado}
                            placeholder="Status da Castração"
                            value={castrado.find((option) => option.value === filters.castrado)}
                            onChange={handleCastradoChange}
                        />
                    </div> */}
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

                    {/* <div className="filtro">
                        <SelectCidade onChange={handleCidadeChange} /> 
                    </div> */}


                    <div onClick={resetFiltro} style={{marginLeft:'-15%'}} >
                    <Button  style={{  color: 'white', backgroundColor:"black"}} className="bnt-limpar" variant="contained">LIMPAR FILTROS</Button>

                    </div>
                    

                </div>
            </div>

            <div className="title">
                <h1>VENHA ADOTAR SEU NOVO PET!</h1>
            </div>

            <div className="cards-container1" >
                {currentItems.reverse().map((x) => {
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
