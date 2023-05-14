import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-4">
      <div className="text-center ">
        <h1 className="text-[#FF3811] text-2xl font-bold">Service</h1>
        <h1 className="text-5xl text-[#151515] font-extrabold">
          Our Service Area
        </h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or random <br /> words which do look even slightly believable.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 lg:my-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
