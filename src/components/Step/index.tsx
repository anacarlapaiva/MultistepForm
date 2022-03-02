import ButtonElement from "../Button";
import { StepProps } from "../Stepper";
import { Container, StepAction, StepBody } from "./styles";

export const Step: React.FC<StepProps> = ({
    goNextStep,
    goPreviousStep,
    isFirst,
    isLast,
    page
}) => {

    return (
        <Container>
            <StepBody>{page}</StepBody>
            
            <StepAction>
                <ButtonElement
                    disabled={isFirst}
                    onClick={goPreviousStep}
                    type="button"
                >
                    Voltar
                </ButtonElement>
                <ButtonElement 
                disabled={isLast} 
                onClick={goNextStep} 
                type="button">
                    Avançar
                </ButtonElement>
            </StepAction>
        </Container>
    );
};