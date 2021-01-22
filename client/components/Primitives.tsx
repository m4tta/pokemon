import styled from "styled-components";

// The ever grow MAGIC BOX
export const Box = styled.div`
  ${({ position }) =>
    position &&
    `
    position: ${position};
    `}
  ${({ top }) =>
    top &&
    `
    top: ${top};
    `}
  ${({ right }) =>
    right &&
    `
    right: ${right};
    `}
  ${({ bottom }) =>
    bottom &&
    `
    bottom: ${bottom};
    `}
  ${({ left }) =>
    left &&
    `
    left: ${left};
    `}
  ${({ width }) =>
    width &&
    `
    width: ${width};
    `}
  ${({ height }) =>
    height &&
    `
    height: ${height};
    `}
  ${({ padding }) =>
    padding &&
    `
    padding: ${padding};
    `}
  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
    `}
  ${({ bgColor }) =>
    bgColor &&
    `
    background-color: ${bgColor};
    `}
  ${({ color }) =>
    color &&
    `
    color: ${color};
    `}
  ${({ borderWidth }) =>
    borderWidth &&
    `
    border-width: ${borderWidth};
    `}
  ${({ borderStyle }) =>
    borderStyle &&
    `
    border-style: ${borderStyle};
    `}
  ${({ borderColor }) =>
    borderColor &&
    `
    border-color: ${borderColor};
    `}
  ${({ borderRadius }) =>
    borderRadius &&
    `
    border-radius: ${borderRadius};
    `}
  ${({ boxShadow }) =>
    boxShadow &&
    `
    box-shadow: ${boxShadow};
    `}
  ${({ cursor }) =>
    cursor &&
    `
    cursor: ${cursor};
    `}
  ${({ overflowY }) =>
    overflowY &&
    `
    overflow-y: ${overflowY};
    `}
  ${({ overflowX }) =>
    overflowX &&
    `
    overflow-x: ${overflowX};
    `}
`;

export const Flex = styled(Box)`
  display: flex;
  ${({ flex }) =>
    flex &&
    `
    flex: ${flex};
    `}
  ${({ flexDirection }) =>
    flexDirection &&
    `
    flex-direction: ${flexDirection};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    `
    justify-content: ${justifyContent};
    `}
  ${({ alignItems }) =>
    alignItems &&
    `
    align-items: ${alignItems};
    `}
`;

export const Stack = styled(Flex)`
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  ${({ spacing, vertical }) => {
    if (spacing) {
      const side = vertical ? "top" : "left";
      return `
      > * + * {
       margin-${side}: ${spacing}
      }
      `;
    }
  }}
`;

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  ${({ gap }) =>
    gap &&
    `
  grid-gap: ${gap};
  `}
`;

export const Text = styled(Box)`
  ${({ fontWeight }) =>
    fontWeight &&
    `
    font-weight: ${fontWeight};
    `}

  ${({ fontSize }) =>
    fontSize &&
    `
    font-size: ${fontSize};
    `}
  ${({ textAlign }) =>
    textAlign &&
    `
    text-align: ${textAlign};
    `}
  ${({ textTransform }) =>
    textTransform &&
    `
    text-transform: ${textTransform};
    `}
  ${({ whiteSpace }) =>
    whiteSpace &&
    `
    white-space: ${whiteSpace};
    `}
0
`;

export const Center = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// TODO: maintain aspect ratio based on either a max width or height
export const Image = styled.img`
  display: block;
  height: auto;
  ${({ maxHeight }) =>
    maxHeight &&
    `
  max-height: ${maxHeight};
  `}
  ${({ width }) =>
    width &&
    `
  width: ${width || "100px"};
  `}
`;

export const Input = styled.input`
  max-height: 31px;
  background-color: #eeeeee;
  border: none;
  ${({ width }) =>
    width &&
    `
    width: ${width};
    `}
  ${({ height }) =>
    height &&
    `
    height: ${height};
    `}
  ${({ padding }) =>
    padding &&
    `
    padding: ${padding};
    `}
  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
    `}
`;

export const Select = styled.select`
  max-height: 31px;
  box-sizing: border-box;
  background-color: #eeeeee;
  border: none;
  ${({ width }) =>
    width &&
    `
    width: ${width};
    `}
  ${({ height }) =>
    height &&
    `
    height: ${height};
    `}
  ${({ padding }) =>
    padding &&
    `
    padding: ${padding};
    `}
  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
    `}
`;
