import { useState } from 'react';

export default function RegistrationForm() {
  // 1. Состояния для полей (Task 1)
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  // 2. Валидация (Task 2)
  const validate = () => {
    let newErrors = {};
    if (formData.name.length < 2) newErrors.name = "Name too short";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email";
    if (Number(formData.age) < 18) newErrors.age = "Must be 18+";
    return newErrors;
  };

  // 3. Обработка отправки (Task 3)
  const handleSubmit = (e) => {
    e.preventDefault(); // Обязательно! Чтобы не перезагружалось
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSent(true);
      setErrors({});
      console.log("Form Data:", formData);
    } else {
      setErrors(validationErrors);
      setIsSent(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '200px'}}>
      <input 
        placeholder="Name" 
        onChange={(e) => setFormData({...formData, name: e.target.value})} 
      />
      {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}

      <input 
        placeholder="Email" 
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
      />
      {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}

      <input 
        type="number" 
        placeholder="Age" 
        onChange={(e) => setFormData({...formData, age: e.target.value})} 
      />
      {errors.age && <span style={{color: 'red'}}>{errors.age}</span>}

      <button type="submit">Register</button>
      {isSent && <p style={{color: 'green'}}>Success!</p>}
    </form>
  );
}