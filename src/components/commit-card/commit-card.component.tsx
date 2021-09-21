import React from "react";
import { Card } from "antd";

export interface CommitCardProps {
  id: string;
  name: string;
  message: string;
  avatarUrl: string;
  profileUrl: string;
}

const CommitCard: React.FC<CommitCardProps> = (props) => {
  return (
    <Card title="Card title" bordered={false}>
      Card content id: {props.id}
      name: {props.name}
      message: {props.message}
      avatarUrl: {props.avatarUrl}
      profileUrl: {props.profileUrl}
    </Card>
  );
};

export default CommitCard;
