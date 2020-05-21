import styled from 'styled-components';

const BlogPageWrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;
  width: 100%;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.bgColor};
  min-height: 80vh;

  h1 { 
    margin-left: 25px;
    color: #343a40;
    text-decoration: underline;
    font-size: 3.2rem;
  }
`;

export default BlogPageWrapper;