import { Icon } from "@components/ui/Icon";
import { styled } from "styled-components";

const AnimatedIcon = styled(Icon)`
  position: absolute;
  top: 36.5%;
  left: 46.5%;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

interface LoaderProps {
  size?: `${number}px`;
  color?: string;
}

const Loader = ({ size = "50px", color = "#303030" }: LoaderProps) => {
  return <AnimatedIcon name="spinner" size={size} color={color} />;
};

export default Loader;
