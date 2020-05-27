import React from 'react';
import styled from 'styled-components';

const HamburgerButton = styled.button`
.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  color: white;
  background-color: #333;
  margin: 6px 0;
  outline: none;
}

  outline: none;
  position: fixed;
  top: 19px;
  right: 15px;
  z-index: 100;
  &::selection {
    outline: none;
    border: 0;
  }
  .hamburger {
    outline: none;
    display: inline-block;
    cursor: pointer;
    text-transform: none;
    background-color: white;
    border: 0;
    margin: 0;
    margin-top: 5px;
    padding: 0;
    overflow: visible;
  }
 
  
  }

`;

const Hamburger = ({ mobileNavIsOpen, action }) => {


  return (

    <HamburgerButton
      className={`hamburger  ${mobileNavIsOpen &&
        'is-active'}`}
      onClick={action}
    >
        <div class="bar1"></div>
      <div class="bar2"></div>
     <div class="bar3"></div>

    </HamburgerButton>
  );
};

export default Hamburger;