import React from "react";
import styled from "styled-components";
import { gray } from "../../../constants/colors";
import centerPutChild from "../../../cssProps/centerPutChild";
import { blackText, deepBlueText } from "../../../cssProps/colors";
import ChatType from "../../../typings/ChatType";
import dayToStr from "../../../utils/DayToStr";

function Line({
  is_admin,
  is_circle_staff,
  text,
  time: { iso8601 },
}: ChatType) {
  return (
    <Wrapper>
      <PeopleRole>{createPeopleRole({ is_admin, is_circle_staff })}</PeopleRole>
      <TextWrapper>{text}</TextWrapper>
      <TimeText>{dayToStr(iso8601)}</TimeText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 14px;
  overflow-wrap: normal;
  border: solid ${gray};
  border-width: 1px 0;
  padding: 4px;
`;

const PeopleRole = styled.div`
  ${deepBlueText}
  font-size: 14px;
  ${centerPutChild}
`;

const TextWrapper = styled.div`
  ${blackText}
  font-size: 14px;
  padding-left: 4px;
  ${centerPutChild}
`;

const TimeText = styled.div`
  color: ${gray};
  font-size: 11px;
  padding: 2px 4px 0 0;
  ${centerPutChild}
`;

const createPeopleRole = ({
  is_admin,
  is_circle_staff,
}: Pick<ChatType, "is_admin" | "is_circle_staff">) => {
  if (is_admin) {
    return "管理者: ";
  } else if (is_circle_staff) {
    return "スタッフ: ";
  } else {
    return "";
  }
};

export default Line;
