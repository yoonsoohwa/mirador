import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import { KoreanMemoryIcon, IIIFIcon } from './icons';

/**
 * Display a branding icon
 */
export function Branding({ variant = 'default', ...ContainerProps }) {
  const { t } = useTranslation();
  return (
    <Stack alignItems="center" {...ContainerProps} sx={{ flexDirection: 'row', gap: '10px', padding: '10px' }}>
      {variant === 'wide' && (
        <div>
          <Typography align="center" component="p" variant="h3">
            {t('mirador')}
          </Typography>
        </div>
      )}
      <KoreanMemoryIcon
        aria-label={t('aboutKoreanMemory')}
        titleAccess={t('aboutKoreanMemory')}
        sx={{ height: '100%', width: 'auto' }}
      />
      <IIIFIcon aria-label={t('aboutIIIF')} titleAccess={t('aboutIIIF')} />
    </Stack>
  );
}

Branding.propTypes = {
  variant: PropTypes.oneOf(['default', 'wide']),
};
