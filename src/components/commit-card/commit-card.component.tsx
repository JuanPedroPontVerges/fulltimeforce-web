import React from "react";
import { Card, Image, Typography } from "antd";
import "./commit-card.scss";
import dayjs from "dayjs";

export interface CommitCardProps {
  id: string;
  name: string;
  message: string;
  avatarUrl: string;
  profileUrl: string;
  date: Date;
}

const CommitCard: React.FC<CommitCardProps> = (props) => {
  return (
    <Card className={"card-container"} title={props.name} bordered={false}>
      <div className="info-box">
        <Typography.Title level={5}>Message: </Typography.Title>
        <Typography.Paragraph>{props.message}</Typography.Paragraph>
      </div>
      <div className="info-box">
        <Typography.Title level={5}>Profile: </Typography.Title>
        <a target="blank" href={`https://github.com/${props.name}`}>
          <Typography.Link>{props.name}</Typography.Link>
        </a>
      </div>
      <div className="info-box">
        <Typography.Title level={5}>Message: </Typography.Title>
        <Typography.Paragraph>{props.message}</Typography.Paragraph>
      </div>
      <div className="info-box">
        <Typography.Title level={5}>Date: </Typography.Title>
        <Typography.Paragraph>{dayjs(props.date).format('DD/MM/YYYY')}</Typography.Paragraph>
      </div>
      <Image src={props.avatarUrl} preview={false}></Image>
    </Card>
  );
};

export default CommitCard;
