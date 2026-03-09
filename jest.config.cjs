
module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFiles: ['./setupTests.js'],
};






// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import { it, expect, describe, jest } from '@jest/globals';
