import { configureFonts, DefaultTheme, DarkTheme } from 'react-native-paper';

const baseFontConfig = {
  bold: { fontFamily: 'RobotoSlab_700Bold' },
  medium: { fontFamily: 'RobotoSlab_500Medium' },
  regular: { fontFamily: 'RobotoSlab_400Regular' },
};

const fontConfig = {
  default: baseFontConfig,
  android: baseFontConfig,
  ios: baseFontConfig,
  web: baseFontConfig,
};

const pokemonColors = {
  background: {
    black: '#303030',
    blue: '#0070B8',
    brown: '#6F4E37',
    gray: '#808080',
    green: '#5E8C31',
    pink: '#D98695',
    purple: '#8E4585',
    red: '#CC474B',
    white: '#D0D0D0',
    yellow: '#F5E050',
  },
  backgroundDark: {
    black: '#101010',
    blue: '#004588',
    brown: '#422611',
    gray: '#545454',
    green: '#2F5E00',
    pink: '#A65867',
    purple: '#5F1758',
    red: '#950B23',
    white: '#9D9D9D',
    yellow: '#BFAE15',
  },
  types: {
    bug: '#568203',
    dark: '#0E0212',
    dragon: '#002147',
    electric: '#FFC800',
    fairy: '#DE6FA1',
    fighting: '#8B0000',
    fire: '#FF4500',
    flying: '#ACACE6',
    ghost: '#BEBEBE',
    grass: '#006600',
    ground: '#AF6E4D',
    ice: '#87CEFA',
    normal: '#976D6D',
    poison: '#702670',
    psychic: '#32174D',
    rock: '#967117',
    steel: '#5F8A8B',
    water: '#1974D2',
  },
  stats: {
    hp: '#FD3A4A',
    attack: '#FFC800',
    defense: '#4CBB17',
    specialAttack: '#FF7800',
    specialDefence: '#0067A5',
    speed: '#59260B',
  },
};

const gameVersion = {
  red: '#F44236',
  blue: '#1D89E4',
  yellow: '#FFBE00',
  gold: '#D3AF37',
  silver: '#B0BFC6',
  crystal: '#4DD0E2',
  ruby: '#CF0304',
  sapphire: '#3C3696',
  emerald: '#078347',
  fireRed: '#F44236',
  leafGreen: '#4CB050',
  diamond: '#00BCD5',
  pearl: '#AA47BC',
  platinum: '#C9C1B6',
  heartGold: '#D3AF37',
  soulSilver: '#B0BFC6',
  black: '#424242',
  white: '#EEEEEE',
  colosseum: '#B18B87',
  xd: '#6E70AA',
  X: '#325CA6',
  Y: '#D41235',
  omegaRuby: '#CF0304',
  alphaSapphire: '#3C3696',
  sun: '#F89A1E',
  moon: '#1AA2DC',
  ultraSun: '#EB622B',
  ultraMoon: '#1AA2DC',
  letsGoPikachu: '#EFB516',
  letsGoEevee: '#C87225',
  sword: '#00A0E8',
  shield: '#E5005B',
};

export const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0070B8',
    primaryDark: '#004588',
    background: '#F8F4F4',
    bottomBar: '#FFFFFF',
    activeTab: '#0070B8',
    inactiveTab: '#808080',
    caption: '#FFFFFF',
    card: '#FFFFFF',
    cardCaption: '#000000',
    statBarBackground: '#C4C4C4',
    filterDivider: '#ABABAB',
    activeRadioButton: '#0070B8',
    activityIndicator: '#0070B8',
    searchBarBackground: '#99C6E3',
    searchBarIcon: '#000000',
    searchBarInput: '#151515',
    searchBarPlaceholder: '#475B68',
    pokemon: pokemonColors,
    gameVersion: gameVersion,
  },
  fonts: configureFonts(fontConfig),
};

export const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#1E1E1E',
    primaryDark: '#000000',
    backgroundColor: '#121212',
    bottomBar: '#202020',
    activeTab: '#FFFFFF',
    inactiveTab: '#8F8F8F',
    caption: '#FFFFFF',
    card: '#1E1E1E',
    cardCaption: '#FFFFFF',
    statBarBackground: '#2D2D2D',
    filterDivider: '#A2A2A2',
    activeRadioButton: '#F2F2F2',
    activityIndicator: '#F2F2F2',
    evolutionCardBackground: '#2D2D2D',
    searchBarBackground: '#E8E8E8',
    searchBarIcon: '#000000',
    searchBarInput: '#151515',
    searchBarPlaceholder: '#475B68',
    pokemon: pokemonColors,
    gameVersion: gameVersion,
  },
  fonts: configureFonts(fontConfig),
};
