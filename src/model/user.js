import { ref, provide, inject } from 'vue';

class User {
    constructor(data = {}) {
        this.id = data._id || '';
        this.fullname = data.fullname || '';
        this.email = data.email || '';
        this.password = data.password || '';
        this.role = data.role || '';
        this.avatar = data.profile?.avatar || '';
        this.socialLinks = data.profile?.social_links  || {
            facebook: '',
            twitter: '',
            linkedin: '',
            website: ''
        };
    }
}

export const provideUser = () => {
    const userRef = ref(new User())
    provide('user', userRef)
    return userRef
};

export const useUser = () => {
    return inject('user')
}

export default User