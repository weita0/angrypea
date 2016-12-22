export const menu = [{
  name: 'Home',
  value: 'home',
  path: '/',
  icon: 'home',
  subMenu: null
}, {
  name: 'Resume',
  value: 'resume',
  path: '/resume/create',
  icon: 'solution',
  subMenu: null
}, {
  name: 'Group 1',
  value: 'g1',
  path: null,
  icon: 'star-o',
  subMenu: [{
    name: 'Option 1',
    value: 'o1',
    path: '/g1/o1',
    icon: 'chrome',
    subMenu: null
  }, {
    name: 'Option 2',
    value: 'o2',
    path: '/g2/o2',
    icon: 'ie',
    subMenu: null
  }]
}]
