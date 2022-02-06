import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { register as registerAction } from "../store/actions/authActions";

type Inputs = {
  username: string;
  email: string;
  birtdate: Date;
  password: string;
  passwordRepeat: string;
  eula: boolean;
};

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      registerAction({
        email: data.email,
        password: data.password,
        username: data.username,
        birtdate: data.birtdate,
        history: history,
      })
    );
  };
  return (
    <div className="lg:w-3/5 flex">
      <div className="mx-6 w-96 mb-6">
        <h1 className="my-6 text-xl font-bold dark:text-white">
          {t("signup_page_title")}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label className="block mb-1 dark:text-white">
              {t("signup_username")}
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-sm p-2 text-sm w-full"
              {...register("username", {
                required: true,
                minLength: {
                  value: 5,
                  message: t("field_5_min_length"),
                },
              })}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
          <div className="mb-2">
            <label className="block mb-1 dark:text-white">
              {t("signup_email")}
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded-sm p-2 text-sm w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-2">
            <label className="block mb-1 dark:text-white">
              {t("signup_password")}
            </label>
            <input
              type="date"
              {...register("birtdate", { required: `${t("cannot_be_empty")}` })}
            />
            {errors.birtdate && (
              <span className="text-red-500">{errors.birtdate.message}</span>
            )}
          </div>
          <div className="mb-2">
            <label className="block mb-1 dark:text-white">
              {t("signup_password")}
            </label>
            <input
              type="password"
              className="border border-gray-300 rounded-sm p-2 text-sm w-full"
              {...register("password", {
                required: `${t("cannot_be_empty")}`,
                minLength: {
                  value: 6,
                  message: t("field_6_min_length"),
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="mb-2">
            <label className="block mb-1 dark:text-white">
              {t("signup_password_confirm")}
            </label>
            <input
              type="password"
              className="border border-gray-300 rounded-sm p-2 text-sm w-full"
              {...register("passwordRepeat", {
                validate: (value) =>
                  value === watch("password") || `${t("passwords_not_match")}`,
              })}
            />
            {errors.passwordRepeat && (
              <span className="text-red-500">
                {errors.passwordRepeat.message}
              </span>
            )}
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              {...register("eula", { required: true })}
              className="mr-2"
            />
            <label className="dark:text-white">{t("signup_eula_text")}</label>
            {errors.eula && (
              <span className="text-red-500 block">
                {t("signup_eula_error")}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-sm bg-mantis-500 w-full text-white"
          >
            {t("signup_button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
