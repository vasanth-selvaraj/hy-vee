"use client";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";

interface DogImage {
  message: string;
  status: string;
}

interface CatFact {
  fact: string;
  length: number;
}

export default function Home() {
  const [selected, setSelected] = useState<string>("");

  const [apiData, setApiData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setLoading(true);
    setSelected(event.target.value);
    if (event.target.value === "Dog") {
      try {
        await axios
          .get("https://dog.ceo/api/breeds/image/random")
          .then((res: AxiosResponse<DogImage>) => {
            setApiData(res.data.message);
            setLoading(false);
          });
      } catch (err) {
        setLoading(false);
      }
    } else if (event.target.value === "Cat") {
      try {
        await axios
          .get("https://catfact.ninja/fact")
          .then((res: AxiosResponse<CatFact>) => {
            setApiData(res.data.fact);
            setLoading(false);
          });
      } catch (err) {
        setLoading(false);
      }
    }
  }

  return (
    <div className="flex flex-col gap-8 h-screen w-screen items-center p-10">
      <div
        className={`flex flex-col gap-2 items-center justify-center p-4 transition-all duration-500 ease-in-out ${
          selected !== "" ? "h-40 w-1/2" : "h-full w-1/2"
        }`}
      >
        <label>Select an option :</label>
        <select
          onChange={(e) => handleSelect(e)}
          className="w-40 rounded h-10 focus:outline-none p-2 bg-gray-200 border dark:bg-neutral-700 border-gray-300 dark:border-neutral-700 shadow-lg"
        >
          <option value="">Select</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
        </select>
      </div>
      <div
        className={`border border-gray-300 bg-gradient-to-r dark:from-neutral-800 dark:to-neutral-900 from-gray-100 to-gray-200 shadow-md dark:bg-neutral-800 dark:border-neutral-700 flex justify-center items-center p-4 rounded ${
          selected !== "" ? "flex opacity-100" : "opacity-0"
        }`}
      >
        {selected === "Dog" ? (
          <>
            {!loading ? (
              <div className="">
                <h1 className="text-xl flex justify-center text-center items-baseline py-2">
                  Here is a{" "}
                  <span className="text-3xl px-2 font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                    Dog
                  </span>{" "}
                  photo for you
                </h1>
                <Image
                  src={apiData}
                  height={400}
                  width={400}
                  alt="random dog"
                  className="rounded"
                  priority
                />
              </div>
            ) : (
              <>
                <svg
                  viewBox="0 0 135 135"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#525252"
                  className="w-10 h-10"
                >
                  <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 67 67"
                      to="-360 67 67"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 67 67"
                      to="360 67 67"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </>
            )}
          </>
        ) : (
          <>
            {!loading ? (
              <>
                <div className="p-2">
                  <h1 className="text-xl flex justify-center text-center items-baseline py-2">
                    Here is a{" "}
                    <span className="text-3xl px-2 font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                      cat
                    </span>{" "}
                    fact for you
                  </h1>
                  <p className="text-sm py-2 text-justify">{apiData}</p>
                </div>
              </>
            ) : (
              <>
                <svg
                  viewBox="0 0 135 135"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#525252"
                  className="w-10 h-10"
                >
                  <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 67 67"
                      to="-360 67 67"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 67 67"
                      to="360 67 67"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
