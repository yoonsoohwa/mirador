import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import ns from '../config/css-ns';

const StyledOsdInfo = styled('div')(() => ({
  overflow: 'hidden',
  padding: '12px',
  textOverflow: 'ellipsis',
  unicodeBidi: 'plaintext',
  whiteSpace: 'nowrap',
  width: '100%',
}));

const StyledOutlinedInput = styled(OutlinedInput)(() => ({
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  /* Firefox */
  '& input[type=number]': {
    '-moz-appearance': 'textfield',
  },
  fontSize: '12px',
  textAlign: 'center',
}));

/**
 *
 */
export function ViewerInfo({ canvasCount, canvases, canvasIndex, canvasLabel = undefined, windowId, setCanvas }) {
  const { t } = useTranslation();
  const [pageNum, setPageNum] = useState(canvasIndex + 1);

  /** */
  const handleOnChangePageNum = (e) => {
    setPageNum(e.target.value);
  };

  /** */
  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (pageNum < 1) {
        setCanvas(windowId, canvases[0].id);
      } else if (pageNum > canvasCount + 1) {
        setCanvas(windowId, canvases[canvasCount - 1].id);
      } else {
        setCanvas(windowId, canvases[pageNum - 1].id);
      }
    }
  };

  useEffect(() => {
    setPageNum(canvasIndex + 1);
  }, [canvasIndex]);

  return (
    <StyledOsdInfo className={classNames(ns('osd-info'))}>
      <StyledOutlinedInput
        type="number"
        value={pageNum}
        inputProps={{ max: canvasCount + 1, min: 1 }}
        onChange={handleOnChangePageNum}
        onKeyDown={handleOnKeyDown}
        size="small"
      />
      <Typography display="inline" variant="caption" className={ns('canvas-count')}>
        {t('pagination', { total: canvasCount })}
      </Typography>
    </StyledOsdInfo>
  );
}

ViewerInfo.propTypes = {
  canvasCount: PropTypes.number.isRequired,
  canvases: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  canvasIndex: PropTypes.number.isRequired,
  canvasLabel: PropTypes.string,
  setCanvas: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
};
