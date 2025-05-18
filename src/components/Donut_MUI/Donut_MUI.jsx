import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function Donut_MUI({ titulo, dados }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const total = dados.reduce((acc, item) => acc + item.value, 0);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        padding: 2,
        borderRadius: 2,
        backgroundColor: 'white',
        boxShadow: 2,
        width: '100%',
        height: '100%',
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {titulo}
        </Typography>

        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
        {total} Total de {String(titulo).toLowerCase()}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {dados.map((item) => (
            <Typography key={item.id}>
              <span style={{ color: item.color, fontWeight: 'bold' }}>{item.value}</span> {item.label}
            </Typography>
          ))}
        </Box>
      </Box>

      <PieChart
        series={[
          {
            data: dados,
            innerRadius: 70,
            outerRadius: 100,
            paddingAngle: 2,
            cornerRadius: 4,
          },
        ]}
        height={isMobile ? 250 : 200}
        width={isMobile ? 250 : 200}
        legend={{ hidden: true }}
      />
    </Box>
  );
}
