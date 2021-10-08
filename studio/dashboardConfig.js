export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61603783766fa83b10a0ed61',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mkpfgvdv',
                  apiId: 'f01499a7-ef1d-458c-a965-4ef5c73cd24d'
                },
                {
                  buildHookId: '6160378431c5f53719fa89f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qcq7xg33',
                  apiId: '75282b6b-e91b-4b63-8bb2-9c060829fd1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonassvartberg/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qcq7xg33.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
