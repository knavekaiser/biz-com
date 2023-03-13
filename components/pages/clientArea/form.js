import React from "react";
import { Input } from "components/elements";
import { useForm } from "react-hook-form";
import s from "./styles/clientArea.module.scss";

export default function Images() {
  const { control } = useForm();
  return (
    <div className={s.forms}>
      <h2>Shipping Address</h2>
      <form>
        <section className={s.contact}>
          <h3>Contact</h3>
          <Input label="Name" control={control} name="name" />
          <Input label="Phone" control={control} name="phone" />
        </section>
        <section className={s.address}>
          <h3>Address</h3>
          <Input
            label="Street, house/apartment/unit*"
            control={control}
            name="address"
          />
          <Input
            label="Apt, Suit, Unit etc. (Optional)"
            control={control}
            name="address2"
          />
          <Input label="Country" control={control} name="country" />
          <Input label="State" control={control} name="state" />
          <Input label="City" control={control} name="city" />
          <Input label="Zip Code" control={control} name="zipCode" />
        </section>
      </form>
    </div>
  );
}
