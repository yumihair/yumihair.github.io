import Title from '../components/Title';
import ServicesAccordion from '../components/ServicesAccordion';
import servicesData from './serviceData';


function Services() {
    return(
        <div style={{ minHeight: '110vh', position: 'relative' }}>
              <Title name="Services" cursiveName="haircare" />
              <ServicesAccordion data={servicesData} />
        </div>
    )
};

export default Services;