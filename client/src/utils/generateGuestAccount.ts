const generateGuestAccount = () => {
  let nameHash = Date.now().toString().slice(-6) + Math.round(Math.random() * 10);
  let usernameHash = Date.now().toString().slice(-6) + Math.round(Math.random() * 10);
  let passwordHash = Date.now().toString().slice(-6) + Math.round(Math.random() * 10);
  const name = `GUEST${nameHash}`;
  const username = `GUEST${usernameHash}`;
  const password = `GUEST${passwordHash}`;

  return [name, username, password];
};

export default generateGuestAccount;
