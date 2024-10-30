'use client';
import React, { PropsWithChildren } from "react";
import { Button, Flex, Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Image from "next/image";
import useThemeTokens from "@/services/hooks/useThemeTokens";
import Link from "next/link";

const UserLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { algorithm, colorBgBase, colorBgElevated } = useThemeTokens();
  return (
    <Layout className="h-full !min-h-screen">
      <Header
        className="flex items-center justify-between !py-2 !h-24"
        style={{
          backgroundColor: colorBgElevated,
        }}
      >
        <Image
          className="h-full w-auto"
          src={
            algorithm === "dark" ? "/images/logo-dark.svg" : "/images/logo.svg"
          }
          alt="Next.js logo"
          width={634}
          height={183}
          priority
        />
        <Flex gap={16}>
          <Button type="primary" size="large" className="!w-32">
            Login
          </Button>
          <Button type="default" size="large" className="!w-32">
            Register
          </Button>
        </Flex>
      </Header>
      <Content className="flex flex-col justify-center">{children}</Content>
      <Footer
        className="text-center"
        style={{
          backgroundColor: colorBgBase,
        }}
      >
        <Typography.Text>
          © 2024 Created by <Link href="http://thamys.dev">Thamys</Link>
        </Typography.Text>
      </Footer>
    </Layout>
  );
};

export default UserLayout;
