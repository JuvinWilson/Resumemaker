const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
        phone: { type: String, default: '' },
        address: { type: String, default: '' },
        template: { type: String, default: 'template1' },  // Default template
        font: { type: String, default: 'Arial' },  // Default font
        color: { type: String, default: '#000000' },  // Default color (black)
        workExperience: [
        {
            company: { type: String },
            position: { type: String },
            startDate: { type: Date },
            endDate: { type: Date },
            description: { type: String },
        }],
        education: [
        {
            school: { type: String },
            degree: { type: String },
            startDate: { type: Date },
            endDate: { type: Date },
            description: { type: String },
        }],
        skills: [
        {
            skill: { type: String }
        }],
        achievements: [
        {
            title: { type: String },
            date: { type: Date },
            description: { type: String }
        }],
    }
});


// Password hashing before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare the entered password with the hashed one
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
