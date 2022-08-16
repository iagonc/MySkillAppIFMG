import { useEffect, useState } from "react";

const useGreetings = () => {
  const currentHour = new Date().getHours();
  const [grettings, setGrettings] = useState("");

  useEffect(() => {
    if (currentHour < 12) setGrettings("Bom dia");
    if (currentHour >= 12 && currentHour < 18) setGrettings("Boa tarde");
    else setGrettings("Boa noite");
  }, []);

  return [grettings];
};

export default useGreetings;
