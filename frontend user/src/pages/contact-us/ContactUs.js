import React from "react";
import Header from "../../components/header/Header";
import BannerPages from "../../components/banners/BannerPages";
import { Container, Row, Col } from "react-bootstrap";
import ContactDetails from "../../components/contact/ContactDetails";
import ContactForm from "../../components/contact/ContactForm";
import Footer from "../../components/footer/Footer";

export default function ContactUs() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
