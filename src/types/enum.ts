export enum LANGUAGE {
  en = 'en',
  jp = 'jp',
  ja = 'ja',
}

export enum UserStatus {
  IN_ACTIVE = 'IN_ACTIVE',
  ACTIVE = 'ACTIVE',
  DISABLE = 'DISABLE',
}
export enum Role {
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  ROOT_ADMIN = 'ROOT_ADMIN',
  CUSTOMER = 'CUSTOMER',
}

export enum UserType {
  CHILD,
  PARENT,
}

export enum Tasks {
  PENDING = 'PENDING',
  OPEN = 'OPEN',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  FAIL = 'FAIL',
}

export enum AccountType {
  FREE = 'FREE',
  PREMIUM = 'PREMIUM',
}

export enum Action {
  Add,
  Edit,
}

export enum ChartTabs {
  User = 'user',
  Tasks = 'tasks',
  Transaction = 'transaction',
}

export enum ChartFilterOptions {
  ONE_MONTH = 'ONE_MONTH',
  THREE_MONTHS = 'THREE_MONTHS',
  ONE_YEAR = 'ONE_YEAR',
}

export enum RequestType {
  CURRENCY = 'CURRENCY',
  STOCK = 'STOCK',
  WALLET = 'WALLET',
}

export enum ExceptionError {
  B024 = 'B024',
  A000 = 'A000',
}
