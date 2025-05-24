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

const StateIcon = {
  done: <IcnStepperDone width={20} height={20} aria-label={"done-step"} />,
  current: (
    <IcnStepperCurrent width={20} height={20} aria-label={"current-step"} />
  ),
  todo: <IcnStepperTodo width={20} height={20} aria-label={"todo-step"} />,
};

const Stepper = ({ curStep, stepName }: StepperProps) => {
  return (
    <div className={stepperWrapper}>
      {stepName.map((name, idx) => {
        const isDone = idx < curStep;
        const isCurrent = idx === curStep;
        const color = isCurrent ? "active" : "inactive";

        return (
          <div style={{ display: "flex" }} key={idx}>
            {idx !== 0 && <div className={stepperLine} />}
            <section className={stepperSectionStyle}>
              {StateIcon[isDone ? "done" : isCurrent ? "current" : "todo"]}
              <h2
                className={`${stepperTextStyle.title} ${
                  stepperTextColor[color]
                }`}
              >
                {name}
              </h2>
              <p
                className={`${stepperTextStyle.desc} ${
                  stepperTextColor[color]
                }`}
              >
                {isCurrent ? "입력 중" : isDone ? "완료" : "입력 전"}
              </p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
