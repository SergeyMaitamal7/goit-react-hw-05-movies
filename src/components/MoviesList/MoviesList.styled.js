import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 16px;
  list-style-type: none;
  text-decoration: none;
`;

export const CardWrapper = styled.div`
  position: relative;
  transition: 0.5s linear;
  border-radius: 8px;
  cursor: pointer;
`;

export const MoviesName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

export const Image = styled.img`
  display: block;
  width: 280px;
  height: 360px;
  border-radius: 8px;
  margin-bottom: 10px;
`;
