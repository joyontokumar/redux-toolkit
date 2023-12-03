import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ReactCalender = () => {
  const { control, handleSubmit, setValue, watch } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="m-[10px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Other form fields can be added here */}

        {/* Calendar integration with React Hook Form */}
        <label>Select Date</label>
        <Controller
          name="selectedDate"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date: any) => {
                setValue("selectedDate", date);
              }}
              dateFormat="MMMM d, yyyy"
              isClearable
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
          )}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactCalender;
