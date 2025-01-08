// types/index.ts

export type PlayerColor = 'palegreen' | 'yellow' | 'royalblue' | 'tomato';

export interface CoinPosition {
  position: string;
  isTurnAvailable: boolean;
}

export interface CoinState {
  [key: string]: {
    [key: string]: CoinPosition;
  };
}

export interface BlockState {
  [key: string]: string[];
}

export interface DiceState {
  num: number;
  isLocked: boolean;
  lastRolledBy: PlayerColor | null;
}

export interface PlayerInfo {
  username: string;
  avatar: string;
}

export interface SetupState {
  value: boolean;
  playersList: PlayerColor[];
  currentPlayer: PlayerColor;
  roomID: string;
}

export interface WonState {
  player: PlayerColor;
  win: boolean;
}