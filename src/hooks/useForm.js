import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  
  const navigate = useNavigate();
  const { searchTxt } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchTxt.trim().length <= 1) return;
    navigate(`?q=${searchTxt.toLowerCase().trim()}`);
  };

  const onRestForm = () => {
    setFormState(initialForm);
  };
  return { ...formState, formState, onInputChange, onRestForm, onSearchSubmit };
};
