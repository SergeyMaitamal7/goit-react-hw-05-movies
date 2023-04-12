import styled from 'styled-components';

export const CardWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 106px);
  gap: 16px;
  list-style-type: none;
`;
export const CardMovie = styled.li`
  padding: 5px;
`;
export const Image = styled.img``;
export const Name = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
