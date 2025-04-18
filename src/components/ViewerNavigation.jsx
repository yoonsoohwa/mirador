import NavigationIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { display } from '@mui/system';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import ns from '../config/css-ns';
import ViewerInfo from '../containers/ViewerInfo';

/**
 */
export function ViewerNavigation({
  canvasCount,
  canvases,
  setCanvas,
  hasNextCanvas = false,
  hasPreviousCanvas = false,
  setNextCanvas = () => {},
  setPreviousCanvas = () => {},
  viewingDirection = '',
  windowId,
}) {
  const { t } = useTranslation();
  const firstCanvasId = canvases[0].id;
  const lastCanvasId = canvases[canvasCount - 1].id;
  let htmlDir = 'ltr';
  let previousIconStyle = {};
  let nextIconStyle = {};
  switch (viewingDirection) {
    case 'top-to-bottom':
      previousIconStyle = { transform: 'rotate(270deg)' };
      nextIconStyle = { transform: 'rotate(90deg)' };
      break;
    case 'bottom-to-top':
      previousIconStyle = { transform: 'rotate(90deg)' };
      nextIconStyle = { transform: 'rotate(270deg)' };
      break;
    case 'right-to-left':
      htmlDir = 'rtl';
      previousIconStyle = {};
      nextIconStyle = { transform: 'rotate(180deg)' };
      break;
    default:
      previousIconStyle = { transform: 'rotate(180deg)' };
      nextIconStyle = {};
  }

  return (
    <div
      className={classNames(ns('osd-navigation'))}
      dir={htmlDir}
      style={{ display: 'flex' }}
    >
      <MiradorMenuButton
        aria-label={t('firstCanvas')}
        className={ns('first-canvas-button')}
        disabled={!hasPreviousCanvas}
        onClick={() => {
          hasPreviousCanvas && setCanvas(windowId, firstCanvasId);
        }}
      >
        <NavigationIcon style={previousIconStyle} />
      </MiradorMenuButton>
      <MiradorMenuButton
        aria-label={t('previousCanvas')}
        className={ns('previous-canvas-button')}
        disabled={!hasPreviousCanvas}
        onClick={() => {
          hasPreviousCanvas && setPreviousCanvas();
        }}
      >
        <NavigationIcon style={previousIconStyle} />
      </MiradorMenuButton>
      <ViewerInfo windowId={windowId} />
      <MiradorMenuButton
        aria-label={t('nextCanvas')}
        className={ns('next-canvas-button')}
        disabled={!hasNextCanvas}
        onClick={() => {
          hasNextCanvas && setNextCanvas();
        }}
      >
        <NavigationIcon style={nextIconStyle} />
      </MiradorMenuButton>
      <MiradorMenuButton
        aria-label={t('lastCanvas')}
        className={ns('last-canvas-button')}
        disabled={!hasNextCanvas}
        onClick={() => {
          hasNextCanvas && setCanvas(windowId, lastCanvasId);
        }}
      >
        <NavigationIcon style={nextIconStyle} />
      </MiradorMenuButton>
    </div>
  );
}

ViewerNavigation.propTypes = {
  canvasCount: PropTypes.number.isRequired,
  canvases: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  hasNextCanvas: PropTypes.bool,
  hasPreviousCanvas: PropTypes.bool,
  setCanvas: PropTypes.func.isRequired,
  setNextCanvas: PropTypes.func,
  setPreviousCanvas: PropTypes.func,
  viewingDirection: PropTypes.string,
  windowId: PropTypes.string.isRequired,
};
