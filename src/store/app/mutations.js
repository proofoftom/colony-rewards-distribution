export function setWallet(state, payload) {
  state.user.wallet = payload.wallet;
}

export function setNetworkClient(state, payload) {
  state.networkClient = payload.networkClient;
}

export function setColonyClient(state, payload) {
  state.colonyClient = payload.colonyClient;
}

export function setUserRoles(state, payload) {
  state.user.hasRootRole = payload.hasRootRole;
  state.user.hasFundingRole = payload.hasFundingRole;
}

export function toggleMoveFundsDialog(state, isOpen) {
  if (typeof isOpen === "boolean") {
    state.moveFundsDialog = isOpen;
  } else {
    state.moveFundsDialog = !state.moveFundsDialog;
  }
}

export function toggleSetRewardsDialog(state, isOpen) {
  if (typeof isOpen === "boolean") {
    state.setRewardsDialog = isOpen;
  } else {
    state.setRewardsDialog = !state.setRewardsDialog;
  }
}

export function toggleRewardDistributionDialog(state, payload) {
  if (typeof payload === "boolean") {
    state.rewardDistributionDialog = payload;
  } else {
    state.rewardDistributionDialog = !state.rewardDistributionDialog;
    state.selectedToken = payload.token;
  }
}

export function addRewardPotToken(state, payload) {
  state.rewardPotTokens.push({
    token: payload.token,
    balance: payload.balance
  });
}

export function clearRewardPotTokens(state) {
  state.rewardPotTokens = [];
}

export function addNonRewardPotToken(state, payload) {
  state.nonRewardPotTokens.push({
    token: payload.token,
    balance: payload.balance
  });
}

export function clearNonRewardPotTokens(state) {
  state.nonRewardPotTokens = [];
}

export function addDomain(state, payload) {
  state.domains.push(payload.domain);
}

export function clearDomains(state) {
  state.domains = [];
}

export function setRewardPercentage(state, payload) {
  state.rewardPercentage = payload.rewardPercentage;
}
