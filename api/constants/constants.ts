const { NODE_ENV } = process.env;

export default {
    TESTING: NODE_ENV === 'test',
};
