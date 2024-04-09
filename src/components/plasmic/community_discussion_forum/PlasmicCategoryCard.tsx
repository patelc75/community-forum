// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4hP6nTqWZ38SWvbrCq9fFS
// Component: MMsVZ_x94zdu

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4hP6nTqWZ38SWvbrCq9fFS/projectcss
import sty from "./PlasmicCategoryCard.module.css"; // plasmic-import: MMsVZ_x94zdu/css

import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: btYymyh03PQf/icon

createPlasmicElementProxy;

export type PlasmicCategoryCard__VariantMembers = {};
export type PlasmicCategoryCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicCategoryCard__VariantsArgs;
export const PlasmicCategoryCard__VariantProps = new Array<VariantPropType>();

export type PlasmicCategoryCard__ArgsType = {
  currentItem?: any;
};
type ArgPropType = keyof PlasmicCategoryCard__ArgsType;
export const PlasmicCategoryCard__ArgProps = new Array<ArgPropType>(
  "currentItem"
);

export type PlasmicCategoryCard__OverridesType = {
  root?: Flex__<"a">;
  freeBox?: Flex__<"div">;
  h6?: Flex__<"h6">;
  text?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultCategoryCardProps {
  currentItem?: any;
  className?: string;
}

const $$ = {};

function PlasmicCategoryCard__RenderFunc(props: {
  variants: PlasmicCategoryCard__VariantsArgs;
  args: PlasmicCategoryCard__ArgsType;
  overrides: PlasmicCategoryCard__OverridesType;
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

  return (
    <Stack__
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      href={`/categories/${(() => {
        try {
          return $props.currentItem.id;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          }
          throw e;
        }
      })()}`}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <h6
          data-plasmic-name={"h6"}
          data-plasmic-override={overrides.h6}
          className={classNames(
            projectcss.all,
            projectcss.h6,
            projectcss.__wab_text,
            sty.h6
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.currentItem.name;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Name";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </h6>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"Jan 1, 2023 \u2013 June 30, 2023"}
        </div>
      </div>
      <Icon14Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h6", "text", "svg"],
  freeBox: ["freeBox", "h6", "text"],
  h6: ["h6"],
  text: ["text"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
  h6: "h6";
  text: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCategoryCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCategoryCard__VariantsArgs;
    args?: PlasmicCategoryCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCategoryCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCategoryCard__ArgsType,
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
          internalArgPropNames: PlasmicCategoryCard__ArgProps,
          internalVariantPropNames: PlasmicCategoryCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCategoryCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategoryCard";
  } else {
    func.displayName = `PlasmicCategoryCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCategoryCard = Object.assign(
  // Top-level PlasmicCategoryCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h6: makeNodeComponent("h6"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicCategoryCard
    internalVariantProps: PlasmicCategoryCard__VariantProps,
    internalArgProps: PlasmicCategoryCard__ArgProps
  }
);

export default PlasmicCategoryCard;
/* prettier-ignore-end */