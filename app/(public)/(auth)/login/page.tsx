"use client";
import React from "react";
import { Button, Flex, Typography } from "antd";
import Link from "next/link";
import { getAuthProviders } from "./action";
import { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";

export default function Page() {
  const [providers, setProviders] = React.useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  React.useEffect(() => {
    getAuthProviders().then((res) => setProviders(res));
  }, []);

  return (
    <>
      <div>
        <Typography.Title level={2} className="text-center">
          Sign In
        </Typography.Title>

        <Typography.Text className="text-center">
          Sign in with your social account
        </Typography.Text>
      </div>
      <Flex gap={16} className="justify-center">
        {providers &&
          Object.values(providers).map((provider) => (
            <Link key={provider.id} href={provider.signinUrl}>
              <Button type="primary" className="w-32">
                {provider.name}
              </Button>
            </Link>
          ))}
      </Flex>
    </>
  );
}
