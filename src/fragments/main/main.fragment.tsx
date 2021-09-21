import React from "react";
import { Col, Row, Typography, List, Input } from "antd";
import { MainFragmentProps } from "./interfaces";
import "./main.scss";

import HeaderComponent from "../../components/header/header.component";
import { Content } from "antd/lib/layout/layout";
import CommitCard from "components/commit-card/commit-card.component";
import { useMainController } from "fragments/main/main.controller";

export const MainFragment: React.FC<MainFragmentProps> = (props) => {
  // Render
  const { useController = useMainController } = props;
  const controller = useController();
  return (
    <div className={"main"}>
      <HeaderComponent></HeaderComponent>
      <Content>
        <Row>
          <Col xxl={24}>
            <Row align='middle'>
              <Col>
                <Typography.Title className={"title"}>
                  Welcome to GitHub Commits Logger
                </Typography.Title>
              </Col>
            </Row>
            <Row>
              <Col xs={24} xxl={24}>
                <List
                  pagination={{ defaultPageSize: 6 }}
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                  }}
                  className={"list"}
                  dataSource={controller.commits}
                  renderItem={(item) => (
                    <List.Item>
                      <CommitCard {...item}></CommitCard>
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </div>
  );
};
