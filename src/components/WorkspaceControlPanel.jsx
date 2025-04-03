import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import WorkspaceAddButton from '../containers/WorkspaceAddButton';
import WorkspaceControlPanelButtons from '../containers/WorkspaceControlPanelButtons';
import Branding from '../containers/Branding';
import ns from '../config/css-ns';

const Root = styled(AppBar, { name: 'WorkspaceControlPanel', slot: 'root' })(({ ownerState, theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  height: '50px',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  paddingBottom: 0,
  paddingTop: 0,
  position: 'relative',
  // [theme.breakpoints.up('sm')]: {
  //   height: 'auto',
  //   width: ownerState.variant === 'wide' ? 'auto' : 64,
  // },
  ...(ownerState.variant === 'wide' && {
    width: 'auto',
  }),
}));

const StyledToolbar = styled(Toolbar, { name: 'WorkspaceControlPanel', slot: 'toolbar' })(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    minHeight: 'unset',
  },
}));

const StyledWorkspaceButtons = styled('div', { name: 'WorkspaceControlPanel', slot: 'buttonArea' })(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const StyledBranding = styled(Branding, { name: 'WorkspaceControlPanel', slot: 'branding' })(({ theme }) => ({
  width: 'fit-content',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

/**
 * Provides the panel responsible for controlling the entire workspace
 */
export function WorkspaceControlPanel({ variant = 'default', ...rest }) {
  const { t } = useTranslation();
  return (
    <Root
      ownerState={{ t, variant, ...rest }}
      className={classNames(ns('workspace-control-panel'))}
      color="default"
      enableColorOnDark
      position="absolute"
      component="nav"
      aria-label={t('workspaceNavigation')}
    >
      <StyledBranding variant={variant} />
      <StyledToolbar disableGutters>
        {/* <WorkspaceAddButton /> */}
        <StyledWorkspaceButtons>
          <WorkspaceControlPanelButtons />
        </StyledWorkspaceButtons>
      </StyledToolbar>
    </Root>
  );
}

WorkspaceControlPanel.propTypes = {
  variant: PropTypes.oneOf(['default', 'wide']),
};
