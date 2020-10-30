import React, { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { pcLinks } from "../../../constants/links";
import centerPutChild from "../../../cssProps/centerPutChild";
import useDidMount from "../../../hooks/useDidMount/useDidMount";
import { useTypedSelector } from "../../../redux/store";
import WelcomeModal from "../../organisms/WelcomeModal";

interface Props {
  children: ReactNode;
  bgImg: string;
}

function RoomWrapper({children, bgImg}: Props) {
  const isFirstVisit = useTypedSelector((state) => state.isFirstVisit);
  const history = useHistory();

  useDidMount(() => {
    if(isFirstVisit) {
      // history.push(pcLinks.entrance); FIXME: デバッグ用にエントランスへの強制移動する処理をコメントアウト
    }
  })

  return(
    <Wrapper>
      <RoomWrapperMain bgImg={bgImg}>
        {children}
      </RoomWrapperMain>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${centerPutChild}
  background-color: #000000;
  width: 100vw;
  height: 100vh;
`

const RoomWrapperMain = styled.div<Pick<Props, "bgImg">>`
  width: 100vw;
  height: calc(1/2 * 100vw);
  position: relative;
  top: 0;
  left: 0;
  background-image: url(${({bgImg}) => bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default RoomWrapper;
