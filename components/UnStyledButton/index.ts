import styled from 'styled-components'

export default styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;

  &:focus {
    outline: 2px auto blue;
    outline-offset: 2px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`
