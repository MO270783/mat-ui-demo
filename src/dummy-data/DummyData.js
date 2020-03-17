const HostNames = [
  { name: 'hostname1', region: 'TKY' },
  { name: 'hostname2', region: 'TKY' },
  { name: 'hostname3', region: 'TKY' },
  { name: 'hostname4', region: 'TKY' },
  { name: 'hostname5', region: 'TKY' },
  { name: 'hostname6', region: 'LON' },
  { name: 'hostname7', region: 'LON' },
  { name: 'hostname8', region: 'LON' },
  { name: 'hostname9', region: 'LON' },
  { name: 'hostname10', region: 'LON' },
  { name: 'hostname11', region: 'NYK' },
  { name: 'hostname12', region: 'NYK' },
  { name: 'hostname13', region: 'NYK' },
  { name: 'hostname14', region: 'NYK' },
  { name: 'hostname15', region: 'NYK' },
];

const ProcessNames = [
  { name: 'server1' },
  { name: 'server2' },
  { name: 'server3' },
  { name: 'server4' },
  { name: 'server5' },
  { name: 'server6' },
  { name: 'server7' },
  { name: 'server8' },
  { name: 'server9' },
  { name: 'server10' },
];

const FileNames = [
  {
    name: 'filename1',
    host: 'hostname1',
    region: 'TKY',
  },
  {
    name: 'filename2',
    host: 'hostname2',
    region: 'TKY',
  },
  {
    name: 'filename3',
    host: 'hostname3',
    region: 'TKY',
  },
  {
    name: 'filename4',
    host: 'hostname9',
    region: 'LON',
  },
  {
    name: 'filename5',
    host: 'hostname8',
    region: 'LON',
  },
  {
    name: 'filename6',
    host: 'hostname7',
    region: 'LON',
  },
  {
    name: 'filename7',
    host: 'hostname12',
    region: 'NYK',
  },
  {
    name: 'filename8',
    host: 'hostname11',
    region: 'NYK',
  },
  {
    name: 'filename9',
    host: 'hostname13',
    region: 'NYK',
  },
];

const GrepResult = [
  {
    fileName: 'filename1',
    host: 'hostname1',
    region: 'TKY',
    result: 'Grep result of filename1',
  },
  {
    fileName: 'filename9',
    host: 'hostname13',
    region: 'NYK',
    result: 'Grep result of filename9',
  },
  {
    fileName: 'filename5',
    host: 'hostname8',
    region: 'LON',
    result: 'Grep result of filename5',
  },
  {
    fileName: 'filename3',
    host: 'hostname3',
    region: 'TKY',
    result: 'Grep result of filename3',
  },
];

export const DummyData = {
  HostNames,
  ProcessNames,
  FileNames,
  GrepResult,
};
