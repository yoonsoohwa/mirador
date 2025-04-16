import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import FullScreenButton from '../containers/FullScreenButton';
import ns from '../config/css-ns';

const Root = styled(AppBar, { name: 'WindowBottomBar', slot: 'root' })(() => ({
  zIndex: 1100,
}));

const StyledToolbar = styled(Toolbar, { name: 'WindowBottomBar', slot: 'toolbar' })(({ ownerState, theme }) => ({
  backgroundColor: '#D4D4D4',
  borderTop: '2px solid',
  borderTopColor: ownerState?.focused ? '#D4D4D4' : 'transparent',
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: 32,
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
}));

/**
 * WindowBottomBar
 */
export function WindowBottomBar({ focusWindow = () => {}, component = 'div' }) {
  const { t } = useTranslation();
  const ownerState = arguments[0]; // eslint-disable-line prefer-rest-params

  return (
    <Root
      component={component}
      aria-label={t('windowNavigation')}
      position="relative"
      color="default"
      enableColorOnDark
    >
      <StyledToolbar
        disableGutters
        onMouseDown={focusWindow}
        ownerState={ownerState}
        className={classNames(ns('window-bottom-bar'))}
        variant="dense"
      >
        <FullScreenButton color="success" />
        <FullScreenButton color="success" />
      </StyledToolbar>
    </Root>
  );
}

WindowBottomBar.propTypes = {
  component: PropTypes.elementType,
  focused: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  focusWindow: PropTypes.func,
};
