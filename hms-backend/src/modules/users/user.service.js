// src/modules/users/user.service.js

const User = require('./user.model');

/**
 * MOCK DATA (replace with DB later)
 */
const users = [
  new User({
    id: 1,
    tenantId: 'default',
    name: 'Admin User',
    email: 'admin@hms.com',
    phone: '9999999999',
    role: {
      name: 'ADMIN',
      permissions: ['user.read', 'user.create'],
    },
    type: 'STAFF',
  }),
];

/**
 * Get all users for a tenant
 */
const getUsers = async (tenantId) => {
  return users.filter((u) => u.tenantId === tenantId);
};

/**
 * Create user (staff / patient)
 */
const createUser = async (tenantId, data) => {
  const user = new User({
    id: users.length + 1,
    tenantId,
    ...data,
  });

  users.push(user);
  return user;
};

module.exports = {
  getUsers,
  createUser,
};
