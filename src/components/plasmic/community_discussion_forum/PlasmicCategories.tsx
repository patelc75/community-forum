// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4hP6nTqWZ38SWvbrCq9fFS
// Component: zWDdFQKZm_jw

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageLayout from "../../PageLayout"; // plasmic-import: u5k9gpYL7hvi/component
import CategoryCard from "../../CategoryCard"; // plasmic-import: MMsVZ_x94zdu/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsipt9Py8JurHq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ipt9py8JURHq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4hP6nTqWZ38SWvbrCq9fFS/projectcss
import sty from "./PlasmicCategories.module.css"; // plasmic-import: zWDdFQKZm_jw/css

import image5Ujiw6QvRcOsg from "./images/image5.svg"; // plasmic-import: UJIW6qvRcOSG/picture

createPlasmicElementProxy;

export type PlasmicCategories__VariantMembers = {};
export type PlasmicCategories__VariantsArgs = {};
type VariantPropType = keyof PlasmicCategories__VariantsArgs;
export const PlasmicCategories__VariantProps = new Array<VariantPropType>();

export type PlasmicCategories__ArgsType = {};
type ArgPropType = keyof PlasmicCategories__ArgsType;
export const PlasmicCategories__ArgProps = new Array<ArgPropType>();

export type PlasmicCategories__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  img?: Flex__<typeof PlasmicImg__>;
  h1?: Flex__<"h1">;
  categoryCard?: Flex__<typeof CategoryCard>;
};

export interface DefaultCategoriesProps {
  className?: string;
}

const $$ = {};

function PlasmicCategories__RenderFunc(props: {
  variants: PlasmicCategories__VariantsArgs;
  args: PlasmicCategories__ArgsType;
  overrides: PlasmicCategories__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    categories: usePlasmicDataOp(() => {
      return {
        sourceId: "msPJThy8kgSaraQnjyXF2t",
        opId: "60131acb-2723-49fc-bf34-e61a9744f512",
        userArgs: {},
        cacheKey: `plasmic.$.60131acb-2723-49fc-bf34-e61a9744f512.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsipt9Py8JurHq()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <div className={classNames(projectcss.all, sty.freeBox__rByt)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__vHkh)}
                  >
                    <PlasmicImg__
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"32%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"32px"}
                      loading={"lazy"}
                      src={{
                        src: image5Ujiw6QvRcOsg,
                        fullWidth: 150,
                        fullHeight: 150,
                        aspectRatio: 1
                      }}
                    />

                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Categories"}
                    </h1>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__vAm7G)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.categories.data;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <CategoryCard
                          data-plasmic-name={"categoryCard"}
                          data-plasmic-override={overrides.categoryCard}
                          className={classNames(
                            "__wab_instance",
                            sty.categoryCard
                          )}
                          currentItem={currentItem}
                          key={currentIndex}
                        />
                      );
                    })}
                  </Stack__>
                </div>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "img", "h1", "categoryCard"],
  pageLayout: ["pageLayout", "img", "h1", "categoryCard"],
  img: ["img"],
  h1: ["h1"],
  categoryCard: ["categoryCard"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  img: typeof PlasmicImg__;
  h1: "h1";
  categoryCard: typeof CategoryCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCategories__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCategories__VariantsArgs;
    args?: PlasmicCategories__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCategories__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCategories__ArgsType,
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
          internalArgPropNames: PlasmicCategories__ArgProps,
          internalVariantPropNames: PlasmicCategories__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCategories__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategories";
  } else {
    func.displayName = `PlasmicCategories.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={null}
      appId={"4hP6nTqWZ38SWvbrCq9fFS"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "4hP6nTqWZ38SWvbrCq9fFS"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicCategories = Object.assign(
  // Top-level PlasmicCategories renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    categoryCard: makeNodeComponent("categoryCard"),

    // Metadata about props expected for PlasmicCategories
    internalVariantProps: PlasmicCategories__VariantProps,
    internalArgProps: PlasmicCategories__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Categories - Community Forum",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCategories;
/* prettier-ignore-end */
