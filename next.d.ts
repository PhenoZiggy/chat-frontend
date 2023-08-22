import { NextPage } from "next";

declare module "next" {
  interface NextPage {
    auth?: boolean;
  }
}
