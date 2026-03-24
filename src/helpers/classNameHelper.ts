export const classNames = (rootName: string, classNames: string[] = [], conditionals: Record<string, boolean> = {}) => {
  const classes = [`${rootName}--root`];

  classes.push(...classNames);

  Object.entries(conditionals).forEach(([key, value]) => {
    if (value) {
      classes.push(key);
    }
  });

  return classes.join(' ');
};