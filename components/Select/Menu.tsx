import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1em;
`;

const Menu = styled.div``;

export default function Component({
  children,
  title,
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <Menu>
      <h1>{title}</h1>
      <Content>{children}</Content>
    </Menu>
  );
}
