/* eslint-disable spellcheck/spell-checker */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    {
      type: "html",
      value: `<div class='sidebar_top_wrapper'>
                <div class='sidebar_top'>
                  <div class='sidebar_top_logo is-dark'>
                    <a target="_blank" rel="noopener noreferrer" href="/">
                      <img src="/logo/site-logos/marketing-dark.svg" alt='' />
                    </a>
                    <a href="/">
                      <img src="/logo/site-logos/docs-dark.svg" alt='' />
                    </a>
                  </div>
                  <div class='sidebar_top_logo is-light'>
                    <a target="_blank" rel="noopener noreferrer" href="/">
                      <img src="/logo/site-logos/marketing-light.svg" alt='' />
                    </a>
                    <a href="/">
                      <img src="/logo/site-logos/docs-light.svg" alt='' />
                    </a>
                  </div>
                </div>

                <div class='sidebar_bottom'>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.permit.io/">
                    <div>
                      <img src="/sidebar-top-icons/normal-icons/marketing-home.svg" alt='' />
                      <img src="/sidebar-top-icons/hover-icons/marketing-home.svg" alt='' />
                    </div>
                    Permit Homepage
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://api.permit.io/v2/redoc">
                    <div>
                      <img src="/sidebar-top-icons/normal-icons/api.svg" alt='' />
                      <img src="/sidebar-top-icons/hover-icons/api.svg" alt='' />
                    </div>
                    API Reference
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://permit-io.slack.com/join/shared_invite/zt-nz6yjgnp-RlP9rtOPwO0n0aH_vLbmBQ#/shared-invite/email">
                    <div>
                      <img src="/sidebar-top-icons/normal-icons/slack.svg" alt='' />
                      <img src="/sidebar-top-icons/hover-icons/slack.svg" alt='' />
                    </div>
                    Slack Community
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/permitio">
                    <div>
                      <img src="/sidebar-top-icons/normal-icons/github.svg" alt='' />
                      <img src="/sidebar-top-icons/hover-icons/github.svg" alt='' />
                    </div>
                    GitHub
                  </a>
                </div>
              </div>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "doc",
      id: "home",
      className: "hidden",
    },
    {
      type: "doc",
      id: "quickstart",
    },
    {
      type: "category",
      label: "Start Quickly",
      className: "category-as-header",
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Walkthroughs",
          items: [
            "overview/connecting-your-app",
            {
              type: "category",
              label: "Manage Your Account",
              items: [
                {
                  type: "autogenerated",
                  dirName: "manage-your-account",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Examples",
          link: {
            type: "generated-index",
            slug: "/category/learn-by-example",
            title: "Learn by Example",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "modeling",
            },
          ],
        },
        {
          type: "category",
          label: "Best Practices",
          link: {
            type: "doc",
            id: "overview/best-practices",
          },
          items: ["how-to/ownership", "overview/how-does-it-work", "concepts/multitenancy"],
        },
      ],
    },
    {
      type: "category",
      label: "Model Policies",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        {
          type: "category",
          label: "Roles (RBAC)",
          link: {
            type: "doc",
            id: "how-to/build-policies/rbac/overview",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "how-to/build-policies/rbac",
            },
            {
              type: "category",
              label: "API Examples",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/rbac",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Attributes (ABAC)",
          link: {
            type: "doc",
            id: "how-to/build-policies/abac/overview",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "how-to/build-policies/abac",
            },
            {
              type: "category",
              label: "API Examples",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/working-with-abac",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Relationships (ReBAC)",
          link: {
            type: "doc",
            id: "how-to/build-policies/rebac/overview",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "how-to/build-policies/rebac",
            },
            {
              type: "category",
              label: "API Examples",
              items: [
                {
                  type: "autogenerated",
                  dirName: "api/rebac",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Policy as Code (PBAC)",
          link: {
            type: "doc",
            id: "integrations/gitops/custom_policy",
          },
          items: [
            {
              type: "doc",
              label: "Manage Policies",
              id: "integrations/gitops/overview",
            },
            "integrations/gitops/custom_policy",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Enforce Permissions",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        {
          type: "category",
          label: "The Policy Decision Point (PDP)",
          link: {
            type: "doc",
            id: "concepts/pdp/overview",
          },
          items: [
              "concepts/pdp/configuration",
              "concepts/pdp/factdb"
          ],
        },
        "how-to/enforce-permissions/check",
        "how-to/enforce-permissions/bulk-check",
        "how-to/enforce-permissions/data-filtering",
        "foaz/url-mapping-check",
        {
          type: "category",
          label: "Permission Queries",
          items: [
            "how-to/enforce-permissions/list-role-assignments",
            "how-to/enforce-permissions/user-permissions",
            "how-to/enforce-permissions/all-tenants-check",
            "how-to/enforce-permissions/authorized-users",
          ],
        },
        { type: "doc", label: "Frontend", id: "integrations/feature-flagging/casl" },
      ],
    },
    {
      type: "category",
      label: "Work with Data",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        {
          type: "category",
          label: "Users and Identities",
          items: [
            "how-to/sync-users",
            {
              type: "doc",
              label: "JWTs",
              id: "authentication/your-authentication",
            },
            {
              type: "doc",
              label: "SCIM",
              id: "integrations/SCIM/SCIM overview",
            },
          ],
        },
        {
          type: "category",
          label: "Custom Data",
          items: [
            "how-to/manage-data/loading-data",
            "how-to/manage-data/use-external-data-source",
            "how-to/manage-data/local-facts-uploader",
            "how-to/bulk-operations",
            "how-to/manage-data/pdp-sharding",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Manage the SDLC",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        {
          type: "category",
          label: "Deploy",
          link: { type: "doc", id: "how-to/deploy/deploy-to-production" },
          items: [
            "how-to/SDLC/CI-CD",
            {
              type: "category",
              label: "Cloud Hosts",
              link: {
                type: "generated-index",
                slug: "/category/cloud-hosts",
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "how-to/deploy/cloud-hosts",
                },
              ],
            },
            "how-to/deploy/overview",
            "how-to/deploy/on-prem",
            {
              type: "category",
              label: "Managed Frontend Deployment",
              items: [{ type: "autogenerated", dirName: "foaz" }],
            },
            {
              type: "doc",
              label: "Policy Decision Point (PDP)",
              id: "concepts/pdp/overview",
            },
          ],
        },
        {
          type: "category",
          label: "Test & Monitor",
          items: [
            "how-to/SDLC/authz-testing",
            {
              type: "category",
              label: "Audit Logs",
              link: {
                type: "doc",
                id: "how-to/use-audit-logs/types-and-filtering",
              },
              items: ["how-to/use-audit-logs/debug-mode", "how-to/use-audit-logs/troubleshooting"],
            },
            "how-to/use-audit-logs/logs-forwarder",
            {
              type: "category",
              label: "Errors Guide",
              link: {
                type: "generated-index",
                slug: "/category/errors",
              },
              items: [{ type: "autogenerated", dirName: "how-to/use-audit-logs/errors" }],
            },
            "api/pdp-webhooks",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Connect Your App",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        {
          type: "category",
          label: "NodeJS",
          link: {
            type: "doc",
            id: "sdk/nodejs/quickstart-nodejs",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "sdk/nodejs",
            },
          ],
        },
        {
          type: "category",
          label: "Python",
          link: {
            type: "doc",
            id: "sdk/python/quickstart_python_sync",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "sdk/python",
            },
          ],
        },
        {
          type: "category",
          label: "Golang",
          link: {
            type: "doc",
            id: "sdk/golang/quickstart-golang",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "sdk/golang",
            },
          ],
        },
        {
          type: "category",
          label: ".NET",
          link: {
            type: "doc",
            id: "sdk/dotnet/quickstart-dotnet",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "sdk/dotnet",
            },
          ],
        },
        {
          type: "category",
          label: "Java",
          link: {
            type: "doc",
            id: "sdk/java/quickstart-java",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "sdk/java",
            },
          ],
        },
        {
          type: "category",
          label: "Ruby on Rails",
          link: {
            type: "doc",
            id: "sdk/ruby/quickstart-ruby",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "sdk/ruby",
            },
          ],
        },
        {
          type: "category",
          label: "REST API",
          link: {
            type: "doc",
            id: "api/api-with-cli",
          },
          items: [
            {
              type: "link",
              href: "https://api.permit.io/v2/redoc",
              label: "API Reference",
            },
            {
              type: "autogenerated",
              dirName: "api/examples",
            },
            "api/background-tasks",
          ],
        },
        {
          type: "doc",
          label: "Terraform",
          id: "integrations/infra-as-code/terraform-provider",
        },
        {
          type: "category",
          link: {
            type: "doc",
            id: "integrations/gateways/overview",
          },
          label: "Proxies & API Gateways",
          items: [
            "integrations/gateways/aws-api-gateway",
            "integrations/gateways/kong",
            "integrations/gateways/nginx",
          ],
        },
        {
          type: "category",
          label: "Git Providers",
          link: {
            type: "doc",
            id: "integrations/gitops/github",
          },
          items: ["integrations/gitops/github"],
        },
        {
          type: "category",
          label: "GraphQL",
          link: {
            type: "doc",
            id: "integrations/GraphQL/overview",
          },
          items: ["integrations/GraphQL/apollo_server"],
        },
        {
          type: "doc",
          id: "sdk/php/quickstart-php",
          label: "PHP (Beta)",
        },
        {
          type: "doc",
          id: "sdk/kotlin/quickstart-kotlin",
          label: "Kotlin (Beta)",
        },
        {
          type: "doc",
          id: "sdk/erlang/quickstart-erlang",
          label: "Erlang (Beta)",
        },
        {
          type: "doc",
          id: "sdk/cpp/quickstart-cpp",
          label: "C++ (Beta)",
        },
        {
          type: "doc",
          id: "sdk/rust/quickstart-rust",
          label: "Rust (Coming Soon)",
        },
        {
          type: "doc",
          id: "sdk/sdks-overview",
          label: "SDK Feature Parity",
        },
      ],
    },
    {
      type: "category",
      label: "Integrate with Authentication",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        {
          type: "category",
          link: {
            type: "doc",
            id: "authentication/auth0/permit-integration",
          },
          label: "Auth0",
          items: ["authentication/auth0/auth0-demo-app", "authentication/auth0/auth0-sync-script"],
        },
        {
          type: "category",
          label: "AWS Cognito",
          link: {
            type: "doc",
            id: "authentication/cognito/permit-integration",
          },
          items: ["authentication/cognito/cognito-demo-app"],
        },
        "authentication/stytch/permit-integration",
        "authentication/fusionauth",
        "authentication/supertokens",
        "authentication/hankopermit",
        "integrations/SCIM/OKTA",
        "integrations/SCIM/EntraID",
      ],
    },
    {
      type: "category",
      label: "Embed Frontend Components",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        "embeddable-uis/overview",
        {
          type: "autogenerated",
          dirName: "embeddable-uis/element",
        },
        {
          type: "category",
          label: "Guides",
          items: [
            "embeddable-uis/permission-levels",
            "embeddable-uis/email-configuration-and-templates",
            "embeddable-uis/user-preview",
            "embeddable-uis/embedding-elements",
            "embeddable-uis/element-login",
            "embeddable-uis/troubleshooting",
            "embeddable-uis/webhooks",
            "integrations/policy-engines/overview",
            {
              type: "category",
              label: "API Examples",
              link: {
                type: "doc",
                id: "api/elements/overview",
              },
              items: ["api/elements/operation_approval", "api/elements/access-requests"],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Advanced Learning",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        // Ready
        {
          type: "category",
          label: "Conceptual Guides",
          items: [
            "overview/why-permit",
            "how-to/build-policies/policy-basics",
            "overview/glossary",
            "how-to/SDLC/modeling-implementation-components",
            "concepts/control-plane-and-data-plane",
          ],
        },
        {
          type: "category",
          label: "API References",
          items: ["api/api-reference", "api/pdp-api-reference", "api/pdp-statistics"],
        },
        {
          type: "category",
          label: "Migrations",
          items: ["api/v2-migration-guide", "concepts/oss-fallback"],
        },
      ],
    },
    {
      type: "category",
      label: "Updates and Feedback",
      collapsed: false,
      collapsible: false,
      className: "category-as-header",
      items: [
        "updates-and-feedback/changelog",
        "updates-and-feedback/roadmap",
        "updates-and-feedback/feature-requests",
        "faq",
        "status",
      ],
    },
  ],
};

module.exports = sidebars;
