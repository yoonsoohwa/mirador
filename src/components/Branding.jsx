import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import { KoreanMemoryIcon, IIIFIcon } from './icons';

const StyledBrandingContainer = styled('div', {
  name: 'BrandingLogo',
  slot: 'logo',
})(() => ({
  height: '100%',
  width: 'fit-content',
}));

/**
 * Display a branding icon
 */
export function Branding({ variant = 'default', ...ContainerProps }) {
  const { t } = useTranslation();
  return (
    <Stack
      alignItems="center"
      {...ContainerProps}
      sx={{ flexDirection: 'row', gap: '10px', padding: '10px' }}
    >
      {variant === 'wide' && (
        <div>
          <Typography align="center" component="p" variant="h3">
            {t('mirador')}
          </Typography>
        </div>
      )}
      <StyledBrandingContainer>
        <KoreanMemoryIcon
          aria-label={t('aboutKoreanMemory')}
          titleAccess={t('aboutKoreanMemory')}
        />
      </StyledBrandingContainer>
      <StyledBrandingContainer>
        <IIIFIcon aria-label={t('aboutIIIF')} titleAccess={t('aboutIIIF')} />
      </StyledBrandingContainer>
    </Stack>
  );
}

Branding.propTypes = {
  variant: PropTypes.oneOf(['default', 'wide']),
};
