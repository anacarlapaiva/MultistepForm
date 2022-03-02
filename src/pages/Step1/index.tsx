import React from 'react'
import Input from '../../components/Input'
import { Container, Form } from './styles'


const Step1 = () => {

  const handleSubmit = () => {
  }

  return (

    <Form onSubmit={handleSubmit}>
      <Container>
       <Input label='Nome'/>
  
      </Container>
    </Form>



  )
}

export default Step1