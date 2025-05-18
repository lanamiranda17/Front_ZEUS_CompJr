import './Tabela_MUI.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Tabela_MUI({ titulo, colunas, dados }) {
  return (
    <div className="TabelaContainer">
      <TableContainer component={Paper}>
        <div className="Titulo_tabela">{titulo}</div>
        <Table sx={{ width: '100%', tableLayout: 'auto' }} aria-label="tabela genérica">
          <TableHead>
            <TableRow>
              {colunas.map((coluna, idx) => (
                <TableCell
                  key={coluna.id}
                  align={coluna.alinhamento || 'left'}
                >
                  {coluna.rotulo}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {dados.map((linha, i) => (
              <TableRow key={i}>
                {colunas.map((coluna, idx) => (
                  <TableCell
                    key={coluna.id}
                    align={coluna.alinhamento || 'left'}
                  >
                    {coluna.id === 'status' ? (
                      <span className={`Status ${linha[coluna.id]}`}>{linha[coluna.id]}</span>
                    ) : (
                      linha[coluna.id]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Tabela_MUI;
