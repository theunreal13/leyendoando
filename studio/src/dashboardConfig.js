export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "622776a9f8df7e00986369be",
                  title: "Sanity Studio",
                  name: "leyendoando-studio",
                  apiId: "ef8e220b-f54e-4e25-8376-0e8d6367d428",
                },
                {
                  buildHookId: "622776a9dd4a8300aeb73a8f",
                  title: "Blog Website",
                  name: "leyendoando",
                  apiId: "348d449e-c58e-4766-86a0-7a305c27cdf9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/theunreal13/leyendoando",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://leyendoando.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
