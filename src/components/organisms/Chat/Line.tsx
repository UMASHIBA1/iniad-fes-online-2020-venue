import React from "react";
import styled from "styled-components";
import { blackColor } from "../../../constants/colors";
import { blackText } from "../../../cssProps/colors";
import ChatType from "../../../typings/ChatType";

function Line({is_admin, is_circle_staff, text, time}: ChatType) {
  return (
  <Wrapper>
    <PeopleRole>
      {createPeopleRole({is_admin, is_circle_staff})}
    </PeopleRole>
    {text}
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
  border: solid ${blackColor};
  border-width: 1px 0;
`;

const PeopleRole = styled.div`
  ${blackText}
  font-size: 14px;
  margin: 4px 12px 4px 6px;
`

const createPeopleRole = ({is_admin, is_circle_staff}: Pick<ChatType, "is_admin" | "is_circle_staff">) => {
  if(is_admin) {
    return "管理者";
  }else if(is_circle_staff){
    return "サークルスタッフ";
  }else {
    return "";
  }
}

export default Line;
