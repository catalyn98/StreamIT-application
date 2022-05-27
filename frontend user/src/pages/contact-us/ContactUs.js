import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BannerPages from "../../components/banners/BannerPages";
import ContactDetails from "../../components/contact/ContactDetails";
import ContactForm from "../../components/contact/ContactForm";

export default function ContactUs() {
  return (
    <div>
      <BannerPages pageName="Contact" />
      <main id="main" className="site-main">
        <Container>
          <Row>
            <Col lg="12" sm="12">
              {/* Contact details */}
              <ContactDetails />
              {/* Contact form */}
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
