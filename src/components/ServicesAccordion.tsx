import React, { useState } from 'react';
import { Accordion, Card, Container, Button } from 'react-bootstrap';
import '../index.css'

interface ServiceItem {
  name: string;
  description: string;
  price: string;
  link?: string;
}

interface ServiceCategory {
  category: string;
  services: ServiceItem[];
}

interface ServicesAccordionProps {
  data: ServiceCategory[];
}

const ServicesAccordion: React.FC<ServicesAccordionProps> = ({ data }) => {
  // Track which service iframe is open
  const [openIframeIndex, setOpenIframeIndex] = useState<string | null>(null);

  const toggleIframe = (key: string) => {
    setOpenIframeIndex(prev => (prev === key ? null : key));
  };

  return (
    <Container className="my-5">
      <Accordion defaultActiveKey="0">
        {data.map((section: ServiceCategory, idx: number) => (
          <Accordion.Item eventKey={String(idx)} key={section.category} >
            <Accordion.Header className="custom-accordion-header" style={{fontFamily: 'Julius Sans One', fontSize: '2rem'}}>
              {section.category}
            </Accordion.Header>
            <Accordion.Body style={{  marginBottom: '20px' }}>
              {section.services.map((service: ServiceItem, sIdx: number) => {
                const uniqueKey = `${idx}-${sIdx}`;
                return (
                  <Card key={sIdx} className="mb-3 shadow-sm">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between" style={{ textTransform: 'uppercase', fontFamily: 'Julius Sans One' }}>
                        <span>{service.name}</span>
                        <span className="text-muted" style={{fontFamily: 'quicksand'}}>{service.price}</span>
                      </Card.Title>
                      <Card.Text>{service.description}</Card.Text>

                      {service.link && (
                        <div className="text-center mt-3">
                          <Button
                            variant="light"
                            onClick={() => toggleIframe(uniqueKey)}
                            style={{
                                backgroundColor: "#bf8f83",
                              borderRadius: '0',
                              fontFamily: 'Julius Sans One',
                              textTransform: 'uppercase',
                              color: 'white',
                              fontSize: '1rem',
                              padding: '0.5rem 1.2rem',
                              letterSpacing: '0.05em',
                              zIndex: 100
                            }}
                          >
                            {openIframeIndex === uniqueKey ? 'Hide Booking' : 'Book Now'}
                          </Button>
                        </div>
                      )}

                      {openIframeIndex === uniqueKey && service.link && (
                        <div className="mt-4">
                          <iframe
                            src={service.link}
                            width="100%"
                            height="800"
                            frameBorder="0"
                            title={`Booking for ${service.name}`}
                          ></iframe>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default ServicesAccordion;
