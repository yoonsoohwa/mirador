import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { useTranslation } from 'react-i18next';
import WindowRightSideBarButtons from '../containers/WindowRightSideBarButtons';

const Root = styled(Drawer, { name: 'WindowRightSideBar', slot: 'root' })(({ theme }) => ({
  flexShrink: 0,
  order: 1000,
  zIndex: theme.zIndex.appBar - 1,
}));

const Nav = styled('nav', { name: 'WindowRightSideBar', slot: 'nav' })({
  position: 'relative !important',
  width: 48,
});

/**
 * WindowSideBar
 */
export function WindowRightSideBar({ classes = {}, direction, windowId, rightSideBarOpen = true }) {
  const { t } = useTranslation();
  return (
    <Root
      variant="persistent"
      className={classes.drawer}
      anchor="right"
      PaperProps={{
        'aria-label': t('sidebarPanelsNavigation'),
        component: Nav,
        variant: 'outlined',
      }}
      SlideProps={{ direction: 'left', mountOnEnter: true, unmountOnExit: true }}
      open={rightSideBarOpen}
    >
      <WindowRightSideBarButtons windowId={windowId} />
    </Root>
  );
}

WindowRightSideBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  direction: PropTypes.string.isRequired,
  rightSideBarOpen: PropTypes.bool,
  windowId: PropTypes.string.isRequired,
};
