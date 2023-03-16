import React, { useContext, useEffect } from "react";
import Layout from "./layout";
import { Input } from "components/elements";
import { useForm } from "react-hook-form";
import s from "./styles/clientArea.module.scss";
import { SiteContext } from "SiteContext";
import { useFetch, useYup } from "hooks";
import { Prompt } from "components/modal";
import { endpoints } from "config";
import * as yup from "yup";

export default function Profile() {
  const { user, setUser } = useContext(SiteContext);
  const { handleSubmit, control, reset } = useForm({
    resolver: useYup(
      yup.object({
        name: yup.string().required(),
      })
    ),
  });
  const { put: updateProfile, loading } = useFetch(endpoints.profile);
  useEffect(() => {
    reset({
      name: user.name,
      email: user.email,
    });
  }, []);
  return (
    <Layout>
      <div className={s.profile}>
        <form
          onSubmit={handleSubmit((values) => {
            updateProfile(values)
              .then(({ data }) => {
                if (data.success) {
                  setUser(data.data);
                }
              })
              .catch((err) => Prompt({ type: "error", message: err.message }));
          })}
        >
          <section className={s.contact}>
            <h2>Profile</h2>
            <Input label="Name" control={control} name="name" />
            <Input label="Email" control={control} name="email" disabled />
          </section>
          {/* <section className={s.address}>
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
          </section> */}

          <section className={s.btns}>
            <button className="btn primary" disabled={loading}>
              Save Changes
            </button>
          </section>
        </form>
      </div>
    </Layout>
  );
}
