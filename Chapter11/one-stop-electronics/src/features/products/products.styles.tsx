import styled from "styled-components"

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 0.5rem;
  row-gap: 0.5rem;
`

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`
