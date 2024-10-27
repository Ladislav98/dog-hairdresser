import { FaCalendarAlt, FaDog } from "react-icons/fa";
import {
  AdditionalInfo,
  StyledAppointmentSelection,
  StyledDatePicker,
  StyledSelect,
} from "./AppointmentSelectionStyle";
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
import FormRow from "../../Form/FormRow";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AppointmentSelection() {
  const { createAppointment, isLoading: isCreating } = useCreateAppointment();
  const { user } = useUser();
  const { usersDog } = useGetDogsFromUser(user?.id);
  const location = useLocation();

  const initialServiceName = location.state?.serviceName || "";
  const initialPrice = location.state?.price || "";

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [serviceName, setServiceName] = useState(initialServiceName);
  const [price, setPrice] = useState(initialPrice);
  const [selectedDogSize, setSelectedDogSize] = useState(null);

  const serviceOptions = [
    { name: "Classic Plan", price: 50 },
    { name: "Full Plan", price: 120 },
  ];

  useEffect(() => {
    if (serviceName && selectedDogSize) {
      const selectedService = serviceOptions.find(
        (service) => service.name === serviceName
      );
      const basePrice = selectedService ? selectedService.price : 0;
      const adjustedPrice =
        selectedDogSize === "Large" ? basePrice * 1.05 : basePrice;
      setPrice(adjustedPrice.toFixed(2));
    } else {
      setPrice("");
    }
  }, [serviceName, selectedDogSize, serviceOptions]);

  const handleDogChange = (e) => {
    const selectedDogId = Number(e.target.value);
    const selectedDog = usersDog.find((dog) => dog.id === selectedDogId);
    setSelectedDogSize(selectedDog ? selectedDog.dog_size : null);
  };

  const handleServiceChange = (e) => {
    setServiceName(e.target.value);
  };

  const handleCancel = () => {
    setServiceName(initialServiceName);
    setPrice(initialPrice);
    setSelectedDogSize(null);

    reset();
  };

  const onSubmit = async (data) => {
    const { appointmentDate, appointmentTime, dogId } = data;
    const formattedDate = format(appointmentDate, "yyyy-MM-dd");

    if (!serviceName) {
      toast.error("Please select a service plan.");
      return;
    }

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
        serviceName,
        price,
      },
      {
        onSettled: handleCancel,
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
      <FormRow>
        <StyledAppointmentSelection>
          <FaCalendarAlt />
          <Controller
            control={control}
            name="appointmentDate"
            defaultValue={null}
            rules={{ required: "Please select a date." }}
            render={({ field }) => (
              <StyledDatePicker
                {...field}
                dateFormat="dd/MM/yyyy"
                selected={field.value}
                onChange={field.onChange}
                minDate={new Date()}
                maxDate={addDays(new Date(), 30)}
                placeholderText="Select a date"
              />
            )}
          />
          {errors.appointmentDate &&
            toast.error(errors.appointmentDate.message)}
        </StyledAppointmentSelection>
      </FormRow>

      <FormRow>
        <StyledAppointmentSelection>
          <BsFillClockFill />
          <Controller
            control={control}
            name="appointmentTime"
            defaultValue=""
            rules={{ required: "Please select a time." }}
            render={({ field }) => (
              <StyledSelect {...field}>
                <option value="" disabled>
                  Select a time
                </option>
                {timePeriod.map((period, index) => (
                  <option key={index} value={period}>
                    {period}
                  </option>
                ))}
              </StyledSelect>
            )}
          />
        </StyledAppointmentSelection>
      </FormRow>

      <FormRow>
        <StyledAppointmentSelection>
          <FaDog />
          <Controller
            control={control}
            name="dogId"
            defaultValue=""
            rules={{ required: "Please select your dog." }}
            render={({ field }) => (
              <StyledSelect
                {...field}
                onChange={(e) => {
                  handleDogChange(e);
                  field.onChange(e);
                }}
              >
                <option value="" disabled>
                  Select your dog
                </option>
                {usersDog?.map((dog) => (
                  <option key={dog.id} value={dog.id}>
                    {dog.dogName}
                  </option>
                ))}
              </StyledSelect>
            )}
          />
          {errors.dogId && toast.error(errors.dogId.message)}
        </StyledAppointmentSelection>
      </FormRow>

      <FormRow>
        <div>
          <label>Service Name:</label>
          <StyledSelect onChange={handleServiceChange} value={serviceName}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
          </StyledSelect>
        </div>
      </FormRow>

      {serviceName && selectedDogSize && (
        <FormRow>
          <div>
            <label>Price:</label>
            <p> {price}€</p>
            {selectedDogSize === "Large" && (
              <AdditionalInfo>Additional 5% fee for large dog</AdditionalInfo>
            )}
          </div>
        </FormRow>
      )}

      <FormRow>
        <Button
          $variation="secondary"
          type="button"
          disabled={isCreating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isCreating}>
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default AppointmentSelection;
