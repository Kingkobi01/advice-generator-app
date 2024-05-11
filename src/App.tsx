import { useEffect, useState } from "react";

function App() {
  interface Slip {
    slip_id: number;
    advice: string;
  }
  const [slip, setSlip] = useState<Slip>({ slip_id: 0, advice: "" });

  const fetchAdvice = async () => {
    await setSlip({ slip_id: 0, advice: "Loading..." });
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);

    setSlip({
      slip_id: data.slip.id,
      advice: data.slip.advice,
    });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <article className="relative space-y-12 bg-neutral-200 mx-auto px-12 pt-16 pb-24 rounded-lg w-[95%] max-w-[50rem] font-bold text-center">
      <h1 className="text-[ text-secondary uppercase tracking-widest 0.875rem]">
        advice #{slip.slip_id}
      </h1>
      <p className="text-[1.75rem] text-primary leading-loose">
        "{slip.advice}"
      </p>
      <picture>
        <source
          srcSet="./images/pattern-divider-desktop.svg"
          media="(orientation:landscape)"
          className="mx-auto mt-16 w-full"
        />
        <source
          srcSet="./images/pattern-divider-mobile.svg"
          media="(orientation:portrait)"
          className="mx-auto mt-16 w-full"
        />
        <img
          src="./images/pattern-divider-mobile.svg"
          alt=""
          className="mx-auto mt-16 w-full"
        />
      </picture>
      {/* <img src="./images/pattern-divider-mobile.svg" alt="" className="mb-16" /> */}
      <button
        onClick={() => {
          fetchAdvice();
        }}
        className="bottom-0 left-1/2 absolute place-items-center grid bg-secondary mx-auto rounded-full w-16 -translate-x-1/2 translate-y-1/2 cursor-pointer aspect-square"
      >
        <img src="./images/icon-dice.svg" alt="" />
      </button>
    </article>
  );
}

export default App;
