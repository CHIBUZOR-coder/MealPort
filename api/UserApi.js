export const RegisterUser = async () => {
  try {
    const res = await fetch("http://localhost:5000/registerUser", {
      method: "POST",
      "Content-Type": "multipart/form-data",
      body: formData,
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return error.message;
  }
};
