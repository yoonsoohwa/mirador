import { compose } from 'redux';
import { connect } from 'react-redux';
import { withPlugins } from '../extend/withPlugins';
import { ViewerInfo } from '../components/ViewerInfo';
import { getCanvasLabel, getCanvases, getCanvasIndex, getCurrentCanvas } from '../state/selectors';
import * as actions from '../state/actions';

/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */
const mapStateToProps = (state, props) => {
  const { windowId } = props;
  const canvases = getCanvases(state, { windowId });
  const canvasIndex = getCanvasIndex(state, { windowId });
  const canvasId = (getCurrentCanvas(state, { windowId }) || {}).id;

  return {
    canvasCount: canvases.length,
    canvases,
    canvasIndex,
    canvasLabel: getCanvasLabel(state, {
      canvasId,
      windowId,
    }),
  };
};

/**
 * mapStateToProps - used to hook up connect to state
 * @memberof Window
 * @private
 */
const mapDispatchToProps = (dispatch) => ({
  setCanvas: (...args) => dispatch(actions.setCanvas(...args)),
});

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), withPlugins('ViewerInfo'));

export default enhance(ViewerInfo);
