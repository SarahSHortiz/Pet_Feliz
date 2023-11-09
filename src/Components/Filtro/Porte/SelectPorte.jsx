import { useState } from "react";
import Select from "react-select";


export const SelectPorte = () => {
  const [selectedPorte, setSelectedPorte] = useState("");

  const porteOptions = [
    { value: "Anao", label: "Anão" },
    { value: "Pequeno", label: "Pequeno" },
    { value: "Medio", label: "Médio" },
    { value: "Grande", label: "Grande" },
    { value: "Molosso", label: "Molosso" },

  ];

  const handlePorteChange = (option) => {
    setSelectedPorte(option.value);
  };

  return (
    <div>
      <Select
        options={porteOptions}
        placeholder="Selecione o porte do animal"
        value={porteOptions.find((option) => option.value === selectedPorte)}
        onChange={handlePorteChange}
      />
    </div>
  );
};

export default SelectPorte;