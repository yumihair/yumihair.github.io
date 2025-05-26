import React from 'react';
import { Accordion, Card, Container } from 'react-bootstrap';

// Interfaces defined at the top of the file
interface ServiceItem {
  name: string;
  description: string;
  price: string;
}

interface ServiceCategory {
  category: string;
  services: ServiceItem[];
}

interface ServicesAccordionProps {
  data: ServiceCategory[];
}

const ServicesAccordion: React.FC<ServicesAccordionProps> = ({ data }) => {
  return (
    <Container className="my-5">
      <Accordion>
        {data.map((section: ServiceCategory, idx: number) => (
          <Accordion.Item eventKey={String(idx)} key={section.category}>
            <Accordion.Header style={{
                fontFamily: 'LeJourSerif',
                fontSize: '3rem',
                textAlign: 'center'
                }}>{section.category}</Accordion.Header>
            <Accordion.Body style={{
                fontFamily: 'quicksand',
                marginBottom: '20px'
            }}>
              {section.services.map((service: ServiceItem, sIdx: number) => (
                <Card key={sIdx} className="mb-3 shadow-sm">
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between" style={{
                        textTransform: 'uppercase'
                    }}>
                      <span>{service.name}</span>
                      <span className="text-muted">{service.price}</span>
                    </Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default ServicesAccordion;
