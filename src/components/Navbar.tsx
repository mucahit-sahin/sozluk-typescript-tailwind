import { useState } from "react";
import QuickIndexItem from "./QuickIndexItem";

const Navbar = () => {
  const [more, setMore] = useState<boolean>(false);
  return (
    <div className="border-t-4 border-b border-mantis-500">
      <div className="mx-2 sm:mx-auto max-w-7xl flex py-2">
        <div className="w-1/6 sm:flex-1 flex items-center">
          <img
            className="hidden sm:block h-6"
            src="https://ekstat.com/img/new-design/eksisozluk_logo.svg"
            alt="logo"
          />
          <img
            className="h-6 sm:hidden"
            src="https://ekstat.com/img/ilogo_smallv2.png"
            alt="mobilelogo"
          />
        </div>
        <div className="w-5/6  sm:flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 text-sm px-1 rounded-tl-md rounded-bl-md border-mantis-500 border leading-7"
          />
          <button className=" bg-mantis-500 h-full leading-7 border border-mantis-500 px-2 rounded-tr-md rounded-br-md">
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
          <a href="/" className="px-2 hover:underline">
            giriş
          </a>
          <a href="/" className="ml-1 px-2 hover:underline">
            üye ol
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <ul id="quick-index-nav" className="flex flex-row">
          <QuickIndexItem
            href="/basliklar/gundem"
            title="dünyamızda neler olup bitiyor"
            text="gündem"
          />
          <QuickIndexItem
            href="/debe"
            title="dünün en beğenilen entry'leri"
            text="debe"
          />
          <QuickIndexItem
            href="/basliklar/sorunsal"
            title="dünyamızda neler olup bitiyor"
            text="sorunsallar"
          />
          <QuickIndexItem
            href="/basliklar/kanal/spor"
            title="futbol, basketbol, tenis ve curling gibi ata sporları"
            text="#spor"
            className="hidden md:block"
          />
          <QuickIndexItem
            href="/basliklar/kanal/iliskiler"
            title="sevgili, eski sevgili ve hoşlanılan kız"
            text="#ilişkiler"
            className="hidden md:block"
          />
          <QuickIndexItem
            href="/basliklar/kanal/siyaset"
            title="partiler, politikacılar, terör, savaş kan ve korku"
            text=" #siyaset"
            className="hidden md:block"
          />
          <QuickIndexItem
            href="/login"
            title="giriş"
            text="giriş"
            className="sm:hidden"
          />
          <QuickIndexItem
            href="/signup"
            title="üye ol"
            text="üye ol"
            className="sm:hidden"
          />
          <li className="hidden mx-2  flex-1 sm:flex  border-b-4  border-transparent hover:border-mantis-500 font-semibold">
            <a
              href="/#"
              title="kanallar"
              className="flex flex-1 justify-center items-center hover:text-mantis-500 "
              onClick={() => setMore(true)}
            >
              <svg fill="black" width="20" viewBox="0 0 512 512">
                <path d="m64 192c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z m384 0c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z m-192 0c-34 0-64 30-64 64 0 34 30 64 64 64 34 0 64-30 64-64 0-34-30-64-64-64z"></path>
              </svg>
            </a>

            {more && (
              <>
                <div
                  id="close-panel"
                  onClick={() => setMore(false)}
                  className="absolute bg-gray-500 bg-opacity-60 left-0 top-0 w-screen h-screen z-0"
                ></div>
                <ul className="absolute flex flex-col bg-white border border-gray-400 rounded z-20">
                  <li className="text-center px-7  py-1 hover:bg-gray-300">
                    <a href="/">deneme1</a>
                  </li>
                  <li className="text-center px-7 py-1 hover:bg-gray-300">
                    <a href="/">deneme1</a>
                  </li>
                  <li className="text-center px-7 py-1 hover:bg-gray-300">
                    <a href="/">deneme1</a>
                  </li>
                  <li className="text-center px-7 py-1 hover:bg-gray-300 ">
                    <a href="/">deneme1</a>
                  </li>
                  <li className="text-center px-7 py-1 hover:bg-gray-300">
                    <a href="/">deneme1</a>
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