import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  transition: background-color ${props => props.theme.transition},
    box-shadow 0.3s;
  box-shadow: ${props => (props.isScrolled ? '0px 0px 10px #4d4d4d' : 'none')};
  display: flex;
  justify-content: center;
  background-color: white;

  .dropdown {
    font-size: .8rem;
  }

  .navContainer { 

    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 15px;
    width: 100vw;
    max-width: 1000px;
    margin: 0 auto;
    #logo {
      width: 165px;
      height: auto;
      a {
        text-decoration: none;
        outline: none;
      }
      h2 {
        font-size: 0.563rem;
        text-align: center;
        letter-spacing: 4.4px;
        margin: 0;
      }
    }
    nav {
      width: 55%;
      margin-top: 2px;
      ul {
        
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        margin: 0;
        li {
          margin: 0;
          list-style-type: none;
          color: black;
          a {
            font-family: 'Montserrat', 'Helvetica', 'sans-serif';
            font-weight: 600;
            font-size: 1.2rem;
            letter-spacing: 1px;
            text-decoration: none;
            padding: 0 2px 6px;
            border-bottom: 3px solid transparent;
            color: black;
          }
          a:hover {
            color: #857885;
            // border-bottom: 3px solid ${props => props.theme.textColor};
          }
          .activePage {
            color: #857885;
            border-bottom: 1px solid ${props => props.theme.textColor};
          }
          .disabled {
            opacity: 0.5;
            color: #857885;;
          }
          .dropdown-menu {
            // background-color: #F0B7B3;
            // background-opacity: 0.5;
            border: none;
          }
          .dropdown-item {
            padding: 5px;
            font-size: .9rem;
          }
          .dropdown-menu {
            .activePage {
              border-bottom: none;
              font-size: .9rem;
              }
          }
        }
      }
    }
  }
  @media (max-width: 980px) {
    .navContainer {
      nav {
        display: none;
      }
    }
  }
  @media (min-width: 880px) {
    height: 80px;
    .navContainer {
      height: 80px;
      #logo {
        width: 205px;
        height: auto;
        }
        h2 {
          font-size: 0.69rem;
          letter-spacing: 5.8px;
        }
      }
    }
  }
`;

export default HeaderWrapper;