import React from "react";
import { Col, Row, Typography } from "antd";
import { MainFragmentProps } from "./interfaces";
import "./main.scss";

import HeaderComponent from "../../components/header/header.component";
import { Content } from "antd/lib/layout/layout";
import CommitCard from "components/commit-card/commit-card.component";

export const MainFragment: React.FC<MainFragmentProps> = (props) => {
  // Render
  //   const { useController = useMainController } = props;
  //   const controller = useController();
  return (
    <div className={"main"}>
      <HeaderComponent></HeaderComponent>
      <Content>
        <Row>
          <Col xxl={24}>
            <Row>
              <Col xxl={24}>
                <Typography.Title className={"title"}>
                  Welcome to GitHub Commits Logger
                </Typography.Title>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xxl={24}>
                <CommitCard></CommitCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </div>
  );
};
