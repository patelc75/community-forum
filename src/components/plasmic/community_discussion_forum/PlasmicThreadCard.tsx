// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4hP6nTqWZ38SWvbrCq9fFS
// Component: 7_rDodCsxmqm

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
import sty from "./PlasmicThreadCard.module.css"; // plasmic-import: 7_rDodCsxmqm/css

createPlasmicElementProxy;

export type PlasmicThreadCard__VariantMembers = {};
export type PlasmicThreadCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicThreadCard__VariantsArgs;
export const PlasmicThreadCard__VariantProps = new Array<VariantPropType>();

export type PlasmicThreadCard__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  destination?: string;
};
type ArgPropType = keyof PlasmicThreadCard__ArgsType;
export const PlasmicThreadCard__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "destination"
);

export type PlasmicThreadCard__OverridesType = {
  root?: Flex__<"a">;
  h5?: Flex__<"h5">;
};

export interface DefaultThreadCardProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  destination?: string;
  className?: string;
}

const $$ = {};

function PlasmicThreadCard__RenderFunc(props: {
  variants: PlasmicThreadCard__VariantsArgs;
  args: PlasmicThreadCard__ArgsType;
  overrides: PlasmicThreadCard__OverridesType;
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
      href={args.destination}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fyCbd)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__jUDrJ)}>
          <h5
            data-plasmic-name={"h5"}
            data-plasmic-override={overrides.h5}
            className={classNames(projectcss.all, projectcss.h5, sty.h5)}
          >
            {renderPlasmicSlot({
              defaultContents: "Title",
              value: args.children
            })}
          </h5>
          {renderPlasmicSlot({
            defaultContents: "Time",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h5"],
  h5: ["h5"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  h5: "h5";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicThreadCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicThreadCard__VariantsArgs;
    args?: PlasmicThreadCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicThreadCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicThreadCard__ArgsType,
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
          internalArgPropNames: PlasmicThreadCard__ArgProps,
          internalVariantPropNames: PlasmicThreadCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicThreadCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicThreadCard";
  } else {
    func.displayName = `PlasmicThreadCard.${nodeName}`;
  }
  return func;
}

export const PlasmicThreadCard = Object.assign(
  // Top-level PlasmicThreadCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h5: makeNodeComponent("h5"),

    // Metadata about props expected for PlasmicThreadCard
    internalVariantProps: PlasmicThreadCard__VariantProps,
    internalArgProps: PlasmicThreadCard__ArgProps
  }
);

export default PlasmicThreadCard;
/* prettier-ignore-end */