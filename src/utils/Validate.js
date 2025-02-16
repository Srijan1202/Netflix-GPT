

const Validate = (email, password) => {
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    return "invalid email";
  }
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    )
  ) {
    return "invalid password";
  }
  return "valid";
};

export default Validate;
