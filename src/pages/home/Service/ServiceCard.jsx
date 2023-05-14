import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
  console.log(service);
  // eslint-disable-next-line react/prop-types
  const { title, img, price } = service;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="img" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-[#151515]">{title}</h2>
        <div className="card-actions flex justify-between">
          <p className="text-[#FF3811] font-bold">Price: ${price}</p>
          <Link className="text-xl text-[#FF3811]">
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
