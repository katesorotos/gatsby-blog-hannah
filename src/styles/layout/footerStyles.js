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
    color: #857885;
  }
  
  a:hover {
    color: #f39b9b;
  }

  .stackIcons {
    padding: 25px 15px 15px;
    width: 100%;
    max-width: 400px;
    ul {
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        list-style-type: none;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          img {
            height: auto;
            width: 40px;
          }
        }
      }
    }
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
