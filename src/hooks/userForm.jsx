import { useState } from "react";

export const useForm = (initialForm, validateForm, props) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    // const [loading, setLoading] = useState(false);
    // const [response, setResponse] = useState(null);
    //setForm(initialForm);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    };
    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };
    const handleSubmit = (e) => {
            form.valid = true;
            e.preventDefault();
            props.send(form);
            setForm(initialForm);
    };
    
    return {
        form,
        errors,
        // loading,
        // response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}