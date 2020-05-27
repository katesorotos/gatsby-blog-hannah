import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import ContactWrapper from '../styles/contactStyles';

const FormSuccess = ({ path }) => {

  return (
    <Layout>
      <ContactWrapper>
        <div class="success">
          <h1>☺</h1>
        <h2>Message successfully sent</h2>
        <h3>I'll get back to you as soon as possible</h3>
        <Link to="/"><p><strong>HOME</strong></p></Link>
        </div>
      </ContactWrapper>
    </Layout>
  );
};
 
FormSuccess.propTypes = {
  path: PropTypes.string.isRequired,
};

export default FormSuccess;
