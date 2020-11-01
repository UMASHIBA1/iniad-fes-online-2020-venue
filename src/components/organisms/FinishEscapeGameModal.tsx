import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { blackColor, lightBlueColor } from "../../constants/colors";
import { lightRedText } from "../../cssProps/colors";
import { radiusMd } from "../../cssProps/radius";
import {
  busiQuestion2,
  busiQuestion4,
  civilQuestion2,
  civilQuestion4,
  designQuestion2,
  designQuestion4,
  engQuestion2,
  engQuestion4,
  question1,
  question3,
} from "../../mockDatas/escapeGameQuestionDatas";
import { useTypedSelector } from "../../redux/store";
import ViewingProp from "../../typings/ViewingProp";
import isCorrectUserAnswer from "../../utils/escapeGame/isCorrectUserAnswer";
import Button from "../atoms/Button/Button";
import H2 from "../atoms/H2";
import Modal from "../atoms/Modal/Modal";
import Title from "../atoms/Title";
import {restartGame} from "../../redux/modules/escapeGameUserInfo";
import breakPoints from "../../constants/breakPoints";

interface Props {
  isShow: boolean;
  onClose: () => void;
  viewingScreen?: ViewingProp;
  isMobile: boolean;
}

const controllIds = {
  restartButton:"finish-escapegame-modal-restart-button"
}

function FinishEscapeGameModal({
  isShow,
  onClose,
  viewingScreen,
  isMobile,
}: Props) {
  const isCorrectQuestions = useIsCorrectQuestions();
  const dispatch = useDispatch();

  const checkRestartIsOk = () => {
    const isOk = window.confirm("リスタートすると一年生からやり直しになります。リスタートしてもいいですか？");
    if(isOk) {
      dispatch(restartGame());
    }
  }

  return (
    <Modal
      isShow={isShow}
      onClose={onClose}
      viewing={viewingScreen}
      isMobile={isMobile}
    >
      <Wrapper>
        <TitleWrapper>
          <Title
            title={
              isCorrectQuestions.filter((result) => result).length >= 3
                ? "卒業おめでとう！糖朝に壁紙配布リンクが出現したよ!"
                : "やり直し！3問解ければ卒業できるよ。。。!"
            }
          />
        </TitleWrapper>
        <JudgeBoxWrapper>
          {isCorrectQuestions.map((isCorrectThis, i) => {
            return (
              <JudgeBox key={i}>
                <H2 color={blackColor}>{i + 1}年の問題</H2>
                {isCorrectThis ? (
                  <Correct>正解</Correct>
                ) : (
                  <InCorrect>不正解</InCorrect>
                )}
              </JudgeBox>
            );
          })}
        </JudgeBoxWrapper>
        <Button
        text="脱出ゲームをリスタート"
        mode="red"
        onClick={checkRestartIsOk}
        dataControllId={controllIds.restartButton}
        />
      </Wrapper>
    </Modal>
  );
}

const Answer = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Correct = styled(Answer)`
  ${lightRedText}
`;

const InCorrect = styled(Answer)`
  color: ${lightBlueColor};
`;

const JudgeBox = styled.div`
  ${radiusMd}
  border: 1px solid ${blackColor};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`;

const JudgeBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;
  justify-content: center;
  width: 100%;
  min-height: 240px;
  padding: 16px;

  ${breakPoints.downSm} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

`;

const TitleWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 64px auto;
  justify-items: center;
  width: 100%;
  max-height: 70vh;

  >* {
    &[data-controll-id=${controllIds.restartButton}] {
      margin: 16px;
    }
  }
`;

const useIsCorrectQuestions = () => {
  const [isCorrectQ1, changeIsCorrectQ1] = useState(false);
  const [isCorrectQ2, changeIsCorrectQ2] = useState(false);
  const [isCorrectQ3, changeIsCorrectQ3] = useState(false);
  const [isCorrectQ4, changeIsCorrectQ4] = useState(false);
  let {
    course,
    userAnswer: { q1, q2, q3, q4 },
  } = useTypedSelector((state) => state.escapeGameUserInfo);

  useEffect(() => {
    changeIsCorrectQ1(isCorrectUserAnswer(question1, q1));
    changeIsCorrectQ3(isCorrectUserAnswer(question3, q3));
    if (course === "engineer") {
      changeIsCorrectQ2(isCorrectUserAnswer(engQuestion2, q2));
      changeIsCorrectQ4(isCorrectUserAnswer(engQuestion4, q4));
    } else if (course === "design") {
      changeIsCorrectQ2(isCorrectUserAnswer(designQuestion2, q2));
      changeIsCorrectQ4(isCorrectUserAnswer(designQuestion4, q4));
    } else if (course === "business") {
      changeIsCorrectQ2(isCorrectUserAnswer(busiQuestion2, q2));
      changeIsCorrectQ4(isCorrectUserAnswer(busiQuestion4, q4));
    } else if (course === "civil") {
      changeIsCorrectQ2(isCorrectUserAnswer(civilQuestion2, q2));
      changeIsCorrectQ4(isCorrectUserAnswer(civilQuestion4, q4));
    }
  }, [course, q1, q2, q3, q4]);

  return [isCorrectQ1, isCorrectQ2, isCorrectQ3, isCorrectQ4];
};

export default FinishEscapeGameModal;
