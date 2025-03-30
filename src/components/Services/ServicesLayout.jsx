import { Outlet } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <div className="mt-20">
      <Outlet /> {/* Renders the child routes */}
    </div>
  );
};

export default ServicesLayout;
