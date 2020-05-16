import styled from 'styled-components';

const BlogPageWrapper = styled.div`
  margin-top: 150px;
  width: 100%;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.bgColor};
  min-height: 80vh;

  h1 {
    font-size: 2.7rem;
  }
`;

export default BlogPageWrapper;