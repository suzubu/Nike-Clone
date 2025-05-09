// === [ Services Section ] ===
// Displays a row of ServiceCard components using data from the services array.
// This section is fully responsive and wraps cards as needed.
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

// Functional section definition
const Services = () => {
  return (
    <>
      {/* Section container with flex wrapping for service cards */}
      <section className="max-container flex justify-center flex-wrap gap-9">
        {/* Render a ServiceCard for each service entry */}
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
    </>
  );
};

export default Services;
