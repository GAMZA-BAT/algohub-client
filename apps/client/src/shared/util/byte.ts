export const getFormattedMemory = (bytes: number) => {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let index = 0;

  while (bytes >= 1024 && index < units.length - 1) {
    bytes /= 1024;
    index++;
  }

  return `${bytes.toFixed(0)}${units[index]}`;
};
