import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "30c9a471-cd30-4647-9642-0d955ea547f5"
});

export default withCivicAuth(nextConfig)