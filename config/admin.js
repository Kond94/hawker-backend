module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f8b7d22970bd03c7f6f59fdb80e4c17a'),
  },
});
