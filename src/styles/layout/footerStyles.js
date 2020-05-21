import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #343a40;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: #f39b9b;
  }
  
  a:hover {
    color: #343a40;
  }


  span {
    display: block;
    transition: ${props => props.theme.transition};
    color: ${props => props.theme.textColor};
  }


  small {
    color: ${props => props.theme.textColor}
    padding-top: 5px;
  }
`;

export default FooterWrapper;
