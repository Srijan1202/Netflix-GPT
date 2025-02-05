import React from 'react'

const Validate = (email,password) => {
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    return "invalid email";
  }
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
    return "invalid password";
  }
  return "valid";
}

export default Validate
