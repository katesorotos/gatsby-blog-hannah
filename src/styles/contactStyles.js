import styled from 'styled-components';

const ContactWrapper = styled.div`
margin-top: 150px;
margin-bottom: 100px;
min-height: 70vh;   
color: #343a40;
  width: 100%;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.bgColor};
  min-height: 80vh;


  h1 {
    font-size: 3.2rem;
    color: #343a40;
    color: ${props => props.theme.textColor};
    text-decoration: underline;
    margin-left: 20px;
  }

  #contact {
    width: 80vw;
    max-width: 700px;
    margin: auto;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      margin: 25px;

      label {
        font-weight: 600;
        color: ${props => props.theme.textColor};

        span {
          color: #cc0000;
        }
      }

      input,
      textarea {
        font-family: 'Montserrat', sans-serif;
        padding: 5px 10px;
        border: none;
        border-bottom: 3px solid ${props => props.theme.textColor};
        background-color: rgba(0, 0, 0, 0);
      }
      textarea {
        height: 150px;
      }
    }

button {
      width: 100%;
      max-width: 500px;
      margin: 35px auto;
      padding: 11px;
      background-color: #857885;
      border: none;
      color: white;
      transition: 0.3s;
    }
    button:hover {
      cursor: pointer;
      box-shadow: 0px 5px 10px #888;
    }
  }

  .success {
        text-align: center;
    h1 {
        padding: none;
        margin: none;
        text-decoration: none;
        font-size: 5rem;
    }
    p {
        text-decoration: underline;
        font-size: 2rem;
        color: #343a40;
    }
    p:hover {
        color: #857885;
    }
}
`;

export default ContactWrapper;
