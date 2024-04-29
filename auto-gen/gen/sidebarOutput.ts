export type SidebarOutputKeyName = {
  [key: string]: SidebarOutputKeyName | string[];
};
export const sidebarOutput = {
  preview: {} as SidebarOutputKeyName,
  stable: {} as SidebarOutputKeyName,
  pocket: [] as string[]
};
export const sidebarOutputPath = './out'