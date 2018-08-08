// hello
const home = (resolve) => {
  import('components/home').then((module) => {
    resolve(module)
  })
}

// tab
const tab = (resolve) => {
  import('components/tab').then((module) => {
    resolve(module)
  })
}

// tab1
const tab1 = (resolve) => {
  import('components/tab1').then((module) => {
    resolve(module)
  })
}

// tab2
const tab2 = (resolve) => {
  import('components/tab2').then((module) => {
    resolve(module)
  })
}

export default [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: home
    },
    {
      path: '/tab',
      name: 'tab',
      meta: {
        title: 'tab'
      },
      component: tab
    },
    {
      path: '/tab1',
      name: 'tab1',
      meta: {
        title: 'tab1'
      },
      component: tab1
    },
    {
      path: '/tab2',
      name: 'tab2',
      meta: {
        title: 'tab2'
      },
      component: tab2
    }
]
