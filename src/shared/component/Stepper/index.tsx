import { IcnStepperCurrent, IcnStepperDone, IcnStepperTodo } from "@/asset/svg";
import {
  stepperLine,
  stepperSectionStyle,
  stepperTextColor,
  stepperTextStyle,
  stepperWrapper,
} from "./index.css";

type StepperProps = {
  curStep: number;
  stepName: string[];
};

const Stepper = ({ curStep, stepName }: StepperProps) => {
  const StateIcon = {
    done: <IcnStepperDone width={20} height={20} aria-label={"done-step"} />,
    current: (
      <IcnStepperCurrent width={20} height={20} aria-label={"current-step"} />
    ),
    todo: <IcnStepperTodo width={20} height={20} aria-label={"todo-step"} />,
  };

  return (
    <div className={stepperWrapper}>
      {stepName.map((name, idx) => (
        <div style={{ display: "flex" }} key={idx}>
          {idx !== 0 && <div className={stepperLine} />}
          <section className={stepperSectionStyle}>
            {
              StateIcon[
                idx < curStep ? "done" : idx === curStep ? "current" : "todo"
              ]
            }
            <h2
              className={`${stepperTextStyle.title} ${
                stepperTextColor[idx === curStep ? "active" : "inactive"]
              }`}
            >
              {name}
            </h2>
            <p
              className={`${stepperTextStyle.desc} ${
                stepperTextColor[idx === curStep ? "active" : "inactive"]
              }`}
            >
              {idx === curStep ? "입력 중" : idx < curStep ? "완료" : "입력 전"}
            </p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
