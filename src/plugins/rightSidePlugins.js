import WindowSideBarInfoPanel from '../containers/WindowSideBarInfoPanel';
import AttributionPanel from '../containers/AttributionPanel';

export default [
  {
    component: () => ({
      icon: () => 'ℹ️',
      panel: 'info',
    }),
    mode: 'add',
    target: 'WindowRightSideBarButtons',
  },
  // 버튼 2: attribution
  {
    component: () => ({
      icon: () => '📜',
      label: 'Attribution',
      panel: 'attribution',
    }),
    mode: 'add',
    target: 'WindowRightSideBarButtons',
  },

  // 패널 1
  {
    component: WindowSideBarInfoPanel,
    mode: 'add',
    name: 'info',
    target: 'WindowRightSideBar',
  },

  // 패널 2
  {
    component: AttributionPanel,
    mode: 'add',
    name: 'attribution',
    target: 'WindowRightSideBar',
  },
];
