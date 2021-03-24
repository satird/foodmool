var routes = [
  {
    path: '/tabs/',
    componentUrl: './pages/tabs.html',
  },
  {
    path: '/',
    url: './index.html',
    tabs: [
      {
        path: '/',
        id: 'about',
        url: './pages/home.html'
      },
      {
        path: '/contacts/',
        id: 'contacts',
        url: './pages/contacts.html'
      },
      {
        path: '/cv/',
        id: 'cv',
        url: './pages/cv.html'
      },
    ],
  },
]
