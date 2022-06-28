import { Row, Col, Divider } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, ListDiv } from "./styles";
import { CheckOutlined } from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import { PNGIcon } from "../../common/SvgIcon";
interface MiddleBlockProps {
  title: string;
  content: string;
  smallContent: string;
  button: string;
  t: any;
}

const MiddleBlock = ({
  title,
  content,
  button,
  t,
  smallContent,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Row>
        <Slide direction="left">
          <Row justify="center" align="middle">
            <ContentWrapper id="about" style={{ maxWidth: "100%" }}>
              <h6>{title}</h6>
              <p>{smallContent + content}</p>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </ContentWrapper>
          </Row>
        </Slide>
        <Slide direction="right">
          <Row>
            <Divider style={{ marginTop: 60 }} orientation="center">
              <h6 style={{ fontSize: 25 }}>Solutions</h6>
            </Divider>
            <Row style={{}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col flex="1 0 25%" className="gutter-row columnWithBorder">
                <div style={{ padding: 8 }}>
                  <h6 style={{ fontSize: 18 }}>Vision</h6>
                  <p style={{textAlign:"left",fontSize:16 }}>
                    Given our professional expertise in technology, education,
                    hospitality and projects management, we guide and support
                    our clients with key strategic recommendations for business
                    development and execution of growth strategies across
                    emerging country economies.
                  </p>
                  <PNGIcon src={"Vision2.png"} height="100%" width="100%" />
                </div>

              </Col>
              <Col flex="1 0 25%" className="gutter-row columnWithBorder">
                <div style={{ padding: 8 }}>
                  <h6 style={{ fontSize: 18 }}>Mission</h6>
                  <p style={{textAlign:"left", fontSize: 17,marginBottom:90 }}>
                    To deliver our clients with tailored expertise in strategic
                    fields providing creative approach to accelerate sustainable
                    and agile business growth.
                  </p>
                  <PNGIcon src={"Mission.png"} height="100%" width="100%" />
                </div>
              </Col>
              <Col style={{height:300}} flex="1 0 25%" className="gutter-row columnWithBorder">
                <div style={{ padding: 8 }}>
                  <h6 style={{ fontSize: 18 }}>Value</h6>


                  <p style={{ margin: "auto",textAlign:"left",fontSize:17,marginBottom:10 }}>
                      Honesty and Integrity,     Safety and Quality,  Professional and Technical Excellence,  Commitment to Highest Standards,  Cooperative Team Environment,  Respect for our Employees,  Clients and Partners, Long-Term Relation





                    </p>
                  {/* <ListDiv
                    style={{
display: "inline-flex",
                    }}
                  >
                    <p style={{ margin: "auto", paddingLeft: 10 }}>
                      Honesty and Integrity
                    </p>
                  </ListDiv>
                  <ListDiv>
                    <p style={{ margin: "auto", paddingLeft: 10 }}>
                      Safety and Quality
                    </p>
                  </ListDiv>
                  <ListDiv>

                    <p style={{ margin: "auto", paddingLeft: 10 }}>
                      Professional and Technical Excellence
                    </p>
                  </ListDiv>
                  <ListDiv>

                    <p style={{ margin: "auto", paddingLeft: 10 }}>
                      Commitment to Highest Standards
                    </p>
                  </ListDiv>
                  <ListDiv>
                    <CheckOutlined />

                    <p style={{ margin: "auto", paddingLeft: 10 }}>
                      Cooperative Team Environment
                    </p>
                  </ListDiv>
                  <ListDiv>

                    <p style={{ margin: "auto", paddingLeft: 10 }}>
                      Respect for our Employees, Clients and Partners
                    </p>
                  </ListDiv>
                  <ListDiv>

                    <p style={{ margin: "auto", paddingLeft: 10 }}>
                      Long-Term Relatio
                    </p>
                    
                  </ListDiv> */}
                  <PNGIcon src={"Values.png"} height="100%" width="100%" />

                </div>
              </Col>
            </Row>
          </Row>
        </Slide>
      </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
