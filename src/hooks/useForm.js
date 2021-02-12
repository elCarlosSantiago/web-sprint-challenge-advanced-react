// write your custom hook here to control your checkout form
import React, { useState } from 'react'

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setShowSuccessMessage(true)
  }

  return [values, handleChange, handleSubmit, showSuccessMessage]
}

export default useForm
