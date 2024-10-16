import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import { CalendarText, StyledDatePicker } from "./CalendarStyle";
import { addDays, format } from "date-fns";
import { useForm, Controller } from "react-hook-form";
import Form from "../../Form/Form";
import { Button } from "../../../styles/generalStyles";
import { useCreateAppointment } from "../useCreateAppointments";
import { checkAvailability } from "../../../services/apiAppointments";
import toast from "react-hot-toast";
import { BsFillClockFill } from "react-icons/bs";
import { useUser } from "../../../authentication/useUser";
import { useGetDogsFromUser } from "../../dogs/useGetDogsFromUser";

function Calendar() {
  const { createAppointment, isLoading: isCreating } = useCreateAppointment();
  const { user } = useUser();
  const { usersDog } = useGetDogsFromUser(user?.id);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { appointmentDate, appointmentTime, dogId } = data;
    const formattedDate = format(appointmentDate, "yyyy-MM-dd");

    const isAvailable = await checkAvailability(formattedDate, appointmentTime);
    if (!isAvailable) {
      toast.error("Appointment is already taken! Please choose another time.");
      return;
    }

    // const currentUser = await getCurrentUser();

    const userId = user.id;
    createAppointment(
      {
        userId,
        dogId,
        status: "reserved",
        appointmentDate: formattedDate,
        appointmentTime,
      },
      {
        onSettled: reset(),
      }
    );
  };
  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message);
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
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <StyledDatePicker>
        <FaCalendarAlt />
        <Controller
          control={control}
          name="appointmentDate"
          defaultValue={null}
          rules={{ required: "Please select a date." }}
          render={({ field }) => (
            <DatePicker
              {...field}
              dateFormat="dd/MM/yyyy"
              selected={field.value}
              onChange={field.onChange}
              minDate={new Date()}
              maxDate={addDays(new Date(), 30)}
            />
          )}
        />
        {errors.appointmentDate && toast.error(errors.appointmentDate.message)}
        <CalendarText>Pick the date</CalendarText>
      </StyledDatePicker>
      <StyledDatePicker>
        <BsFillClockFill />
        <Controller
          control={control}
          name="appointmentTime"
          defaultValue=""
          rules={{ required: "Please select a time." }}
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled></option>
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
      <div>
        <Controller
          control={control}
          name="dogId"
          defaultValue=""
          rules={{ required: "Please select your dog." }}
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Select your dog
              </option>
              {usersDog?.map((dog) => (
                <option key={dog.id} value={dog.id} style={{ color: "white" }}>
                  {dog.name}
                </option>
              ))}
            </select>
          )}
        />
        {errors.dogId && toast.error(errors.dogId.message)}
      </div>
      <Button type="submit" disabled={isCreating}>
        Submit
      </Button>
    </Form>
  );
}

export default Calendar;
