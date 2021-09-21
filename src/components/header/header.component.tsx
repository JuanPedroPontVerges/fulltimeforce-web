import React from "react";
import { Col, Row, Image } from "antd";
import { Header } from "antd/lib/layout/layout";
import Logo from "../../assets/githubLogo.png";
import "./header.scss";
export interface HeaderProps {
  exmaple?: string;
}

const HeaderComponent: React.FC<HeaderProps> = (props) => {
  return (
    <Header className={"header-container"}>
      <Row >
        <Col span={24} className={"first-col"}>
          <div className={"container-logo"}>
            <Image preview={false} className={"logo"} src={Logo} width={120} />
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
