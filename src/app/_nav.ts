import { INavData } from '@coreui/angular';

// export const navItems: INavData[] = [

  export const navItems: INavData[] = [
  
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-home',

    
  },
  {
    name: 'Whats New',
    url: '/whats-new/latest',
    icon: 'fa fa-newspaper-o',
    
  },

  {
    name: 'Get Started',
    url: '/getstart',
    icon: 'fa fa-star-half-o ',
    children: [
      
      {
        name: 'About Lineup',
        url: '/getstart/about',
        icon: 'fa fa-asterisk'
      },
      {
        name: 'Installation',
        url: '/getstart/installation',
        icon: 'fa fa-terminal '
      },
    ]
  },
 
  
  {
    name: 'Guidelines',
    url: '/guidelines',
    icon: 'fa fa-th ',
    children: [
      {
        name: 'Iconography',
        url: '/guidelines/iconography',
        icon: 'fa fa-linode'
      },
      {
        name: 'Typography',
        url: '/guidelines/typography',
        icon: 'fa fa-text-width'
      },
      {
        name: 'Color',
        url: '/guidelines/color',
        icon: 'fa fa-paint-brush'
      },

      {
        name: 'Special Colors',
        url: '/guidelines/specialcolors',
        icon: 'fa fa-deviantart'
      },      

      {
        name: 'Layout & Panels',
        url: '/guidelines/layouts',
        icon: 'fa fa-columns '
      },
      
    ]
  },
  
  {
    name: 'Best Practices',
    url: '/bestpractices/uxbest',
    icon: 'icon-speedometer',
    
  },

  {
    name: 'Frontend Components',
    url: '/components',
    icon: 'icon-puzzle',
    children: [
     
      {
        name: 'Breadcrums',
        url: '/components/breadcrumbs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Model Box',
        url: '/components/modalbox',
        icon: 'icon-puzzle'
      },
      {
        name: 'Buttons',
        url: '/components/buttons',
        icon: 'icon-puzzle'
      },


     
      {
        name: 'Forms',
        url: '/components/forms',
        icon: 'icon-puzzle'
      },
      // {
      //   name: 'select box',
      //   url: '/components/selectbox',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Radio',
      //   url: '/components/radio',
      //   icon: 'icon-puzzle'

      // },
      // {
      //   name: 'check box',
      //   url: '/components/checkbox',
      //   icon: 'icon-puzzle'
      // },
      {
        name: 'Accordion',
        url: '/components/accordion',
        icon: 'icon-puzzle'
        // icon: ''
      },
      {
        name: 'Empty State',
        url: '/components/emptystate',
        icon: 'icon-puzzle'
      },
      {
        name: 'Error Page',
        url: '/components/errorpage',
        icon: 'icon-puzzle'
      },
      
    ]
  },

    
  {
    name: 'functional components',
    url: '/functionalcomponents',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Inbox',
        url: '/functionalcomponents/inbox',
        icon: 'fa fa-newspaper-o'
      },
      {
        name: 'Authorization-UI',
        url: '/functionalcomponents/Authorization',
        icon: 'fa fa-newspaper-o'
      },
      
    ]
  },


  {
    name: 'Accessibility',
    url: '/accessibility ',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Web A11y Introduction ',
        url: '/accessibility/aaccessibility',
        icon: 'icon-puzzle'
      },
      {
        name: 'levels A, AA & AAA',
        url: '/accessibility/aaaccessibility',
        icon: 'icon-puzzle'
      },

      {
        name: 'Assistive Technologies',
        url: '/accessibility/aaaaccessibility',
        icon: 'icon-puzzle'
      },
      // {
      //   name: 'Screen Reader Tools ',
      //   url: '/accessibility/tools',
      //   icon: 'icon-puzzle'
      // },
    ]
  },

  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },

];
