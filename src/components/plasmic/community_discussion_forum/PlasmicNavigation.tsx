// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4hP6nTqWZ38SWvbrCq9fFS
// Component: MYdiKwWBscr-

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import { AntdMenu } from "@plasmicpkgs/antd5/skinny/registerMenu";
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu";

import { useScreenVariants as useScreenVariantsipt9Py8JurHq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ipt9py8JURHq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4hP6nTqWZ38SWvbrCq9fFS/projectcss
import sty from "./PlasmicNavigation.module.css"; // plasmic-import: MYdiKwWBscr-/css

import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: mMKvFrMyYgkO/icon
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: c6utFLtOjup1/icon
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: 5nSAQZHQPhd4/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: 403lLc3RfREz/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: d86DD2Zonmij/icon

createPlasmicElementProxy;

export type PlasmicNavigation__VariantMembers = {};
export type PlasmicNavigation__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavigation__VariantsArgs;
export const PlasmicNavigation__VariantProps = new Array<VariantPropType>();

export type PlasmicNavigation__ArgsType = {};
type ArgPropType = keyof PlasmicNavigation__ArgsType;
export const PlasmicNavigation__ArgProps = new Array<ArgPropType>();

export type PlasmicNavigation__OverridesType = {
  root?: Flex__<typeof AntdMenu>;
};

export interface DefaultNavigationProps {
  className?: string;
}

const $$ = {};

function PlasmicNavigation__RenderFunc(props: {
  variants: PlasmicNavigation__VariantsArgs;
  args: PlasmicNavigation__ArgsType;
  overrides: PlasmicNavigation__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const dataSourcesCtx = usePlasmicDataSourceContext();

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsipt9Py8JurHq()
  });

  return (
    <AntdMenu
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      expandIcon={null}
      mode={
        hasVariant(globalVariants, "screen", "mobileOnly")
          ? "horizontal"
          : undefined
      }
    >
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__aCjf4)}
        key={"menuItemKey0"}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__pEQuu
          )}
        >
          {"StarterKit"}
        </div>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__el1ME)}
        key={"menuItemKey1"}
        onClick={async () => {
          const $steps = {};

          $steps["goToHomepage"] = true
            ? (() => {
                const actionArgs = {};
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    location.assign(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToHomepage"] != null &&
            typeof $steps["goToHomepage"] === "object" &&
            typeof $steps["goToHomepage"].then === "function"
          ) {
            $steps["goToHomepage"] = await $steps["goToHomepage"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__bH6Xq)}
        >
          <Icon13Icon
            className={classNames(projectcss.all, sty.svg__zh8N)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__b5C5W
            )}
          >
            {"Threads"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem___6Ectk)}
        key={"menuItemKey2"}
        onClick={async () => {
          const $steps = {};

          $steps["goToCategories"] = true
            ? (() => {
                const actionArgs = {};
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    location.assign(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToCategories"] != null &&
            typeof $steps["goToCategories"] === "object" &&
            typeof $steps["goToCategories"].then === "function"
          ) {
            $steps["goToCategories"] = await $steps["goToCategories"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__kQn8E)}
        >
          <Icon12Icon
            className={classNames(projectcss.all, sty.svg__aKgLc)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vlG44
            )}
          >
            {"Categories"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem___6TE4)}
        key={"menuItemKey4"}
        onClick={async () => {
          const $steps = {};

          $steps["goToNewThread"] = true
            ? (() => {
                const actionArgs = {};
                return (({ destination }) => {
                  if (
                    typeof destination === "string" &&
                    destination.startsWith("#")
                  ) {
                    document
                      .getElementById(destination.substr(1))
                      .scrollIntoView({ behavior: "smooth" });
                  } else {
                    location.assign(destination);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["goToNewThread"] != null &&
            typeof $steps["goToNewThread"] === "object" &&
            typeof $steps["goToNewThread"].then === "function"
          ) {
            $steps["goToNewThread"] = await $steps["goToNewThread"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__kj8G)}
        >
          <Icon10Icon
            className={classNames(projectcss.all, sty.svg___212P)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kcfA6
            )}
          >
            {"New thread"}
          </div>
        </Stack__>
      </AntdMenuItem>
      <AntdMenuItem
        className={classNames("__wab_instance", sty.menuItem__cill)}
        key={"menuItemKey5"}
        onClick={async () => {
          const $steps = {};

          $steps["logIn"] = true
            ? (() => {
                const actionArgs = {};
                return (async ({ continueTo }) => {
                  function uuidv4() {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
                      /[018]/g,
                      c =>
                        (
                          c ^
                          (crypto.getRandomValues(new Uint8Array(1))[0] &
                            (15 >> (c / 4)))
                        ).toString(16)
                    );
                  }

                  async function sha256(text) {
                    const encoder = new TextEncoder();
                    const data = encoder.encode(text);
                    const hashBuffer = await crypto.subtle.digest(
                      "SHA-256",
                      data
                    );
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    const hashHex = hashArray
                      .map(b => b.toString(16).padStart(2, "0"))
                      .join("");
                    return hashHex;
                  }

                  const state = JSON.stringify({
                    continueTo: continueTo || window.location.href
                  });
                  const code_verifier = uuidv4();
                  localStorage.setItem("code_verifier", code_verifier);
                  const code_challenge = await sha256(code_verifier);

                  const params = new URLSearchParams();
                  params.set("client_id", "4hP6nTqWZ38SWvbrCq9fFS");
                  params.set("state", state);
                  params.set("response_type", "code");
                  params.set("code_challenge", code_challenge);
                  params.set("code_challenge_method", "S256");
                  params.set("origin_host", window.location.host);

                  if (dataSourcesCtx?.authRedirectUri) {
                    params.set("redirect_uri", dataSourcesCtx.authRedirectUri);
                  }

                  if (window.__PLASMIC_AUTH_OVERRIDE) {
                    window.__PLASMIC_AUTH_OVERRIDE();
                  } else {
                    const url = `https://studio.plasmic.app/authorize?${params.toString()}`;
                    window.location.assign(url);
                  }
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["logIn"] != null &&
            typeof $steps["logIn"] === "object" &&
            typeof $steps["logIn"].then === "function"
          ) {
            $steps["logIn"] = await $steps["logIn"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9Y4KI)}
        >
          <Icon8Icon
            className={classNames(projectcss.all, sty.svg__uaCxA)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___9Ciz3
            )}
          >
            {"Log in"}
          </div>
        </Stack__>
      </AntdMenuItem>
      {(() => {
        try {
          return currentUser.isLoggedIn;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <AntdMenuItem
          className={classNames("__wab_instance", sty.menuItem__d1Cub)}
          key={"menuItemKey6"}
          onClick={async () => {
            const $steps = {};

            $steps["logOut"] = true
              ? (() => {
                  const actionArgs = {};
                  return (async ({ continueTo }) => {
                    try {
                      localStorage.removeItem("plasmic_user");
                      localStorage.removeItem("$user.4hP6nTqWZ38SWvbrCq9fFS");
                    } catch (e) {}

                    if (window.__PLASMIC_AUTH_OVERRIDE) {
                      window.__PLASMIC_AUTH_OVERRIDE();
                    } else {
                      window.location.assign(
                        continueTo || window.location.href
                      );
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["logOut"] != null &&
              typeof $steps["logOut"] === "object" &&
              typeof $steps["logOut"].then === "function"
            ) {
              $steps["logOut"] = await $steps["logOut"];
            }
          }}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ilBvn)}
          >
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__auePk)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pGi5O
              )}
            >
              {"Log out"}
            </div>
          </Stack__>
        </AntdMenuItem>
      ) : null}
    </AntdMenu>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof AntdMenu;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavigation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavigation__VariantsArgs;
    args?: PlasmicNavigation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavigation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavigation__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavigation__ArgProps,
          internalVariantPropNames: PlasmicNavigation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavigation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigation";
  } else {
    func.displayName = `PlasmicNavigation.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigation = Object.assign(
  // Top-level PlasmicNavigation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNavigation
    internalVariantProps: PlasmicNavigation__VariantProps,
    internalArgProps: PlasmicNavigation__ArgProps
  }
);

export default PlasmicNavigation;
/* prettier-ignore-end */