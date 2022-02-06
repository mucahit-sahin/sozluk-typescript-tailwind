import { useTranslation } from "react-i18next";

const Ads = () => {
  const { t } = useTranslation();
  return (
    <div className="hidden lg:flex flex-col w-1/5 dark:text-white">
      {t("ads")}
    </div>
  );
};
export default Ads;
