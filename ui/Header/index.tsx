import React from "react";
import { Layout } from "antd";
import useThemeTokens from "@/services/hooks/useThemeTokens";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@ui/index";

const { Header } = Layout;

const PageHeader = () => {
  const { algorithm, colorBgElevated } = useThemeTokens();
  const { data: session } = useSession();
  return (
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
      {session ? (
        <Button type="primary" size="large" className="!w-32 !bg-red-400">
          Sign Out
        </Button>
      ) : (
        <Button
          type="primary"
          size="large"
          onClick={() => signOut()}
          className="!w-32"
        >
          Sign In
        </Button>
      )}
    </Header>
  );
};

export default PageHeader;
