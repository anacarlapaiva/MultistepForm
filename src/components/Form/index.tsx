import React from 'react'
import Step1 from '../../pages/Step1'
import Step2 from '../../pages/Step2'
import { Step } from '../Step'
import { Stepper } from '../Stepper'
import { ContentForm, FormElement } from './styles'

const Form: React.FC = () => {
  return (
    <FormElement>
      <ContentForm>
        <Stepper
          steps={[
            {
              title: "Passo 1",
              //melhorar isso
              element: stepProps => <Step {...stepProps} page={<Step1/>}/>,
            },
            {
              title: "Passo 2",
              element: stepProps => <Step {...stepProps} page={<Step2/>}/>,
            },
            {
              title: "Passo 3",
              element: stepProps => <Step {...stepProps} />,
            },
          ]}
        />
      </ContentForm>
    </FormElement>
  )
}

export default Form

