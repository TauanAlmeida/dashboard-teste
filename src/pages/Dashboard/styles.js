import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  background-color: ${(props) => shade(0.1, props.theme.colors.background)};
`;
