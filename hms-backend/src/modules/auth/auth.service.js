// src/modules/auth/auth.service.js

const jwt = require('jsonwebtoken');
const env = require('../../config/env');

/**
 * MOCK user fetch (replace with DB later)
 */
const getUserByUsername = async (username) => {
  // Later → DB query based on tenant
  if (username === 'admin') {
    return {
      id: 1,
      username: 'admin',
      password: 'admin123', // hashed in real app
      role: {
        name: 'ADMIN',
        permissions: ['patient.read', 'patient.write'],
      },
    };
  }
  return null;
};

/**
 * Login service
 */
const login = async ({ username, password }) => {
  const user = await getUserByUsername(username);

  if (!user || user.password !== password) {
    throw new Error('Invalid credentials');
  }

  const payload = {
    userId: user.id,
    role: user.role,
  };

  const token = jwt.sign(payload, env.jwt.secret, {
    expiresIn: env.jwt.expiresIn,
  });

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role.name,
    },
  };
};

module.exports = {
  login,
};
