export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  createAccount: "/create-account/:id",
  movements: "/movements/:id",
  detailmovement: "/detail-movement/:id",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: routesPrefixes.movements,
  detailmovement: routesPrefixes.detailmovement,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
  createAccount: "/create-account/:id",
  createAccountFromAccount: `${routesPrefixes.createAccount}/:id`,
};
