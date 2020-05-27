import styled from 'styled-components';

const PageWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;
  min-height: 70vh;
  color: #343a40;

  h1 {
    font-size: 3.2rem;
    color: #343a40;
    color: ${props => props.theme.textColor};
    text-decoration: underline;
    margin-left: 20px;
  }
  h2 {
    font-size: 2rem;
  }
  a { 
    color: #343a40;
  }
  img {
    margin-right: 20px;
    height: 100%;
    width: 100%;
  }
  .margins {
    text-align: center;
  }
  .techno {
    text-align: center;
  }
  .excerpt {
    margin-top: 50px;
  }
  .content {
    padding-left: 30px;
  }
  .error {
    margin: none;
    padding: none;
    text-align: center;
    h1 {
      margin-left: 5px;
      text-decoration: none;
      font-size: 9rem;
      color: white;
      text-shadow: 0.0px 10.0px 0.02px #000, 9.8px 2.1px 0.02px #000, 4.2px -9.1px 0.02px #000, -8.0px -6.0px 0.02px #000, -7.6px 6.5px 0.02px #000, 4.8px 8.8px 0.02px #000, 9.6px -2.8px 0.02px #000, -0.7px -10.0px 0.02px #000, -9.9px -1.5px 0.02px #000, -3.5px 9.4px 0.02px #000, 8.4px 5.4px 0.02px #000, 7.1px -7.0px 0.02px #000, -5.4px -8.4px 0.02px #000, -9.4px 3.5px 0.02px #000, 1.4px 9.9px 0.02px #000, 10.0px 0.8px 0.02px #000, 2.9px -9.6px 0.02px #000, -8.7px -4.8px 0.02px #000, -6.6px 7.5px 0.02px #000, 5.9px 8.0px 0.02px #000, 9.1px -4.1px 0.02px #000, -2.1px -9.8px 0.02px #000, -10.0px -0.1px 0.02px #000, -2.2px 9.8px 0.02px #000, 9.1px 4.2px 0.02px #000, 6.1px -8.0px 0.02px #000, -6.5px -7.6px 0.02px #000, -8.8px 4.7px 0.02px #000, 2.7px 9.6px 0.02px #000, 10.0px -0.6px 0.02px #000, 1.5px -9.9px 0.02px #000, -9.3px -3.6px 0.02px #000, -5.5px 8.4px 0.02px #000, 7.0px 7.2px 0.02px #000, 8.5px -5.3px 0.02px #000, -3.4px -9.4px 0.02px #000, -9.9px 1.3px 0.02px #000, -0.8px 10.0px 0.02px #000, 9.6px 2.9px 0.02px #000, 4.9px -8.7px 0.02px #000, -7.5px -6.7px 0.02px #000, -8.1px 5.9px 0.02px #000, 4.0px 9.2px 0.02px #000, 9.8px -2.0px 0.02px #000, 0.2px -10.0px 0.02px #000, -9.7px -2.3px 0.02px #000, -4.3px 9.0px 0.02px #000, 7.9px 6.1px 0.02px #000;
    }
    p {
      font-size: 2rem;
      text-decoration: underline;
    }
    p:hover {
      color: #857885;
    }
  }

  @media (min-width: 800) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default PageWrapper ;
