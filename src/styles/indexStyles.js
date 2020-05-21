import styled from 'styled-components';
import fadeInUpward from './animations/fadeInUpward';

const IndexPageWrapper = styled.div`

  margin-top:   50px;
  transition: ${props => props.theme.transition};

  .indexIntro {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto 0;
    animation: ${fadeInUpward} 1s; 

   

    .headline {
      animation: ${fadeInUpward} 1s;
      color: ${props => props.theme.textColor};
      letter-spacing: 0.5px;
      h1 { 
        font-size: 45px;
      }
      h2 { 
        font-size: 30px;
      }
    }

    .introSocialLinks {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      animation: ${fadeInUpward} 1s;
      width: 90vw;
      max-width: 350px;
      margin: 0;
      a {
        margin-right: -14vh;
        
      }
      li {
        margin-right: 4vh;
        list-style-type: none;
        height: 45px;
        width: 45px;
        transition: 0.2s;
        background-color: ${props => props.theme.bgColor};
        transition: ${props => props.theme.transition};

        #icon {
          transition: ${props => props.theme.transition};
          height: 15px;
          width: auto;
          background-color: ${props => props.theme.bgColor};
          fill: ${props => props.theme.textColor};
        }
      }
      li:hover {
        transform: translateY(-10px);
      }
    }
  }
  #portfolioOfWork {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: top;
    margin-top: 50px;
    text-align: center;
  }
  
  #quote {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: top;
    margin-top: 50px;
  }

  #posts {
    margin-bottom: 150px;
  }

  @media (min-width: 550px) {
    .indexIntro {
      h1 h2 {
        font-size: 2.6rem;
      }
    }
  }

  @media (min-width: 880px) {
    .indexIntro {
      /* margin-left: -10vw; */
      position: relative;
      left: 0px;
      max-width: 1000px;

      h1 h2 {
        font-size: 3rem;
      }

      .introSocialLinks {
        margin-bottom: 25px;
        li {
          height: 55px;
          width: 55px;
        }
        .icon {
          height: 25px;
        }
      }
    }
  }
`;

export default IndexPageWrapper;
