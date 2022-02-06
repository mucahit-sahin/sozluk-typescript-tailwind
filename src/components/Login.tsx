import { useForm, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppState } from "../store";
import { login } from "../store/actions/authActions";

type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      login({ email: data.email, password: data.password, history: history })
    );
  };
  const { error } = useSelector((state: AppState) => state.auth);
  const { t } = useTranslation();

  return (
    <div className="lg:w-3/5 flex">
      <div className="mx-6 w-96 ">
        <h1 className="my-6 text-xl font-bold dark:text-white">
          {t("login_page_title")}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label className="block mb-1 dark:text-white">
              {t("login_email")}
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded-sm p-2 text-sm w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500"> {t("cannot_be_empty")}</span>
            )}
          </div>
          <div className="mb-2">
            <label className="block mb-1 dark:text-white">
              {t("login_password")}
            </label>
            <input
              type="password"
              className="border border-gray-300 rounded-sm p-2 text-sm w-full"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 "> {t("cannot_be_empty")}</span>
            )}
          </div>
          <div className="mb-2">
            <input type="checkbox" {...register("rememberMe")} />
            <label className="dark:text-white">{t("login_remember")}</label>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-sm bg-mantis-500 w-full text-white"
          >
            {t("login_button")}
          </button>
          {error !== "" && (
            <span className="text-red-500">{t("Auth_Failed")}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
