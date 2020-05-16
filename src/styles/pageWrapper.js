import styled from 'styled-components';

const PageWrapper = styled.div`
  margin-top: 150px;
  min-height: 70vh;

  h1 {
    font-size: 2.7rem;
    color: ${props => props.theme.textColor};
  }

  @media (min-width: 800) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default PageWrapper ;
