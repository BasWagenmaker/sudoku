interface CellProps {
  value: number;
  rowIndex: number;
  columnIndex: number;
  onClick: any;
  active: boolean;
}

export function Cell({
  value,
  rowIndex,
  columnIndex,
  onClick,
  active,
}: CellProps) {
  const index = columnIndex + rowIndex * 9;
  return (
    <td
      className={`border-2 w-12 h-12 text-center bg-white hover:bg-slate-100 hover:cursor-pointer ${
        active ? "bg-slate-100" : "bg-white"
      }`}
      onClick={() => onClick(rowIndex, columnIndex)}
    >
      {value}
    </td>
  );
}
