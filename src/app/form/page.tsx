"use client";

import formAction from "./(action)/formAction";

const Form: React.FC<{}> = () => {
  return (
    <div className="w-1/2">
      <form action={formAction} className="flex flex-col ">
        <div className="flex py-2">
          <input type="number" className="" name="weight" />
        </div>
        <div className="flex py-2">
          <input type="number" className="" name="height" />
        </div>
        <div className="flex py-2">
          <input type="number" className="" name="age" />
        </div>
        <div className="flex py-2">
          <input type="" className="" name="sex" />
        </div>
        <div className="flex py-2">
          <textarea className="" name="fitnessGoals"></textarea>
        </div>
        <div className="flex py-2">
          <textarea className="" name="currentActivity"></textarea>
        </div>
        <div className="flex py-2">
          <textarea className="" name="medicalConditions"></textarea>
        </div>
        <div className="flex py-2">
          <textarea className="" name="injuriesandLimitations"></textarea>
        </div>
        <textarea name="" className=""></textarea>

        <button type="submit" className="btn">
          aqui va un boton
        </button>
      </form>
    </div>
  );
};

export default Form;
