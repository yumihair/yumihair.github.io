import Title from '../components/Title';
import ServicesAccordion from '../components/ServicesAccordion';
import servicesData from './serviceData';


function Services() {
    return(
        <div style={{ minHeight: '110vh', position: 'relative' }}>
              <Title name="Services" cursiveName="haircare" />
               
               <div style={{ 
                    fontFamily: 'quicksand',
                    margin: '30px 20px 10px 20px',
                    color: 'white'
                }}>
                    <div style={{
                fontFamily: 'Julius Sans One',
                fontSize: '1.5rem'
               }}>Elevated Hair, Expertly Crafted</div>
               As a top Vegas stylist with a Nevada State Cosmetology License, 
                I bring years of experience from LA, Seattle, and even New York 
                Fashion Week. Specializing in editorial styles, custom color, 
                and women&apos;s haircuts—I'm here to help you look and feel your 
                best.</div>
              <ServicesAccordion data={servicesData} />
        </div>
    )
};

export default Services;