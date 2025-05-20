import { PieChart } from '@mui/x-charts';
import { useMediaQuery, useTheme } from '@mui/material';
import './Donut_MUI.css';

export default function Donut_MUI({ titulo, dados }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const total = dados.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="Donut_card">
      <div className="Donut_info">
        <div className='Titulo_grafico'>{titulo}</div>
        <div className="Donut_total">{total} Total de candidaturas</div>
        <div className="Donut_legenda">
          {dados.map((item) => (
            <div className="Donut_legenda_item" key={item.id}>
              <span className="Donut_legenda_cor" style={{ background: item.color }}></span>
              <span style={{ color: item.color, fontWeight: 700 }}>{item.value}</span> {item.label}
            </div>
          ))}
        </div>
      </div>
      <PieChart
        series={[
          {
            data: dados,
            innerRadius: 45,
            outerRadius: 65,
            paddingAngle: 2,
            cornerRadius: 5,
          },
        ]}
        height={isMobile ? 130 : 130}
        width={isMobile ? 130 : 130}
        slotProps={{ legend: { hidden: true } }}
        sx={{ aspectRatio: '1 / 1' }}
      />
    </div>
  );
}
