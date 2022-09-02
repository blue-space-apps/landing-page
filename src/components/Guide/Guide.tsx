import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';
import { FormattedMessage } from 'umi';

interface Props {
  name: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = () => {
  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          <FormattedMessage id="home.welcome" />{' '}
          <strong>
            {' '}
            <FormattedMessage id="title" />
          </strong>{' '}
          ！
        </Typography.Title>
      </Row>
      <Row className={styles.title}>
        <Typography.Paragraph>
          <FormattedMessage id="home.description" />
        </Typography.Paragraph>
      </Row>
    </Layout>
  );
};

export default Guide;
