import { useEffect, useRef, useState } from "react";

const Item = ({ data }) => {
  const elRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleScroll = (_) => {
    if (elRef.current.getBoundingClientRect().top < window.innerHeight / 1.5)
      setVisible(true);
  };

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", handleScroll);

    if (elRef.current.getBoundingClientRect().top < window.innerHeight / 1.5)
      setVisible(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={elRef}
      className={`flex justify-center duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-max">
        <div className="block w-full" style={{ height: "280px" }}>
          <img
            src={data.src}
            alt={data.label}
            className="cursor-pointer rounded-lg bg-black transition hover:opacity-70"
          />
        </div>
        <div className="pt-4 text-sm font-semibold">{data.label}</div>
      </div>
    </div>
  );
};

export default Item;
