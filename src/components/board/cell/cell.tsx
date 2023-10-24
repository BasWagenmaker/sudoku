import classNames from "classnames";
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

  const cellClasses = classNames({
    "border": true,
    "border-slate-200": true,
    "border-r-4": [2, 5].includes(columnIndex),
    "border-b-4": [2, 5].includes(rowIndex),
    "bg-slate-200": active,
    "bg-white": !active,
    "font-semibold": true,
    "text-slate-700": true,
    "text-lg": true,
    "xl:w-16": true,
    "xl:h-16": true,
    "w-10": true,
    "h-10": true,
    "text-center": true,
    "hover:bg-slate-100": true,
    "hover:cursor-pointer": true,
    "rounded-tl-md": rowIndex === 0 && columnIndex === 0,
    "rounded-tr-md": rowIndex === 0 && columnIndex === 8,
    "rounded-bl-md": rowIndex === 8 && columnIndex === 0,
    "rounded-br-md": rowIndex === 8 && columnIndex === 8,
  });

  return (
    <td className={cellClasses} onClick={() => onClick(rowIndex, columnIndex)}>
      {value > 0 ? value : ""}
    </td>
  );
}
