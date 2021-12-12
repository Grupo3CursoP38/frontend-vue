import useVuelidate from "@vuelidate/core";
import { required, email, minLength, numeric } from "@vuelidate/validators";

export function useForm(form) {
  const rules = {
    name: {
      required,
    },
    lastname: {
      required,
    },
    phone: {
      numeric,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      min: minLength(6),
    },
    confirmPassword: {
      required,
    },
    check: {
      required,
    },
    birthdate: {
      required,
    },
    type: {},
    date_finish: {
      required,
    },
    date_start: {
      required,
    },
    user_id: {
      required,
      numeric,
    },
    vehicle_id: {
      required,
      numeric,
    },
    is_active: {
      required,
    },
  };

  const v$ = useVuelidate(rules, form);

  return v$;
}
