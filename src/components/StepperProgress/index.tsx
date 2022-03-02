import React from 'react'
import {
    StepProgressBar,
    StepProgressWrap,
    StepTitle,
    StepTitleNumber,
    StepperProgressContainer
} from './styles';

interface StepperProgressProps {
    stepTitles: string[];
    currentStep: number;
}

export const StepperProgress: React.FC<StepperProgressProps> = ({
    stepTitles,
    currentStep,
}) => {
    // calcula o progresso e aparece em cima
    const progressPerStep = 100 / (stepTitles.length - 1);
    // calcula o progresso baseado em qual passo voce está
    const progress = (currentStep - 1) * progressPerStep;
    return (
        <StepperProgressContainer>
            <StepProgressWrap>
                <StepProgressBar
                    style={{ width: progress + "%" }}
                />
                {stepTitles.map((title, i) => (
                    <StepTitle>
                        <StepTitleNumber>{i + 1}</StepTitleNumber>
                        {title}
                    </StepTitle>
                ))}
            </StepProgressWrap>
        </StepperProgressContainer>
    );
};