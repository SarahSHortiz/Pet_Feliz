import { useState } from "react";
import Select from "react-select";

export const SelectSexo = () => {
  const [selectedSexo, setSelectedSexo] = useState("");

  const sexoOptions = [
    { value: "Femea", label: "Fêmea" },
    { value: "Macho", label: "Macho" },


  ];

  const handleSexoChange = (option) => {
    setSelectedSexo(option.value);
  };

  return (
    <div>
      <Select
        options={sexoOptions}
        placeholder="Selecione o sexo do animal"
        value={sexoOptions.find((option) => option.value === selectedSexo)}
        onChange={handleSexoChange}
      />
    </div>
  );
};

export default SelectSexo;