import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppState } from "../store";
import { logout } from "../store/actions/authActions";
import { isTherePost } from "../store/actions/postActions";
import QuickIndexItem from "./QuickIndexItem";

const Navbar = () => {
  const [more, setMore] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const dispatch = useDispatch();
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const searchPost = () => {
    if (search === "") return;
    dispatch(isTherePost(search, history));
    setSearch("");
  };
  const [theme, setTheme] = useState<boolean>(localStorage.theme === "dark");
  const toggleMode = () => {
    if (localStorage.theme === undefined) {
      localStorage.theme = "light";
    }
    localStorage.theme === "light"
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(localStorage.theme === "dark");
  };

  const { user } = useSelector((state: AppState) => state.auth);

  return (
    <div className="sticky top-0 border-t-4 border-b border-mantis-500 bg-white dark:bg-gray-900">
      <div className="mx-2 sm:mx-auto max-w-7xl flex py-2">
        <Link to="/" className="w-1/6 sm:flex-1 flex items-center">
          {theme ? (
            <img
              className="hidden sm:block h-6"
              src="https://ekstat.com/img/new-design/eksisozluk_logo_darktheme.svg"
              alt="logo"
            />
          ) : (
            <img
              className="hidden sm:block h-6"
              src="https://ekstat.com/img/new-design/eksisozluk_logo.svg"
              alt="logo"
            />
          )}
          <img
            className="h-6 sm:hidden"
            src="https://ekstat.com/img/ilogo_smallv2.png"
            alt="mobilelogo"
          />
        </Link>
        <div className="w-5/6  sm:flex-1 flex justify-center">
          <input
            type="text"
            placeholder={t("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchPost()}
            className="flex-1 text-sm px-1 rounded-tl-md rounded-bl-md border-mantis-500 border leading-7"
          />
          <button
            onClick={() => searchPost()}
            className=" bg-mantis-500 h-full leading-7 border border-mantis-500 px-2 rounded-tr-md rounded-br-md"
          >
            <svg
              className="h-4 "
              id="eksico-search"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="m507 507c-2 3-6 5-10 5-4 0-8-2-11-5l-143-142c-74 63-182 66-259 7-78-59-104-164-63-252 41-88 138-136 233-115 95 21 162 106 162 203 0 50-18 98-51 135l142 143c6 6 6 15 0 21z m-123-299c0-97-79-176-176-176-97 0-176 79-176 176 0 97 79 176 176 176 97 0 176-79 176-176z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex flex-1 justify-end items-center text-sm">
          <button
            onClick={() => toggleMode()}
            className=" h-full leading-7 px-2 rounded-tr-md rounded-br-md"
          >
            {theme ? (
              <img
                className="h-4"
                src="https://www.svgrepo.com/show/30310/sun.svg"
                alt="lightmode"
              />
            ) : (
              <img
                className="h-4"
                src="https://www.svgrepo.com/show/35385/moon.svg"
                alt="darkmode"
              />
            )}
          </button>
          <div className="" title="language">
            <select
              className="bg-mantis-500 text-white px-2 py-1 rounded-l-md rounded-r-md"
              onChange={(e) => {
                changeLanguage(e.target.value);
              }}
              value={i18n.language}
            >
              <option value="tr">TR</option>
              <option value="en">EN</option>
            </select>
          </div>
          {user.username ? (
            <div className="flex items-center justify-center">
              <span className="px-2 dark:text-white hover:underline">
                {user.username}
              </span>
              <Link
                className="dark:text-white"
                to="/#"
                onClick={() => dispatch(logout())}
              >
                {t("logout")}
              </Link>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-2 dark:text-white hover:underline"
              >
                {t("login")}
              </Link>
              <Link
                to="/signup"
                className="ml-1 px-2 dark:text-white hover:underline"
              >
                {t("signup")}
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <ul id="quick-index-nav" className="flex flex-row">
          <QuickIndexItem
            href="/agenda"
            title={t("agenda_title")}
            text={t("agenda")}
          />
          <QuickIndexItem href="/#" title={t("debe_title")} text={t("debe")} />
          <QuickIndexItem
            href="/#"
            title={t("problems_title")}
            text={t("problems")}
          />
          <QuickIndexItem
            href="/#"
            title={t("sports_title")}
            text={t("sports")}
            className="hidden md:block"
          />
          <QuickIndexItem
            href="/#"
            title={t("relationships_title")}
            text={t("relationships")}
            className="hidden md:block"
          />
          <QuickIndexItem
            href="/#"
            title={t("politics_title")}
            text={t("politics")}
            className="hidden md:block"
          />
          {user.username ? (
            <span className=" sm:hidden px-2 flex justify-center items-center hover:underline">
              {user.username}
            </span>
          ) : (
            <>
              <QuickIndexItem
                href="/login"
                title={t("login")}
                text={t("login")}
                className="sm:hidden"
              />
              <QuickIndexItem
                href="/signup"
                title={t("signup")}
                text={t("signup")}
                className="sm:hidden"
              />
            </>
          )}
          <li className="hidden mx-2  flex-1 sm:flex  border-b-4  border-transparent hover:border-mantis-500 font-semibold">
            <Link
              to="/#"
              title="kanallar"
              className="flex flex-1 justify-center items-center hover:text-mantis-500 "
              onClick={() => setMore(true)}
            >
              <svg fill="black" width="20" viewBox="0 0 512 512">
                <path d="m64 192c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z m384 0c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z m-192 0c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z"></path>
              </svg>
            </Link>

            {more && (
              <>
                <div
                  id="close-panel"
                  onClick={() => setMore(false)}
                  className="absolute left-0 top-0 w-screen h-screen z-0"
                ></div>
                <ul className="absolute flex flex-col bg-white border border-gray-400 rounded z-20">
                  <li className="text-center px-7  py-1 hover:bg-gray-300">
                    <Link to="/">deneme1</Link>
                  </li>
                  <li className="text-center px-7 py-1 hover:bg-gray-300">
                    <Link to="/">deneme1</Link>
                  </li>
                  <li className="text-center px-7 py-1 hover:bg-gray-300">
                    <Link to="/">deneme1</Link>
                  </li>
                  <li className="text-center px-7 py-1 hover:bg-gray-300 ">
                    <Link to="/">deneme1</Link>
                  </li>
                  <li className="text-center px-7 py-1 hover:bg-gray-300">
                    <Link to="/">deneme1</Link>
                  </li>
                </ul>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
