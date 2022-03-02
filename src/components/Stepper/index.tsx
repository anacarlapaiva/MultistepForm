/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import { StepperProgress } from '../StepperProgress';
import { Container, StepperSelector, StepperWrapper } from './styles'

export interface IStepperProps {
    steps: Step[];
}

export interface Step {
    title: string;
    // Elemento para renderizar na etapa, pode conter
    // um formulário, uma imagem, o que for
    element: (stepProps: StepProps) => JSX.Element;
}

export interface StepProps {
    goNextStep: () => void;
    goPreviousStep: () => void;
    currentStep: number;
    isLast: boolean;
    isFirst: boolean;
    step: number;
    page?: JSX.Element;
}

export const Stepper: React.FC<IStepperProps> = ({ steps }) => {

    const [currentStep, setCurrentStep] = useState<number>(1);
    const stepperSelector = useRef<HTMLDivElement>(null);

    useEffect(() => {
        moveStepper()
    }, [currentStep])

    const goNextStep = () => {
        const nextStep = currentStep + 1;
        if (nextStep <= steps.length) {
            setCurrentStep(nextStep);
        }
    };

    const goPreviousStep = () => {
        const previousStep = currentStep - 1;
        if (previousStep >= 1) {
            setCurrentStep(previousStep);
        }
    };

    const moveStepper = () => {
        if (stepperSelector.current) {
            const stepper = stepperSelector.current;
            const stepWidth = stepper.offsetWidth / steps.length;
            stepper.style.transform = `translateX(-${stepWidth * (currentStep - 1)
                }px)`;
        }
    };

    return (
        <Container>
            <StepperProgress
                stepTitles={steps.map(step => step.title)}
                currentStep={currentStep}
            />
            <StepperSelector ref={stepperSelector}>
                {steps.map((step, i) => (
                    <StepperWrapper>
                        <step.element
                            step={i + 1}
                            goNextStep={goNextStep}
                            goPreviousStep={goPreviousStep}
                            currentStep={currentStep}
                            isFirst={i === 0}
                            isLast={i === steps.length - 1}
                        />
                    
                    </StepperWrapper>
                ))}
               
            </StepperSelector>

        </Container>
    )
}
