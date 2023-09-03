import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const gereratePassword = (checkboxData,length) => {
    let charset = ""
    let generatedPassword = ""

    const selectedData = checkboxData.filter((item) => item.state);
 
    if(selectedData.length === 0){
        setError('Please check atleast one checkbox')
        setPassword('')
        return
    }

    selectedData.forEach((item) => {
      switch (item.title) {
        case "Include Uppercase Character":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Character":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Number":
          charset += "0123456789";
          break;
        case "Include Special Character":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * charset.length)
        generatedPassword += charset[randomIndex]
    }
    setPassword(generatedPassword)
    setError('')
  };

  return { password, error, gereratePassword };
};

export default usePasswordGenerator;
