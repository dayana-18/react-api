import { FaStar,FaTrash } from "react-icons/fa";
import styled from "styled-components";

export const Icon = styled(FaStar)`
  color: rgb(192, 132, 142);
  @media screen and (height: 48px; ) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  &:hover {
    color: rgb(84, 123, 175)
  }
  width: 50px;
`;