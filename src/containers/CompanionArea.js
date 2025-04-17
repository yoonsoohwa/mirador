import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins';
import {
  getCompanionWindowIdsForPosition,
  getCompanionAreaVisibility,
  getThemeDirection,
  getWindow,
} from '../state/selectors';
import * as actions from '../state/actions';
import { CompanionArea } from '../components/CompanionArea';

/** */
const mapStateToProps = (state, { windowId, position }) => ({
  companionAreaOpen: getCompanionAreaVisibility(state, { position, windowId }),
  companionRightAreaOpen: getCompanionAreaVisibility(state, {
    position,
    windowId,
  }),
  companionWindowIds: getCompanionWindowIdsForPosition(state, {
    position,
    windowId,
  }),
  direction: getThemeDirection(state),
  rightSideBarOpen: (getWindow(state, { windowId }) || {}).rightSideBarOpen,
  sideBarOpen: (getWindow(state, { windowId }) || {}).sideBarOpen,
});

const mapDispatchToProps = {
  setCompanionAreaOpen: actions.setCompanionAreaOpen,
  setCompanionRightAreaOpen: actions.setCompanionRightAreaOpen,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPlugins('CompanionArea')
);

export default enhance(CompanionArea);
