const mongoose = require('mongoose');
const Admin = require('./models/Admin');

mongoose.connect('mongodb://localhost:27017/eduConsultancy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const defaultAdmin = new Admin({ username: 'kyushuedu@gmail.com', password: 'StrongPass123' });
      await defaultAdmin.save();
      console.log('Default admin created: kyushuedu@gmail.com');
    } else {
      console.log('Admin already exists, consider updating password.');
      // Optional: Update existing admin with hashed password
      const admin = await Admin.findOne();
      if (admin && !await admin.comparePassword('StrongPass123')) {
        admin.password = 'StrongPass123'; // Will be hashed by pre-save hook
        await admin.save();
        console.log('Admin password updated with hash.');
      }
    }
    mongoose.connection.close();
  })
  .catch(err => console.log(err));