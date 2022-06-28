import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { PNGIcon, SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import { MinPara, MinTitle, ServiceWrapper } from "../LeftContentBlock/styles";

const RightBlock = ({
  title,
  content,
  button,
  section,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  
  const getImage = () =>{
    const imageSR = icon.split(".")[1]
    return imageSR
  }
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="top-right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>

             
              {/* <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper> */}
              <ServiceWrapper>
                <Row justify="space-between">
                  {/* List Of Section Items */}
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          {/* <SvgIcon src={item.icon} width="60px" height="60px" /> */}
                          <MinTitle>{t(item.title)}</MinTitle>
                          {/* <MinPara>{t(item.content)}</MinPara> */}
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            {
  getImage()  === "svg" ?
  <SvgIcon src={icon} width="100%" height="100%" />
        :
        <PNGIcon src={icon} width="100%" height="100%"/>

            }
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
