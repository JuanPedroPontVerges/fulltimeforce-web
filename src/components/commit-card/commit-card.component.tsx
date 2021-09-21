import React from "react";
import { Card } from "antd";

export interface CommitCardProps {
  exmaple?: string;
}

const CommitCard: React.FC<CommitCardProps> = (props) => {
  return (
    <Card title="Card title" bordered={false}>
      Card content
    </Card>
  );
};

export default CommitCard;
