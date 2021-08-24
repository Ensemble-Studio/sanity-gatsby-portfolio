export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6124a4abce9208820d7b9b4a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-q44oh7yr',
                  apiId: '9ce33bf1-3472-41d2-9d2b-6b1d8833010c'
                },
                {
                  buildHookId: '6124a4aa73197493feeffcd0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-e76x8gqt',
                  apiId: '21e7aa64-1774-460e-9504-9cda678a3fcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ensemble-Studio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-e76x8gqt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
