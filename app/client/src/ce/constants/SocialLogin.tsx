import {
  GoogleOAuthURL,
  GithubOAuthURL,
  KeycloakOAuthURL,
} from "./ApiConstants";

import GithubLogo from "assets/images/Github.png";
import GoogleLogo from "assets/images/Google.png";
import KeycloakLogo from "assets/images/Keycloak.png";
export type SocialLoginButtonProps = {
  url: string;
  name: string;
  logo: string;
  label?: string;
};

export const GoogleSocialLoginButtonProps: SocialLoginButtonProps = {
  url: GoogleOAuthURL,
  name: "Google",
  logo: GoogleLogo,
};

export const GithubSocialLoginButtonProps: SocialLoginButtonProps = {
  url: GithubOAuthURL,
  name: "Github",
  logo: GithubLogo,
};

export const KeycloakSocialLoginButtonProps: SocialLoginButtonProps = {
  url: KeycloakOAuthURL,
  name: "Keycloak",
  logo: KeycloakLogo,
};

export const SocialLoginButtonPropsList: Record<
  string,
  SocialLoginButtonProps
> = {
  google: GoogleSocialLoginButtonProps,
  github: GithubSocialLoginButtonProps,
  keycloak: KeycloakSocialLoginButtonProps,
};

export type SocialLoginType = keyof typeof SocialLoginButtonPropsList;
