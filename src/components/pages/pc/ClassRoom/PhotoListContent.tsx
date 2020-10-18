import React from "react";
import styled from "styled-components";
import Description from "../../../atoms/Description";
import Title from "../../../atoms/Title";


function PhotoListContent() {
  return(
    <Wrapper>
      PhotoListContent
      <Title title="ID/graph" />
      <Description description="しゃしんたくさんとったのでみてね！ by ID/graph" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default PhotoListContent;
