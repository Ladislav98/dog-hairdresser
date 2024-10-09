import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { CalendarText, StyledDatePicker } from "./CalendarStyle";
import { addDays, format } from "date-fns";
import { useForm, Controller } from "react-hook-form";
import Form from "../../Form/Form";
import { Button } from "../../../styles/generalStyles";
import { useCreateAppointment } from "../useCreateAppointments";
import { getCurrentUser } from "../../../services/apiAuth";

function Calendar() {
  const { createAppointment, isLoading } = useCreateAppointment();
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { appointmentDate, appointmentTime } = data;
    const formattedDate = format(appointmentDate, "yyyy-dd-MM");

    const currentUser = await getCurrentUser();
    const userId = currentUser.id;
    const dogId = 4;
    const status = "pending";

    createAppointment({
      userId,
      dogId,
      status,
      appointmentDate: formattedDate,
      appointmentTime,
    });
  };

  const timePeriod = [
    "8-9h",
    "9-10h",
    "10-11h",
    "11-12h",
    "12-13h",
    "13-14h",
    "14-15h",
    "15-16h",
  ];

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledDatePicker>
        <FaCalendarAlt />
        <Controller
          control={control}
          name="appointmentDate"
          defaultValue={null}
          render={({ field }) => (
            <DatePicker
              {...field}
              dateFormat="dd/MM/yyyy"
              selected={field.value}
              onChange={field.onChange}
              placeholderText="Select a date"
              minDate={new Date()}
              maxDate={addDays(new Date(), 30)}
            />
          )}
        />
        <CalendarText>Pick the date</CalendarText>
      </StyledDatePicker>
      <StyledDatePicker>
        <FaCalendarAlt />
        <Controller
          control={control}
          name="appointmentTime"
          defaultValue=""
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Select appointment time
              </option>
              {timePeriod.map((period, index) => (
                <option key={index} value={period}>
                  {period}
                </option>
              ))}
            </select>
          )}
        />
        <CalendarText>Pick the time</CalendarText>
      </StyledDatePicker>
      <Button type="submit" disabled={isLoading}>
        Submit
      </Button>
    </Form>
  );
}

export default Calendar;
