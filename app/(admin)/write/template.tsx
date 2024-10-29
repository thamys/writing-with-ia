"use client";
import { Layout } from "antd";
import React, { PropsWithChildren } from "react";

const WritingTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <>
        <Layout.Header>Header</Layout.Header>
        <Layout>
          <>
            <Layout.Content>{children}</Layout.Content>
            <Layout.Sider width="25%">Sider</Layout.Sider>
          </>
        </Layout>
        <Layout.Footer>Footer</Layout.Footer>
      </>
    </Layout>
  );
};

export default WritingTemplate;
