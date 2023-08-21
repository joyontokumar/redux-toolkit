import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { reactFormHookSchema } from "../../validation/react-form-hook-schema";
import ReactSelect from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const ReactFormHook = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(reactFormHookSchema()),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="m-3 p-3 bg-[red]">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} />}
        />
        {errors?.email?.message && (
          <span className="error">{errors?.email?.message}</span>
        )}
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} placeholder="First name" />}
        />
        {errors?.firstName?.message && (
          <span className="error">{errors?.firstName?.message}</span>
        )}
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => <input {...field} placeholder="Last name" />}
        />
        {errors?.lastName?.message && (
          <span className="error">{errors?.lastName?.message}</span>
        )}
        <Controller
          control={control}
          //   defaultValue="chocolate"
          name="language"
          rules={{ required: true }}
          render={({ field }) => (
            <ReactSelect
              name={field.name}
              options={options}
              value={options.find((c) => c.value === field.value)}
              onChange={(val): any => field.onChange(val?.value)}
            />
          )}
        />

        {errors?.language?.message && (
          <span className="error">{errors?.language?.message}</span>
        )}
        <input type="submit" className="cursor-pointer" />
      </form>
    </div>
  );
};

export default ReactFormHook;
