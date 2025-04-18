import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins';
import * as actions from '../state/actions';
import {
  getSequenceViewingDirection,
  getCanvases,
  getNextCanvasGrouping,
  getPreviousCanvasGrouping,
} from '../state/selectors';
import { ViewerNavigation } from '../components/ViewerNavigation';

/** */
const mapStateToProps = (state, { windowId }) => {
  const canvases = getCanvases(state, { windowId });
  return {
    canvasCount: canvases.length,
    canvases,
    hasNextCanvas: !!getNextCanvasGrouping(state, { windowId }),
    hasPreviousCanvas: !!getPreviousCanvasGrouping(state, { windowId }),
    viewingDirection: getSequenceViewingDirection(state, { windowId }),
  };
};

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  setCanvas: (...args) => dispatch(actions.setCanvas(...args)),
  setNextCanvas: (...args) => dispatch(actions.setNextCanvas(windowId)),
  setPreviousCanvas: (...args) => dispatch(actions.setPreviousCanvas(windowId)),
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withPlugins('ViewerNavigation')
  // further HOC go here
);

export default enhance(ViewerNavigation);
