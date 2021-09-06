import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  datetime: Date;
  password: string;
  passwordRepeat: string;
  eula: boolean;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="mx-6 w-96 mb-6">
      <h1 className="my-6 text-xl font-bold">yeni kullanıcı kaydı</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label className="block mb-1"> nick</label>
          <input
            type="text"
            className="border border-gray-300 rounded-sm p-2 text-sm w-full"
            {...register("username", {
              required: "Bu alan boş olamaz.",
              minLength: {
                value: 5,
                message: "Bu alan en az 5 karakterli olmalıdır. ",
              },
            })}
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>
        <div className="mb-2">
          <label className="block mb-1"> email</label>
          <input
            type="email"
            className="border border-gray-300 rounded-sm p-2 text-sm w-full"
            {...register("email", { required: "Bu alan boş olamaz." })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-2">
          <label className="block mb-1">doğum tarihi</label>
          <input
            type="date"
            {...register("datetime", { required: "Bu alan boş olamaz." })}
          />
          {errors.datetime && (
            <span className="text-red-500">{errors.datetime.message}</span>
          )}
        </div>
        <div className="mb-2">
          <label className="block mb-1"> şifre</label>
          <input
            type="password"
            className="border border-gray-300 rounded-sm p-2 text-sm w-full"
            {...register("password", {
              required: "Bu alan boş olamaz.",
              minLength: {
                value: 6,
                message: "Bu alan en az 6 karakterli olmalıdır. ",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="mb-2">
          <label className="block mb-1"> şifre(tekrar)</label>
          <input
            type="password"
            className="border border-gray-300 rounded-sm p-2 text-sm w-full"
            {...register("passwordRepeat", {
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
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
          <label>Sözleşmeyi okudum ve kabul ediyorum</label>
          {errors.eula && (
            <span className="text-red-500 block">
              Lütfen sözleşmeyi kabul ediniz!
            </span>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-sm bg-mantis-500 w-full text-white"
        >
          üye ol
        </button>
      </form>
    </div>
  );
};

export default Signup;
