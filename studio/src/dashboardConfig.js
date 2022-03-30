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
                    "62447b68b0b45a1cf03ef2af",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-2-studio-rszr9fzg",
                  apiId: "bbdc9c9b-eac0-4dc9-996e-326830a8ab73",
                },
                {
                  buildHookId: "62447b681a8447074e471ca7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-2-web-s5si9bbz",
                  apiId: "44a09620-dfde-4e07-a138-7e395d0e7d0f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ThomasGuy/sanity-gatsby-blog2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-2-web-s5si9bbz.netlify.app",
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
