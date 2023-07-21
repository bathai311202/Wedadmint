import {
  ApolloCache,
  ApolloError,
  ApolloQueryResult,
  DefaultContext,
  MutationFunctionOptions,
} from '@apollo/client';
import { MenuProps } from 'antd';
import { StringMap, TOptions } from 'i18next';
import {
  AccountType,
  ChartFilterOptions,
  Role,
  UserStatus,
  UserType,
} from './enum';

export interface IPageInfo {
  total: number;
}
export interface ITokenDecode {
  exp: number;
  firstName: string;
  iat: number;
  lastName: string;
  sub: string;
  uuid: string;
  role: string;
}

export interface IApolloErrors extends Omit<ApolloError, 'networkError'> {
  networkError?: {
    name: string;
    response: string;
    statusCode: number;
    result: {
      errors: {
        extensions: { code: string };
        name: string;
        message: string;
      }[];
    };
  };
}

export interface ILoginProps {
  username: string;
  password: string;
  remember: boolean;
}

export type MenuItem = Required<MenuProps>['items'][number];
export interface IMenuItemProps {
  label: React.ReactNode;
  key?: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
}

export interface IAdmin {
  id: number;
  createdAt: string;
  updatedAt: string;
  shortUID: string;
  uuid: string;
  rank: string;
  userId: number;
  username: string;
  email: string;
  isActive: boolean;
  isVerified: boolean;
  user: IUser;
}

export interface IAdmins {
  items: IAdmin[];
  pageInfo: IPageInfo;
}

export type IUser = {
  id: number;
  rank: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  status: UserStatus;
  role: Role;
  userType: UserType;
};

export interface IProfile {
  name: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
  avatarUrl: null;
  id: string;
}
export interface IParent {
  id: string;
  createdAt: string;
  updatedAt: string;
  bankName: string;
  fund: number;
  email: string;
  user: IUser;
  accountType: AccountType;
}

export interface IParents {
  items: IParent[];
  pageInfo: IPageInfo;
}
export interface IChild {
  id: string;
  updatedAt: string;
  createdAt: string;
  dateOfBirth: string;
  user: IUser;
  gender: string;
  parent: IParent;
  tasks: ITask[];
  stocks: IStock[];
  balance: number;
  totalCurrencyValues: {
    value: number;
  };
}

export interface IChilds {
  items: IChild[];
  pageInfo: IPageInfo;
}

export interface ITask {
  id: string;
  name: string;
  status: string;
}

export interface IStock {
  id: string | number;
  shortUID: string;
  uuid: string;
  rank: string;
  symbol: string;
  name: string;
  info: string;
}

export interface IStocksOfChild {
  items: IStock[];
  pageInfo: IPageInfo;
}

export interface IDictionaryWord {
  id: string;
  position: number;
  isDisplay: boolean;
  word: {
    en: string;
    ja: string;
  };
  explain: {
    en: string;
    ja: string;
  };
}
export interface IDictionaryWords {
  items: IDictionaryWord[];
  pageInfo: IPageInfo;
}

export type MutationType = (
  options?:
    | MutationFunctionOptions<
        {
          [key: string]: any;
        },
        {
          [key: string]: any;
        },
        DefaultContext,
        ApolloCache<any>
      >
    | undefined,
) => Promise<any>;

export type RefetchType = () => Promise<ApolloQueryResult<any>>;

export type TOptionsType = (
  key: string,
  options?: string | TOptions<StringMap> | undefined,
) => string;

export interface ICombineDataWithPastDatesProps {
  data: IChartData[];
  range: ChartFilterOptions;
}

export interface IChartData {
  x: string;
  y: string | number;
}

export interface ITableAction {
  id?: number | string;
  record?: any;
  label: string;
  hide?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  onClick?: (record: unknown) => void;
  onChange?: (record?: unknown) => void;
  type?: 'link' | 'button' | 'switch';
  href?: string;
}

export interface ITableActionProps {
  items: Array<ITableAction>;
}
