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
  @media (min-width: 800) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default PageWrapper ;
